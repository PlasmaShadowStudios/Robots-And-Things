import "./Header.scss";
import { Link } from "react-router-dom";
import VectorLogo from "../../images/Robots & Things Logo - Vector Version.png";

interface Props {
  headerLinks: string[];
  headerNames: string[];
}
const Header = ({ headerLinks, headerNames }: Props) => (
  <header className="app-header">
    <img
      src={VectorLogo}
      onClick={() => {
        window.location.href = "/";
      }}
      className="logo"
      alt="Robots & Things"
    />
    <div style={{ display: "flex" }}>
      {headerLinks.map((headerLink, index) => (
        <Link to={headerLink}>
          <p>{headerNames[index]}</p>
        </Link>
      ))}
    </div>
  </header>
);

export default Header;
