import Image, { StaticImageData } from "next/image";
import DemoIslands from "../../images/screenshots/DemoIslands_1.png";
import AutumnAbyssTopDown from "../../images/screenshots/Autumn Abyss Top Down.png";
import SandCastleTopDown from "../../images/screenshots/Sand Castle Top Down.png";
import PowerupBackground from "../../images/screenshots/Powerup Background.png";
import styles from "./Page.module.scss";

interface Props {
  imagesToShow?: number[];
  showBorder?: boolean;
}

export enum BackgroundImages {
  DEMO_ISLANDS = 0,
  AUTUMN_ABYSS = 1,
  SAND_CASTLE = 2,
  GENERAL_BACKGROUND = 3,
}

const PageBackground = ({ imagesToShow = [0, 1, 2, 0], showBorder }: Props) => {
  // Enter imagesToShow prop like [0, 1, 2] to show the appropriate background in this array
  const images: StaticImageData[] = [DemoIslands, AutumnAbyssTopDown, SandCastleTopDown, PowerupBackground];

  return (
    <div className={styles.bg}>
      {imagesToShow.map((imageIndexToShow) => (
        <Image
          className={showBorder ? styles.bgImgBorder : styles.bgImg}
          src={images[imageIndexToShow]}
          alt="background"
          key={imageIndexToShow}
          title={`bg${imageIndexToShow}`}
        />
      ))}
    </div>
  );
};

export default PageBackground;
