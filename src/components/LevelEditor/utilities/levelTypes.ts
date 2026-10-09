export type Kind = "block" | "coin" | "puzzle" | "enemy" | "checkpoint" | "platform";
export type LevelObject = { id: string; kind: Kind; position: [number, number, number]; assetUrl?: string };
export type LevelDocument = { version: 1; objects: LevelObject[] };

export const palette: { kind: Kind; label: string; glyph: string }[] = [
  { kind: "block", label: "Block", glyph: "▰" },
  { kind: "coin", label: "Coin", glyph: "●" },
  { kind: "puzzle", label: "Puzzle piece", glyph: "✦" },
  { kind: "enemy", label: "Enemy", glyph: "◆" },
  { kind: "checkpoint", label: "Checkpoint", glyph: "⚑" },
  { kind: "platform", label: "Moving platform", glyph: "▬" },
];

export const colors: Record<Kind, string> = {
  block: "#6dd3c2", coin: "#ffd166", puzzle: "#bd8cff", enemy: "#ff6f72", checkpoint: "#63a8ff", platform: "#f5a65b",
};
