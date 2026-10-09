"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo, useRef, useState } from "react";
import styles from "./LevelEditor.module.scss";
import EditorScene from "./components/EditorScene";
import copyToClipboard from "./utilities/copyToClipboard";
import { loadFile, saveFile } from "./utilities/levelFile";
import { deleteSelected, placeObject } from "./utilities/objectActions";
import { colors, Kind, LevelDocument, LevelObject, palette } from "./utilities/levelTypes";

export default function LevelEditor() {
  const [objects, setObjects] = useState<LevelObject[]>([]);
  const [activeKind, setActiveKind] = useState<Kind>("block");
  const [zLayer, setZLayer] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hint, setHint] = useState("Click the grid to place an object");
  const fileInput = useRef<HTMLInputElement>(null);
  const documentData = useMemo<LevelDocument>(() => ({ version: 1, objects }), [objects]);

  return <main className={styles.editor}>
    <header className={styles.topbar}>
      <div className={styles.brand}><span className={styles.brandMark}>R</span><div><strong>LEVEL EDITOR</strong><small>ROBOTS &amp; THINGS</small></div></div>
      <div className={styles.fileActions}>
        <button onClick={() => fileInput.current?.click()} className={styles.secondary}><span>↥</span> Load</button>
        <button onClick={() => saveFile(documentData)} className={styles.secondary}><span>↧</span> Save JSON</button>
        <input ref={fileInput} type="file" accept=".json,application/json" hidden onChange={(event) => loadFile(event.target.files?.[0], setObjects, setSelectedId, setHint, fileInput)} />
        <i className={styles.divider} />
        <button onClick={() => copyToClipboard(documentData, setHint)} className={styles.playtest}><span>▣</span> Copy to Clipboard to Playtest</button>
      </div>
      <div className={styles.layerControl}><label>Z</label><button aria-label="Decrease Z layer" onClick={() => setZLayer((z) => z - 1)}>−</button><output>{zLayer}</output><button aria-label="Increase Z layer" onClick={() => setZLayer((z) => z + 1)}>+</button></div>
    </header>
    <section className={styles.workspace}>
      <Canvas className={styles.canvas} camera={{ position: [18, -18, 18], fov: 48, up: [0, 0, 1] }} shadows onCreated={({ gl }) => { gl.setClearColor("#101c29"); }}>
        <Suspense fallback={null}><EditorScene objects={objects} zLayer={zLayer} onPlace={(x, y) => placeObject(x, y, zLayer, activeKind, setObjects, setSelectedId, setHint)} onSelectObject={setSelectedId} selectedId={selectedId} setHint={setHint} /></Suspense>
      </Canvas>
      <div className={styles.help}><span className={styles.helpDot} />{hint}<span className={styles.helpKeys}><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> move <b>·</b> right drag rotate</span></div>
      <aside className={styles.stats}><span>{objects.length.toString().padStart(2, "0")} OBJECTS</span><span>GRID · 1 UNIT</span></aside>
    </section>
    <footer className={styles.paletteBar}>
      <div className={styles.paletteIntro}><span>PLACE OBJECT</span><small>Choose a piece, then click the grid</small></div>
      <div className={styles.paletteItems}>{palette.map((item) => <button key={item.kind} className={`${styles.paletteItem} ${activeKind === item.kind ? styles.active : ""}`} onClick={() => setActiveKind(item.kind)} aria-pressed={activeKind === item.kind}>
        <span className={styles.objectIcon} style={{ "--object-color": colors[item.kind] } as React.CSSProperties}>{item.glyph}</span><span>{item.label}</span>
      </button>)}</div>
      <div className={styles.selection}>{selectedId ? <><span>SELECTED</span><button onClick={() => deleteSelected(selectedId, setObjects, setSelectedId)}>Delete <kbd>⌫</kbd></button></> : <span>NO SELECTION</span>}</div>
    </footer>
  </main>;
}
