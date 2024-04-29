import "./Header.scss";
import { Link } from "react-router-dom";
import GameLogo from "../../images/Robots & Things Logo.png";

import { useState } from "react";
import PrimaryButton from "../Button/Button";
import useIsMobile from "./useIsMobile";

const headerLinks = ["/", "/updates", "/demo", "/screenshots", "/videos"];
const headerNames = ["About", "Updates", "Demo", "Screenshots", "Videos"];

interface Props {
  currentPage?: string;
}

const Header = ({ currentPage = "" }: Props) => {


  // Hide link menu if not on mobile
  const [showLinkMenu, setShowLinkMenu] = useState(!useIsMobile(window.innerWidth));


  return (
    <header className="app-header">
      <PrimaryButton
        className="hamburgerButton"
        variant={"text"}
        text="≡"
        onClick={() => {
          setShowLinkMenu(!showLinkMenu);
        }}
      />
      <img
        src={GameLogo}
        onClick={() => {
          window.location.replace(`/${process.env.REACT_APP_BASE_URL}`);
        }}
        className="logo"
        alt="Robots & Things"
      />

      <div className={showLinkMenu ? "links" : "hideLinks"}>
        {headerLinks.map((headerLink, index) => (
          <Link to={`${headerLink}`}>
            <p
              className={currentPage === headerNames[index] ? "underline" : ""}
            >
              {headerNames[index]}
            </p>
          </Link>
        ))}
      </div>
      {!showLinkMenu && (
        <div className={"links"}>
          <div className="fakeLink">
            <p className="underline">{`${currentPage}`}</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
