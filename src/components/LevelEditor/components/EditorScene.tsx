import { useThree } from "@react-three/fiber";
import { Grid, Line, Text } from "@react-three/drei";
import { useCallback, useEffect, useRef } from "react";
import * as THREE from "three";
import Placeholder from "./Placeholder";
import { Kind, LevelObject } from "../utilities/levelTypes";
import { handlePlace } from "../utilities/objectActions";

type Props = { objects: LevelObject[]; zLayer: number; onPlace: (x: number, y: number) => void; onSelectObject: (id: string) => void; selectedId: string | null; setHint: (hint: string) => void };

export default function EditorScene({ objects, zLayer, onPlace, onSelectObject, selectedId, setHint }: Props) {
  const { camera, gl } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 0));
  const drag = useRef<{ x: number; y: number; azimuth: number; elevation: number } | null>(null);
  const spherical = useRef(new THREE.Spherical(23, Math.PI / 3, Math.PI / 4));
  const updateCamera = useCallback(() => {
    const offset = new THREE.Vector3().setFromSpherical(spherical.current);
    camera.position.copy(target.current).add(offset);
    camera.up.set(0, 0, 1);
    camera.lookAt(target.current);
    camera.updateProjectionMatrix();
  }, [camera]);
  useEffect(() => {
    updateCamera();
    const element = gl.domElement;
    const down = (event: MouseEvent) => {
      if (event.button !== 2) return;
      event.preventDefault();
      const s = spherical.current;
      drag.current = { x: event.clientX, y: event.clientY, azimuth: s.theta, elevation: s.phi };
    };
    const move = (event: MouseEvent) => {
      const start = drag.current;
      if (!start) return;
      const s = spherical.current;
      s.theta = start.azimuth - (event.clientX - start.x) * 0.006;
      s.phi = THREE.MathUtils.clamp(start.elevation + (event.clientY - start.y) * 0.006, 0.18, Math.PI - 0.18);
      updateCamera();
    };
    const up = () => { drag.current = null; };
    const context = (event: Event) => event.preventDefault();
    element.addEventListener("mousedown", down); element.addEventListener("contextmenu", context);
    window.addEventListener("mousemove", move); window.addEventListener("mouseup", up);
    return () => { element.removeEventListener("mousedown", down); element.removeEventListener("contextmenu", context); window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); };
  }, [gl, updateCamera]);
  useEffect(() => {
    const keys = new Set<string>();
    const onDown = (event: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((event.target as HTMLElement)?.tagName)) return;
      const key = event.key.toLowerCase();
      if (["w", "a", "s", "d"].includes(key)) { event.preventDefault(); keys.add(key); }
    };
    const onUp = (event: KeyboardEvent) => keys.delete(event.key.toLowerCase());
    const tick = () => {
      if (keys.size) {
        const step = 0.24;
        const theta = spherical.current.theta;
        const forward = new THREE.Vector3(-Math.cos(theta), -Math.sin(theta), 0);
        const right = new THREE.Vector3(-forward.y, forward.x, 0);
        if (keys.has("w")) target.current.addScaledVector(forward, step);
        if (keys.has("s")) target.current.addScaledVector(forward, -step);
        if (keys.has("d")) target.current.addScaledVector(right, step);
        if (keys.has("a")) target.current.addScaledVector(right, -step);
        updateCamera();
      }
    };
    window.addEventListener("keydown", onDown); window.addEventListener("keyup", onUp);
    const timer = window.setInterval(tick, 16);
    return () => { window.clearInterval(timer); window.removeEventListener("keydown", onDown); window.removeEventListener("keyup", onUp); };
  }, [updateCamera]);
  return <>
    <ambientLight intensity={1.1} /><directionalLight position={[8, -5, 14]} intensity={2.4} castShadow />
    <mesh position={[0, 0, zLayer - 0.06]} onClick={(event) => handlePlace(event, onPlace)} onPointerMove={(event) => { if (event.buttons === 1) setHint(`Grid ${Math.round(event.point.x)}, ${Math.round(event.point.y)}, ${zLayer}`); }}>
      <planeGeometry args={[200, 200]} /><meshBasicMaterial transparent opacity={0} depthWrite={false} />
    </mesh>
    <Grid position={[0, 0, zLayer - 0.05]} rotation={[Math.PI / 2, 0, 0]} args={[20, 20]} cellSize={1} sectionSize={5} cellColor="#456177" sectionColor="#78a3b7" fadeDistance={35} infiniteGrid />
    <Line points={[[-10, 0, zLayer], [10, 0, zLayer]]} color="#ef6c77" lineWidth={1} /><Line points={[[0, -10, zLayer], [0, 10, zLayer]]} color="#80d9ae" lineWidth={1} />
    {objects.map((object) => <group key={object.id}><Placeholder object={object} onSelect={() => onSelectObject(object.id)} />{selectedId === object.id && <mesh position={object.position}><boxGeometry args={[1.12, 1.12, 1.12]} /><meshBasicMaterial color="white" wireframe /></mesh>}</group>)}
    <Text position={[-9.6, 9.4, zLayer + 0.01]} fontSize={0.35} color="#d9e8ee" anchorX="left">XY GRID · Z {zLayer}</Text>
  </>;
}
