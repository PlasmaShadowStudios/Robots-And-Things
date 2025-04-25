import * as React from "react";
import DevMap from "./DevMap";

import styles from "./DevMapContainer.module.scss";

function DevMapContainer() {
  return (
    <div className={styles.devMapContainer}>
      <section>
        <h2>Completed Milestones</h2>

        <div className={styles.devMapRow}>
          <DevMap
            version={0.4}
            completionStatus={2}
            mainFocusOfVersion={"Base Character Movement And Gameplay"}
            details={"The original 2021 demo"}
          />
          <DevMap
            version={0.5}
            completionStatus={2}
            mainFocusOfVersion={"More Content"}
            details={
              "Major un-lockable abilities, more levels, worlds, and bosses. A complete first draft of the game."
            }
          />
          <DevMap
            version={0.6}
            completionStatus={2}
            mainFocusOfVersion={"Move Meter"}
            details={
              "Better feedback for what moves you can use in the air, plus rework how many charges you have per move."
            }
          />
          <DevMap
            version={0.7}
            completionStatus={2}
            mainFocusOfVersion={"Score Attack Elements"}
            details={
              "Chain moves off enemies to score points. Use your points across levels to unlock boss levels and progress through the game."
            }
          />
        </div>
      </section>

      <section>
        <h2>Future Milestones</h2>
        <p>
          This is roughly what's left that's planned for the game's development.
          <br />
          <br />
          Current Version: v0.8
        </p>
        <br />
        <div className={styles.devMapRow}>
          <DevMap
            version={0.8}
            completionStatus={1}
            mainFocusOfVersion={"Test New Mechanics"}
            details={"Test how score mechanics and move progression feels."}
          />
          <DevMap
            version={0.9}
            completionStatus={0}
            mainFocusOfVersion={"Level Design & Boss Polsih"}
            details={"Polish up the hub worlds, levels, and bosses."}
          />
          <DevMap
            version={1.0}
            completionStatus={0}
            mainFocusOfVersion={"Steam Release"}
            details={"Main game complete!"}
          />
        </div>
      </section>

      <section>
        <h2>Extra Milestones</h2>
        <p>
          Free updates with extra content or releases to other platforms could
          happen in the distant future.
        </p>
        <br />
        <div className={styles.devMapRow}>
          <DevMap
            version={1.5}
            completionStatus={0}
            mainFocusOfVersion={"Overhauled Visuals"}
            details={"More detailed environments!"}
          />
          <DevMap
            version={1.5}
            completionStatus={0}
            mainFocusOfVersion={"Switch 2 Port"}
            details={""}
          />
          <DevMap
            version={2.0}
            completionStatus={1}
            mainFocusOfVersion={"Level Editor"}
            details={
              "An editor to create your own levels and share them with others. This has been partially started but is very placeholdery and experimental so far."
            }
          />
        </div>
      </section>
    </div>
  );
}

export default DevMapContainer;
