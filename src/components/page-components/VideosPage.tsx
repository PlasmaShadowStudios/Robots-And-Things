import Header from "../Header/Header";
import styles from "./Page.module.scss";
import PageBackground from "./PageBackground";

const VideosPage = () => (
  <>
    <Header currentPage="Videos" />
    <div className={styles.pageContainer}>
      <PageBackground imagesToShow={[0, 0, 0]} />

      <h1>May 2021 Kickstarter Trailer</h1>
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

      <h1>December 2020 Trailer</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VY4uQ4FOgcs"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <h1>Move Meter Showcase</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ZuJUEl0u6fY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <h1>Score & Combo Showcase</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/0XfvFZ90Tkw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </>
);

export default VideosPage;
