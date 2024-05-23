import Image, { StaticImageData } from "next/image";
import bg from "../../images/screenshots/DemoIslands_1.png";
import bg2 from "../../images/screenshots/Autumn Abyss.png";
import bg3 from "../../images/screenshots/Sand Castle.png";
import bg4 from "../../images/screenshots/Simulation HUB.png";
import styles from "./Page.module.scss";

interface Props {
  imagesToShow?: number[];
}
const PageBackground = ({ imagesToShow = [0, 1, 2, 0] }: Props) => {
  // Enter imagesToShow prop like [0, 1, 2] to show the appropriate background in this array
  const images: StaticImageData[] = [bg, bg2, bg3, bg4];

  return (
    <div className={styles.bg}>
      {imagesToShow.map((imageIndexToShow) => (
        <Image
          className={styles.bgImg}
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
