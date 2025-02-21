"use client";
import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

import Header from "../Header/Header";
import styles from "./Page.module.scss";
import Image, { StaticImageData } from "next/image";
import bg from "../../images/screenshots/DemoIslands_1.png";
import bg2 from "../../images/screenshots/Autumn Abyss.png";
import bg3 from "../../images/screenshots/Sand Castle.png";
import AutumnAbyssTopDown from "../../images/screenshots/Autumn Abyss Top Down.png";
import SandCastleTopDown from "../../images/screenshots/Sand Castle Top Down.png";
import FullScreenshotView from "../FullScreenshotView/FullScreenshotView";
import PageBackground, { BackgroundImages } from "./PageBackground";

const images = [
  {
    screenshot: bg,
    width: 75,
    title: "Demo Islands",
  },
  {
    screenshot: bg2,
    width: 75,
    title: "Autumn Abyss",
  },
  {
    screenshot: bg3,
    width: 75,
    title: "Shuffling Tropics - Sand Castle",
  },
  {
    screenshot: AutumnAbyssTopDown,
    width: 75,
    title: "Autumn Abyss (Zoomed Out)",
  },
  {
    screenshot: SandCastleTopDown,
    width: 75,
    title: "Sand Castle (Zoomed Out)",
  },
];

export default function ScreenshotsPage() {
  const [showFullScreenshot, setShowFullScreenshot] =
    useState<StaticImageData>();

  const [widthPercentage, setWidthPercentage] = useState<number>(100);
  const [title, setTitle] = useState<string>("");

  const BlockbotFBX = useLoader(FBXLoader, "./models/Blockbot.fbx");

  return (
    <>
      <Header currentPage="Screenshots" />
      <FullScreenshotView
        image={showFullScreenshot}
        widthPercentage={widthPercentage}
        title={title}
      />
      <div className={styles.pageContainer}>
        <PageBackground imagesToShow={[BackgroundImages.GENERAL_BACKGROUND]} />

        <section>
          {images.map((img) => (
            <Image
              key={img.screenshot.src}
              className={styles.imagePreview}
              src={img.screenshot}
              alt="screenshot"
              title={img.screenshot.src}
              onClick={() => {
                if (showFullScreenshot === img.screenshot) {
                  setShowFullScreenshot(undefined);
                } else {
                  setShowFullScreenshot(img.screenshot);
                  setWidthPercentage(img.width);
                  setTitle(img.title);
                }
              }}
            />
          ))}
        </section>

        <section>
          <Canvas>
            <OrbitControls />
            <ambientLight />
            <pointLight position={[0, 1, 0]} />
            <primitive
              object={BlockbotFBX}
              position={[0, -1, 0]}
              scale={[0.01, 0.01, 0.01]}
              rotation={[Math.PI / -2, 0, 0]}
            />
          </Canvas>
        </section>
      </div>
    </>
  );
}
