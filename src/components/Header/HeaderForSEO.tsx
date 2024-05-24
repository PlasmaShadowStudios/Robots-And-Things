import styles from "./Header.module.scss";
import Link from "next/link";
import Image from 'next/image';
import DiscordIcon from "../../images/icons/discord.png";
import YoutubeIcon from "../../images/icons/youtube.png";

const headerLinks = ["/", "/updates", "/demo", "/screenshots", "/videos"];
const headerNames = ["About", "Updates", "Demo", "Screenshots", "Videos"];

//Header uses client side rendering for detecting if mobile to show the hamburger menu instead of a row of links.
const HeaderForSEO = () => {
  return (
    <header style={{ display: "none" }}>
      <div className={styles.links}>
        <>
          {headerLinks.map((headerLink, index) => (
            <Link
              href={`${headerLink}`}
              key={headerLink}
              className={styles.link}
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
        </>
      </div>
    </header>
  );
};

export default HeaderForSEO;
