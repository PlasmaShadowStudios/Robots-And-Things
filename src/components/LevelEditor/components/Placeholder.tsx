import { ThreeEvent } from "@react-three/fiber";
import { colors, LevelObject } from "../utilities/levelTypes";

export default function Placeholder({ object, onSelect }: { object: LevelObject; onSelect: () => void }) {
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
