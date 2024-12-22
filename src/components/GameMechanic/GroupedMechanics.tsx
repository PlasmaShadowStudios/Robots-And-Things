import React, { ReactNode } from "react";
import styles from "./GroupedMechanics.module.scss";

export enum GroupColour {
  WHITE = "white",
  BLUE = "darkBlue",
  RED = "crimson",
  GREEN = "green",
  YELLOW = "goldenRod",
  PURPLE = "RebeccaPurple",
  ORANGE = "orange",
  BRIGHT_GREEN = "#05ce78"
}

interface Props {
  heading: string;
  isGameTitle?: boolean;
  color: GroupColour;
  children: ReactNode;
}

export const GroupedMechanics = ({
  heading,
  isGameTitle,
  color,
  children,
}: Props) => (
  <div className={styles.groupedMechanics}>
    {isGameTitle ? (
      <h1 style={{ backgroundColor: color }}>{heading}</h1>
    ) : (
      <h2 style={{ backgroundColor: color }}>{heading}</h2>
    )}
    <section
      style={{ borderColor: color, textAlign: isGameTitle ? "center" : "left" }}
    >
      {children}
    </section>
  </div>
);
