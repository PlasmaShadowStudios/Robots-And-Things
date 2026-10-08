"use client";

import { Canvas, ThreeEvent, useThree } from "@react-three/fiber";
import { Grid, Line, Text } from "@react-three/drei";
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import styles from "./LevelEditor.module.scss";

type Kind = "block" | "coin" | "puzzle" | "enemy" | "checkpoint" | "platform";
type LevelObject = { id: string; kind: Kind; position: [number, number, number]; assetUrl?: string };
type LevelDocument = { version: 1; objects: LevelObject[] };

const palette: { kind: Kind; label: string; glyph: string }[] = [
  { kind: "block", label: "Block", glyph: "▰" },
  { kind: "coin", label: "Coin", glyph: "●" },
  { kind: "puzzle", label: "Puzzle piece", glyph: "✦" },
  { kind: "enemy", label: "Enemy", glyph: "◆" },
  { kind: "checkpoint", label: "Checkpoint", glyph: "⚑" },
  { kind: "platform", label: "Moving platform", glyph: "▬" },
];

const colors: Record<Kind, string> = {
  block: "#6dd3c2", coin: "#ffd166", puzzle: "#bd8cff", enemy: "#ff6f72", checkpoint: "#63a8ff", platform: "#f5a65b",
};

function Placeholder({ object, onSelect }: { object: LevelObject; onSelect: () => void }) {
  const [x, y, z] = object.position;
  const common = { position: [x, y, z] as [number, number, number], onClick: (event: ThreeEvent<MouseEvent>) => { event.stopPropagation(); onSelect(); } };
  // assetUrl is reserved for a future FBX loader; keep the procedural placeholder as fallback.
  if (object.kind === "coin" || object.kind === "enemy") {
    return <mesh {...common} castShadow><sphereGeometry args={[object.kind === "coin" ? 0.34 : 0.42, 24, 20]} /><meshStandardMaterial color={colors[object.kind]} roughness={0.35} metalness={object.kind === "coin" ? 0.55 : 0.05} /></mesh>;
  }
  if (object.kind === "puzzle") {
    return <mesh {...common} castShadow rotation={[0.2, 0.3, Math.PI / 4]}><boxGeometry args={[0.66, 0.66, 0.66]} /><meshStandardMaterial color={colors.puzzle} roughness={0.3} /></mesh>;
  }
  const dimensions: [number, number, number] = object.kind === "platform" ? [1.8, 1, 0.35] : object.kind === "checkpoint" ? [0.45, 0.45, 1.4] : [1, 1, 1];
  return <mesh {...common} castShadow><boxGeometry args={dimensions} /><meshStandardMaterial color={colors[object.kind]} roughness={0.55} /></mesh>;
}

function EditorScene({ objects, activeKind, zLayer, onPlace, onSelectObject, selectedId, setHint }: {
  objects: LevelObject[]; activeKind: Kind; zLayer: number; onPlace: (x: number, y: number) => void;
  onSelectObject: (id: string) => void; selectedId: string | null; setHint: (hint: string) => void;
}) {
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
    element.addEventListener("mousedown", down);
    element.addEventListener("contextmenu", context);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
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

  const handlePlace = (event: ThreeEvent<MouseEvent>) => {
    if (event.button !== 0) return;
    event.stopPropagation();
    onPlace(Math.round(event.point.x), Math.round(event.point.y));
  };
  return <>
    <ambientLight intensity={1.1} /><directionalLight position={[8, -5, 14]} intensity={2.4} castShadow />
    <mesh rotation={[0, 0, 0]} position={[0, 0, zLayer - 0.06]} onClick={handlePlace} onPointerMove={(event) => { if (event.buttons === 1) { setHint(`Grid ${Math.round(event.point.x)}, ${Math.round(event.point.y)}, ${zLayer}`); } }}>
      <planeGeometry args={[200, 200]} /><meshBasicMaterial transparent opacity={0} depthWrite={false} />
    </mesh>
    <Grid position={[0, 0, zLayer - 0.05]} rotation={[Math.PI / 2, 0, 0]} args={[20, 20]} cellSize={1} sectionSize={5} cellColor="#456177" sectionColor="#78a3b7" fadeDistance={35} infiniteGrid />
    <Line points={[[-10, 0, zLayer], [10, 0, zLayer]]} color="#ef6c77" lineWidth={1} />
    <Line points={[[0, -10, zLayer], [0, 10, zLayer]]} color="#80d9ae" lineWidth={1} />
    {objects.map((object) => <group key={object.id}>
      <Placeholder object={object} onSelect={() => onSelectObject(object.id)} />
      {selectedId === object.id && <mesh position={object.position}><boxGeometry args={[1.12, 1.12, 1.12]} /><meshBasicMaterial color="white" wireframe /></mesh>}
    </group>)}
    <Text position={[-9.6, 9.4, zLayer + 0.01]} fontSize={0.35} color="#d9e8ee" anchorX="left">XY GRID · Z {zLayer}</Text>
  </>;
}

