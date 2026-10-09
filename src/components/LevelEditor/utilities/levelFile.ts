import { LevelDocument, LevelObject, palette } from "./levelTypes";

export function saveFile(documentData: LevelDocument) {
  const blob = new Blob([JSON.stringify(documentData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "robots-and-things-level.json";
  link.click();
  URL.revokeObjectURL(url);
}

export async function loadFile(file: File | undefined, setObjects: (objects: LevelObject[]) => void, setSelectedId: (id: string | null) => void, setHint: (hint: string) => void, fileInput: React.RefObject<HTMLInputElement | null>) {
  if (!file) return;
  try {
    const parsed = JSON.parse(await file.text()) as LevelDocument;
    if (!parsed || !Array.isArray(parsed.objects)) throw new Error("This file does not contain a level object list.");
    const valid = parsed.objects.filter((object) => object && palette.some((entry) => entry.kind === object.kind) && Array.isArray(object.position) && object.position.length === 3);
    setObjects(valid); setSelectedId(null); setHint(`Loaded ${valid.length} objects from ${file.name}`);
  } catch (error) { setHint(error instanceof Error ? error.message : "Unable to load that level file"); }
  if (fileInput.current) fileInput.current.value = "";
}
