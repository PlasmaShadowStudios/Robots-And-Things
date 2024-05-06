import GameLogo from "../../images/Robots & Things Logo.png";
import Header from "../Header/Header";
import "./Page.module.scss";

const UnderConstruction = () => (
  <>
    <Header currentPage="About" />
    <div className="pageContainer">
      <img src={GameLogo} className="screenshot" alt="logo" />

      <section>This site is under construction. Check back later.</section>
    </div>
  </>
);

export default UnderConstruction;
