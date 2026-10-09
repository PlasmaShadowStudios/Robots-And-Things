import { LevelDocument } from "./levelTypes";

export default async function copyToClipboard(documentData: LevelDocument, setHint: (hint: string) => void) {
  try { await navigator.clipboard.writeText(JSON.stringify(documentData, null, 2)); setHint("Level JSON copied — ready to paste into a playtest"); }
  catch { setHint("Clipboard access was blocked by the browser"); }
}
