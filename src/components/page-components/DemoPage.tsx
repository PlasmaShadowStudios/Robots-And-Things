import Image from "next/image";
import GameLogo from "../../images/Robots & Things Logo.png";
import Thumbnail from "../../images/500x500_Thumbnail.png";

import Header from "../Header/Header";
import styles from "./Page.module.scss";
import DemoButtons from "../DemoButtons/DemoButtons";
import PageBackground, { BackgroundImages } from "./PageBackground";

const DemoPage = () => (
  <>
    <Header currentPage="Demo" />
    <div className={styles.pageContainer}>
      <PageBackground imagesToShow={[BackgroundImages.GENERAL_BACKGROUND]} />
      <Image
        src={Thumbnail}
        quality={100}
        className={styles.screenshot}
        alt="Robots & Things Thumbnail"
        title="Robots & Things"
      />
      <h1>Demo</h1>

      <section>
        <b>Robots & Things</b> is 3D Collect-a-thon Platformer with score attack
        elements. It blends exploring big interconnected worlds with challenging
        action levels, all loaded with secrets and silly characters to meet. We
        were inspired by particular games like Super Mario Sunshine and Super
        Metroid, as well as series like Crash Bandicoot, Sonic, and
        Banjo-Kazooie.
        <br />
        <br />
        <br />
        <br />
        We&apos;re bringing together the best elements of past games, along with
        fresh new ideas like the <b>move meter</b> and{" "}
        <b>score progression system</b>.
        <br />
        <br />
        <br />
        <br />
        The latest demo on itch.io includes:
        <br />
        <br />
        <ul>
          <li>25 Puzzle Pieces to collect</li>
          <li>8 levels and 3 hub worlds</li>
          <li>13 Gear collectibles</li>
          <li>
            Several unlockable powerups you can find, some of which you get by
            trading in gears
          </li>
          <li>New Move Meter for chaining your moves in the air</li>
          <li>New Total Score Based System</li>
        </ul>
        <br />
        <br />
        <br />
        <br />
        <DemoButtons />
      </section>
    </div>
  </>
);

export default DemoPage;
