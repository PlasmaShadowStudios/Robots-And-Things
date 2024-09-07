'use client';
import * as React from "react";
import PrimaryButton from "../Button/Button";
import styles from './DemoButtons.module.scss';

export default function DemoButtons() {
  return (
    <div className={styles.demoDownloads}>
    <PrimaryButton
      text={"Download SAGE 2021 Demo"}
      onClick={() =>
        window.location.replace(
          "https://www.mediafire.com/file/1wyb4cyfo6zon3q/8xjv74b83i_Robots_Things_SAGE_Demo.zip"
        )
      }
    />
    <PrimaryButton
      text={"Future demos may be posted later!"}
      variant={"outlined"}
      onClick={() => {}}
    />
  </div>
  );
}
