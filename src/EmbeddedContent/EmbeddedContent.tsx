import React, { FC } from "react";
import styles from "./EmbeddedContent.module.scss";

interface Props {
  type: string;
  id: string;
}

const EmbeddedContent: FC<Props> = ({ type, id }: Props) => (
  <div className={styles.EmbeddedContent} data-testid="EmbeddedContent">
    {type === "video" && (
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    )}
    {type === "gifv" && (
      <iframe
        src={`https://giphy.com/embed/${id}`}
        width="480"
        height="360"
        className="giphy-embed"
        allowFullScreen
      />
    )}
    <br />
  </div>
);

export default EmbeddedContent;
