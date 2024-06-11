import React, { FC } from "react";
import styles from "./FullScreenshotView.module.scss";
import Image, { StaticImageData } from "next/image";

interface FullScreenshotViewProps {
  image: StaticImageData | undefined;
  widthPercentage: number;
  title: string;
}

const FullScreenshotView: FC<FullScreenshotViewProps> = ({
  image,
  widthPercentage,
  title,
}) => (
  <>
    {image && (
      <section className={styles.FullScreenshotView}>
        <h2>{title}</h2>
        <Image
          src={image}
          alt="background"
          title={title}
          style={{ width: `${widthPercentage}%`,  height: `${widthPercentage}%`, margin:'auto' }}
        />
      </section>
    )}
    ;
  </>
);

export default FullScreenshotView;
