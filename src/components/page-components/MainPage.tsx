import Image from 'next/image';
import VectorLogo from "../../images/Robots & Things Logo - Vector Version.png";
import PuzzlePiece from "../../images/icons/T_Puzzle_Yellow.png";
import Gear from "../../images/icons/T_Gear.png";
import Medal from "../../images/icons/T_Medal_LowBattery.png";
import PaintBucket from "../../images/icons/T_Paint_Blue.png";
import Antenna from "../../images/icons/T_Antenna03_TopHat_F.png";
import Costume from "../../images/icons/T_Costume07_Construction.png";
import Coupon from "../../images/icons/T_Coupon_10_Off.png";
import MoveMeter from "../../images/icons/Meter_3Cell_3.png";
import ScoreTotal from "../../images/icons/score_total.png";
import ScoreCombo from "../../images/icons/score_combo.png";
import Rocket from "../../images/icons/T_Item_Rocket.png";
import BowlingBall from "../../images/icons/T_Item_BowlingBall.png";
import Speed from "../../images/icons/T_Item_Speed.png";

import Header from "../Header/Header";
import styles from "./Page.module.scss";
import GameMechanic from "../GameMechanic/GameMechanic";
import {
  GroupedMechanics,
  GroupColour,
} from "../GameMechanic/GroupedMechanics";

const MainPage = () => (
  <>
    <Header currentPage="About" />
    <div className={styles.pageContainer}>
      <Image src={VectorLogo} className={styles.screenshot} alt="logo"  quality={100 }/>
      <br />

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/pucektir9Qo?si=jek7wPv-e3-8XGWx"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <section>
        <p>A 3D Collectathon Platformer with Score Attack elements!</p>
        <p>
          Chain moves to get more points as you bounce off enemies, and use your
          combined level high scores to progress further into the game!
        </p>
      </section>
      <GroupedMechanics heading="Main Collectables" color={GroupColour.BLUE}>
        <GameMechanic
          src={PuzzlePiece}
          alt="Puzzle Piece"
          text="Collect Puzzle Pieces to gain a ton of points and end a level! You can find them outside levels in HUB areas too!"
        />
        <GameMechanic
          src={Gear}
          alt="Gear"
          text="Collect Gears and trade them for a variety of abilities!"
        />
        <GameMechanic
          src={Medal}
          alt="Challenge Medal"
          text="Find Challenge Medals and collect all of them in a world to unlock a bonus level with special missions."
        />
      </GroupedMechanics>

      <GroupedMechanics
        heading="Move Chaining & Score Mechanics"
        color={GroupColour.RED}
      >
        <GameMechanic
          src={MoveMeter}
          alt="Move Meter"
          text="The Move Meter lets the Blockbot chain moves in the air! As you gain more moves you'll be able to upgrade the meter! For more info check the Videos section!"
        />
        <GameMechanic
          src={ScoreCombo}
          alt="Score Combo Multiplier"
          text="Every move you perform in the air increases a combo multiplier. Bounce off enemies before you land to gain more points and keep the combo going!"
        />
        <GameMechanic
          src={ScoreTotal}
          alt="Score System"
          text="Chain moves, bounce off enemies, speedrun levels, and find collectables to get tons of points! Your total score across all levels will be key to progressing."
        />
      </GroupedMechanics>

      <GroupedMechanics heading="Power Ups" color={GroupColour.GREEN}>
        <GameMechanic
          src={Speed}
          alt="Speed"
          text="Hit switches in levels to permanently activate power up panels! This one makes you zoom across areas!"
        />
        <GameMechanic
          src={BowlingBall}
          alt="Bowling Ball"
          text="Chuck bowling balls at pins, enemies, and switches. It's great for wracking up points too!"
        />
        <GameMechanic
          src={Rocket}
          alt="Rocket"
          text="Certain bonus levels lead to unlocking really handy power ups like this one! The rocket can let you glide for a long period of time!"
        />
      </GroupedMechanics>

      <GroupedMechanics heading="Customization" color={GroupColour.YELLOW}>
        <GameMechanic
          src={Costume}
          alt="Costume"
          text="Use coins to buy costumes for the Blockbot in shops! Some NPCs might reward you for wearing certain things!"
        />
        <GameMechanic
          src={PaintBucket}
          alt="Paint Bucket"
          text="You can find paint buckets around the world and in shops to change the Blockbot's colours!"
        />
        <GameMechanic
          src={Antenna}
          alt="Antenna"
          text="Trade in coins for different wacky antennas."
        />
        <GameMechanic
          src={Coupon}
          alt="Coupon"
          text="Collect coupons to get discounts on the above items!"
        />
      </GroupedMechanics>
    </div>
  </>
);

export default MainPage;
