"use client";
import * as React from "react";
import PrimaryButton from "../Button/Button";
import styles from "./DemoButtons.module.scss";

interface Props {}

export default function DemoButtons() {
  return (
    <div className={styles.demoDownloads}>
      <PrimaryButton
        text={"Get 2025 Demo (from itch.io)"}
        onClick={() =>
          window.location.replace(
            "https://plasmashadowstudios.itch.io/robots-and-things"
          )
        }
      />
      <PrimaryButton
        text={"Get SAGE 2021 Demo (from Media Fire)"}
        variant={"outlined"}
        onClick={() =>
          window.location.replace(
            "https://www.mediafire.com/file/1wyb4cyfo6zon3q/8xjv74b83i_Robots_Things_SAGE_Demo.zip"
          )
        }
      />
    </div>
  );
}
