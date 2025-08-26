import React from "react";
import styles from "./DevMapContainer.module.scss";
import DevMap from "./";

interface DevMapRowProps {
  items: {
    version: number;
    completionStatus: number;
    mainFocusOfVersion: string;
    details: string;
  }[];
}

/*
This component is used to display a group of DevMap components.
So you could have a row of completed milestones, and another row of WIP milestones.
*/
function DevMapRow({ items }: DevMapRowProps) {
  return (
    <div className={styles.devMapRow}>
      {items.map((item, index) => (
        <DevMap
          key={index}
          version={item.version}
          completionStatus={item.completionStatus}
          mainFocusOfVersion={item.mainFocusOfVersion}
          details={item.details}
        />
      ))}
    </div>
  );
}

export default DevMapRow;
