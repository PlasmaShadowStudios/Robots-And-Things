import * as React from "react";
import DevMapRow from "./DevMapRow";
import styles from "./DevMapContainer.module.scss";

//A large container containing different rows of dev milestones.
function DevMapContainer() {
  const completedMilestones = [
    {
      version: 0.4,
      completionStatus: 2,
      mainFocusOfVersion: "Base Gameplay",
      details: "The original 2021 demo with all the base moves, levels, and collectables.",
    },
    {
      version: 0.5,
      completionStatus: 2,
      mainFocusOfVersion: "More Content",
      details:
        "Major un-lockable abilities, more levels, worlds, and bosses. A complete first draft of the game.",
    },
    {
      version: 0.6,
      completionStatus: 2,
      mainFocusOfVersion: "Move Meter",
      details:
        "Better feedback for what moves you can use in the air, plus rework how many charges you have per move.",
    },
    {
      version: 0.7,
      completionStatus: 2,
      mainFocusOfVersion: "Score Elements",
      details:
        "Chain moves off enemies to score points. Use your points across levels to unlock boss levels and progress through the game.",
    },
  ];

  const futureMilestones = [
    {
      version: 0.8,
      completionStatus: 1,
      mainFocusOfVersion: "Test & Balance New Mechanics",
      details: "Test how score mechanics and move progression feels.",
    },
    {
      version: 0.9,
      completionStatus: 0,
      mainFocusOfVersion: "Level Design & Boss Polish",
      details: "Polish up the hub worlds, levels, and bosses.",
    },
    {
      version: 1.0,
      completionStatus: 0,
      mainFocusOfVersion: "Release Game Onto Steam",
      details: "The game is completed and released onto steam!",
    },
  ];

  const extraMilestones = [
    {
      version: 1.5,
      completionStatus: 0,
      mainFocusOfVersion: "Overhauled Visuals",
      details: "More detailed environments across levels and hub worlds!",
    },
    {
      version: 1.5,
      completionStatus: 0,
      mainFocusOfVersion: "Switch 2 Port",
      details: "If we can get the game released onto steam, and get dev kits, we could potentially port to the switch 2!",
    },
    {
      version: 2.0,
      completionStatus: 1,
      mainFocusOfVersion: "Level Editor",
      details:
        "Create and share levels! This has been partially started but is very placeholder-y and experimental so far.",
    },
  ];

  return (
    <div className={styles.devMapContainer}>
      <section>
        <h2>Completed Milestones</h2>
        <DevMapRow items={completedMilestones} />
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
        <DevMapRow items={futureMilestones} />
      </section>

      <section>
        <h2>Extra Milestones</h2>
        <p>
          Free updates with extra content or releases to other platforms could
          happen in the distant future.
        </p>
        <br />
        <DevMapRow items={extraMilestones} />
      </section>
    </div>
  );
}

export default DevMapContainer;