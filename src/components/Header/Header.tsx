import "./Header.scss";
import { Link } from "react-router-dom";
import VectorLogo from "../../images/Robots & Things Logo - Vector Version.png";
import { useState } from "react";
import PrimaryButton from "../Button/Button";

const headerLinks = ["/", "/updates", "/demo", "/screenshots", "/videos"];
const headerNames = ["About", "Updates", "Demo", "Screenshots", "Videos"];

interface Props {
  currentPage?: string;
}

const Header = ({ currentPage = "" }: Props) => {
  const [showLinkMenu, setShowLinkMenu] = useState(true);

  return (
    <header className="app-header">
      {/* <button
        className="mobileHeader"
        onClick={() => {
          setShowLinkMenu(!showLinkMenu);
        }}
      >
        =
      </button> */}
      <PrimaryButton className="mobileHeader" variant={'text'}  text="≡" onClick={() => {
          setShowLinkMenu(!showLinkMenu);
        }} />
      <img
        src={VectorLogo}
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
