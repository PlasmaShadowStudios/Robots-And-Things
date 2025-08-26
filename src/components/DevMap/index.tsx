import * as React from "react";
import styles from "./index.module.scss";

interface Props {
  version: number;
  mainFocusOfVersion: string;
  details: string;
  completionStatus?: number;
}

const classNames: string[] = [
  styles.incomplete,
  styles.workInProgress,
  styles.complete,
];

function DevMap({
  version,
  mainFocusOfVersion,
  completionStatus,
  details,
}: Props) {
  return (
    <div className={styles.devMap}>
      {
        <div className={classNames[completionStatus || 0]}>
          <p className={styles.version}>
            v{version.toFixed(1)}
            <br />
            <br />
            {mainFocusOfVersion}
          </p>
        </div>
      }
      <p className={styles.description}>{details}</p>
    </div>
  );
}

export default DevMap;
