import React, { ReactNode } from "react";
import styles from "./GroupedMechanics.module.scss";

export enum GroupColour {
  WHITE = "white",
  BLUE = "darkBlue",
  RED = "crimson",
  GREEN = "green",
  YELLOW = "goldenRod",
}

interface Props {
  heading: string;
  color: GroupColour;
  children: ReactNode;
}

export const GroupedMechanics = ({ heading, color, children }: Props) => (
  <div className={styles.groupedMechanics}>
    <h2 style={{ backgroundColor: color }}>{heading}</h2>
    <section style={{ borderColor: color }}>{children}</section>
  </div>
);
