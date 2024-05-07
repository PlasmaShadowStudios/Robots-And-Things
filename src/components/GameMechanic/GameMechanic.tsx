import React from "react";
import Image from "next/image";
import styles from "./GameMechanic.module.scss";

interface Props {
  src: string;
  alt: string;
  text: string;
}

const GameMechanic = ({ src, alt, text }: Props) => (
  <div className={styles.gameMechanic}>
    <Image src={src} alt={alt} width={64} quality={100} unoptimized />
    <p className={styles.mechanicText}>{text}</p>
  </div>
);

export default GameMechanic;
