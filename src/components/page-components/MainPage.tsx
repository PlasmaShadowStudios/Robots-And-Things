import VectorLogo from "../../images/Robots & Things Logo - Vector Version.png";
import Header from "../Header/Header";
import "./Page.scss";

const MainPage = () => (
  <>
    <Header currentPage="About"/>
    <div className="pageContainer">
      <img src={VectorLogo} className="screenshot" alt="logo" />
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
          combined scores earned in levels to progress!
        </p>
      </section>
    </div>
  </>
);

export default MainPage;