export default function LevelEditor() {
  const [objects, setObjects] = useState<LevelObject[]>([]);
  const [activeKind, setActiveKind] = useState<Kind>("block");
  const [zLayer, setZLayer] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hint, setHint] = useState("Click the grid to place an object");
  const fileInput = useRef<HTMLInputElement>(null);
  const documentData = useMemo<LevelDocument>(() => ({ version: 1, objects }), [objects]);

  const placeObject = (x: number, y: number) => {
    const position: [number, number, number] = [x, y, zLayer];
    const offset = activeKind === "coin" || activeKind === "puzzle" ? 0.5 : activeKind === "enemy" ? 0.42 : activeKind === "checkpoint" ? 0.7 : 0;
    position[2] += offset;
    const next: LevelObject = { id: crypto.randomUUID(), kind: activeKind, position };
    setObjects((current) => [...current, next]); setSelectedId(next.id); setHint(`${palette.find((item) => item.kind === activeKind)?.label} placed at ${x}, ${y}, ${zLayer}`);
  };
  const saveFile = () => {
    const blob = new Blob([JSON.stringify(documentData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob); const link = document.createElement("a");
    link.href = url; link.download = "robots-and-things-level.json"; link.click(); URL.revokeObjectURL(url);
  };
  const loadFile = async (file?: File) => {
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text()) as LevelDocument;
      if (!parsed || !Array.isArray(parsed.objects)) throw new Error("This file does not contain a level object list.");
      const valid = parsed.objects.filter((object) => object && palette.some((entry) => entry.kind === object.kind) && Array.isArray(object.position) && object.position.length === 3);
      setObjects(valid); setSelectedId(null); setHint(`Loaded ${valid.length} objects from ${file.name}`);
    } catch (error) { setHint(error instanceof Error ? error.message : "Unable to load that level file"); }
    if (fileInput.current) fileInput.current.value = "";
  };
  const copyToClipboard = async () => {
    try { await navigator.clipboard.writeText(JSON.stringify(documentData, null, 2)); setHint("Level JSON copied — ready to paste into a playtest"); }
    catch { setHint("Clipboard access was blocked by the browser"); }
  };
  const deleteSelected = () => { setObjects((current) => current.filter((item) => item.id !== selectedId)); setSelectedId(null); };

  return <main className={styles.editor}>
    <header className={styles.topbar}>
      <div className={styles.brand}><span className={styles.brandMark}>R</span><div><strong>LEVEL EDITOR</strong><small>ROBOTS &amp; THINGS</small></div></div>
      <div className={styles.fileActions}>
        <button onClick={() => fileInput.current?.click()} className={styles.secondary}><span>↥</span> Load</button>
        <button onClick={saveFile} className={styles.secondary}><span>↧</span> Save JSON</button>
        <input ref={fileInput} type="file" accept=".json,application/json" hidden onChange={(event) => loadFile(event.target.files?.[0])} />
        <i className={styles.divider} />
        <button onClick={copyToClipboard} className={styles.playtest}><span>▣</span> Copy to Clipboard to Playtest</button>
      </div>
      <div className={styles.layerControl}><label>Z</label><button aria-label="Decrease Z layer" onClick={() => setZLayer((z) => z - 1)}>−</button><output>{zLayer}</output><button aria-label="Increase Z layer" onClick={() => setZLayer((z) => z + 1)}>+</button></div>
    </header>
    <section className={styles.workspace}>
      <Canvas className={styles.canvas} camera={{ position: [18, -18, 18], fov: 48, up: [0, 0, 1] }} shadows onCreated={({ gl }) => { gl.setClearColor("#101c29"); }}>
        <Suspense fallback={null}><EditorScene objects={objects} activeKind={activeKind} zLayer={zLayer} onPlace={placeObject} onSelectObject={setSelectedId} selectedId={selectedId} setHint={setHint} /></Suspense>
      </Canvas>
      <div className={styles.help}><span className={styles.helpDot} />{hint}<span className={styles.helpKeys}><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> move <b>·</b> right drag rotate</span></div>
      <aside className={styles.stats}><span>{objects.length.toString().padStart(2, "0")} OBJECTS</span><span>GRID · 1 UNIT</span></aside>
    </section>
    <footer className={styles.paletteBar}>
      <div className={styles.paletteIntro}><span>PLACE OBJECT</span><small>Choose a piece, then click the grid</small></div>
      <div className={styles.paletteItems}>{palette.map((item) => <button key={item.kind} className={`${styles.paletteItem} ${activeKind === item.kind ? styles.active : ""}`} onClick={() => setActiveKind(item.kind)} aria-pressed={activeKind === item.kind}>
        <span className={styles.objectIcon} style={{ "--object-color": colors[item.kind] } as React.CSSProperties}>{item.glyph}</span><span>{item.label}</span>
      </button>)}</div>
      <div className={styles.selection}>{selectedId ? <><span>SELECTED</span><button onClick={deleteSelected}>Delete <kbd>⌫</kbd></button></> : <span>NO SELECTION</span>}</div>
    </footer>
  </main>;
}
