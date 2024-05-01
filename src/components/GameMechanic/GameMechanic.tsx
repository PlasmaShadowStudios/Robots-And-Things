import React from "react";
import "./GameMechanic.scss";

interface Props {
  src: string;
  alt: string;
  text: string;
}

const GameMechanic = ({ src, alt, text }: Props) => (
  <div className="gameMechanic">
    <img src={src} alt={alt} width={64} />
    <p className="mechanicText">{text}</p>
  </div>
);

export default GameMechanic;
