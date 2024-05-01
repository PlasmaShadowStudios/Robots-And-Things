import React, { ReactNode } from "react";
import "./GameMechanic.scss";

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
  <>
    <h1 style={{ backgroundColor: color }}>{heading}</h1>
    <section style={{ borderColor: color }} className={`groupedMechanics`}>
      {children}
    </section>
  </>
);
