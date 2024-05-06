"use client";
import GameLogo from "../../images/Robots & Things Logo.png";
import PrimaryButton from "../Button/Button";
import Header from "../Header/Header";
import styles from "./Page.module.scss";

const DemoPage = () => (
  <>
    <Header currentPage="Demo" />
    <div className={styles.pageContainer}>
      <img src={GameLogo} className="screenshot" alt="logo" />

      <section>
        <b>Robots & Things</b> is 3D Collect-a-thon Platformer that blends
        exploring big interconnected worlds with challenging action levels, all
        loaded with secrets and silly characters to meet. We were inspired by
        particular games like Super Mario Sunshine and Super Metroid, as well as
        series like Crash Bandicoot, Sonic, and Banjo-Kazooie.
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
        Currently there is an older demo available which includes:
        <br />
        <br />
        <ul>
          <li>22 puzzle pieces to collect across a variety of areas</li>
          <li>4 unlockable powerups</li>
          <li>15 gear collectibles</li>
        </ul>
        <br />
        <br />
        <br />
        Click below to get it on MediaFire!
        <br />
        <br />
        <div className="demoDownloads">
          <PrimaryButton
            text={"Download SAGE 2021 Demo"}
            onClick={() =>
              window.location.replace(
                "https://www.mediafire.com/file/1wyb4cyfo6zon3q/8xjv74b83i_Robots_Things_SAGE_Demo.zip"
              )
            }
          />
          <PrimaryButton
            text={"Coming Soon? 2024 Demo"}
            variant={"outlined"}
            onClick={() => {}} //window.location.replace("")}
          />
        </div>
      </section>
    </div>
  </>
);

export default DemoPage;
