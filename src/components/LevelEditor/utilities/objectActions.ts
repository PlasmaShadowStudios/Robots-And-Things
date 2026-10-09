import { ThreeEvent } from "@react-three/fiber";
import { Kind, LevelObject, palette } from "./levelTypes";

export function placeObject(x: number, y: number, zLayer: number, activeKind: Kind, setObjects: (update: (current: LevelObject[]) => LevelObject[]) => void, setSelectedId: (id: string | null) => void, setHint: (hint: string) => void) {
  const position: [number, number, number] = [x, y, zLayer];
  position[2] += activeKind === "coin" || activeKind === "puzzle" ? 0.5 : activeKind === "enemy" ? 0.42 : activeKind === "checkpoint" ? 0.7 : 0;
  const next: LevelObject = { id: crypto.randomUUID(), kind: activeKind, position };
  setObjects((current) => [...current, next]);
  setSelectedId(next.id);
  setHint(`${palette.find((item) => item.kind === activeKind)?.label} placed at ${x}, ${y}, ${zLayer}`);
}

export function handlePlace(event: ThreeEvent<MouseEvent>, onPlace: (x: number, y: number) => void) {
  if (event.button !== 0) return;
  event.stopPropagation();
  onPlace(Math.round(event.point.x), Math.round(event.point.y));
}

export function deleteSelected(selectedId: string | null, setObjects: (update: (current: LevelObject[]) => LevelObject[]) => void, setSelectedId: (id: string | null) => void) {
  setObjects((current) => current.filter((item) => item.id !== selectedId));
  setSelectedId(null);
}
