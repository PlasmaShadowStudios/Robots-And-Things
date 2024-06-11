"use client";
import styles from "./Header.module.scss";
import GameLogo from "../../images/Robots & Things Logo.png";
import DiscordIcon from "../../images/icons/discord.png";
import YoutubeIcon from "../../images/icons/youtube.png";
import Image from "next/image";

import { useState } from "react";
import PrimaryButton from "../Button/Button";
import useIsMobile from "../../services/useIsMobile";
import Link from "next/link";

const headerLinks = ["/", "/updates", "/demo", "/screenshots", "/videos"];
const headerNames = ["About", "Updates", "Demo", "Screenshots", "Videos"];

interface Props {
  currentPage?: string;
}

const Header = ({ currentPage = "" }: Props) => {
  // Hide link menu if not on mobile
  const [showLinkMenu, setShowLinkMenu] = useState(
    !useIsMobile(global.window && window.innerWidth)
  );

  //Env variable not working, so try this for different links in production
  const [isInDevMode] = useState(
    !!process && process.env.NODE_ENV === "development"
  );

  return (
    <div className={styles.appHeader}>
      <header>
        <PrimaryButton
          className={styles.hamburgerButton}
          variant={"text"}
          text="≡"
          onClick={() => {
            setShowLinkMenu(!showLinkMenu);
          }}
        />
        <Image
          src={GameLogo}
          onClick={() => {
            //window.location.replace(`${process.env.NEXT_PUBLIC_BASE_URL}`);
            if (currentPage !== "About") {
              window.location.replace(
                `${
                  isInDevMode
                    ? "localhost:3000"
                    : "https://plasmashadowstudios.github.io/Robots-And-Things"
                }`
              );
            }
          }}
          className={styles.logo}
          alt="Logo"
          title="Robots & Things Logo"
        />
        <div className={showLinkMenu ? styles.links : styles.hideLinks}>
          {headerLinks.map((headerLink, index) => (
            <Link
              href={`${headerLink}`}
              key={headerLink}
              className={
                currentPage === headerNames[index]
                  ? styles.underline
                  : styles.link
              }
            >
              {headerNames[index]}
            </Link>
          ))}
          <Link href={"https://discord.gg/F6yUj3xV2P"} target="_blank">
            <Image src={DiscordIcon} width={32} title="Discord" alt="Discord" />
          </Link>
          <Link
            href={"https://www.youtube.com/@robotsthings6736"}
            target="_blank"
          >
            <Image src={YoutubeIcon} width={32} title="YouTube" alt="YouTube" />
          </Link>
        </div>
        {!showLinkMenu && (
          <div className={styles.links}>
            <div className={styles.currentPageLink}>
              <p className={styles.underline}>{`${currentPage}`}</p>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
