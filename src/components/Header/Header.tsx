import "./Header.scss";
import { Link } from "react-router-dom";
import VectorLogo from "../../images/Robots & Things Logo - Vector Version.png";

const headerLinks = ["/about", "/updates", "/demo", "/screenshots", "/videos"];
const headerNames = ["About", "Updates", "Demo", "Screenshots", "Videos"];

interface Props {
  currentPage?: string;
}

const Header = ({ currentPage = "" }: Props) => {
  return (
    <header className="app-header">
      <img
        src={VectorLogo}
        onClick={() => {
          window.location.replace(`/${process.env.REACT_APP_BASE_URL}`);
        }}
        className="logo"
        alt="Robots & Things"
      />
      <div style={{ display: "flex" }}>
        {headerLinks.map((headerLink, index) => (
          <Link to={`${headerLink}`}>
            <p className={currentPage === headerNames[index] ? "underline" : ""}>
              {headerNames[index]}
            </p>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
