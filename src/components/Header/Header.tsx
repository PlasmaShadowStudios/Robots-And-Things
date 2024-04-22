import "./Header.scss";
import { Link } from "react-router-dom";

interface Props {
  headerLinks: string[];
  headerNames: string[];
}
const Header = ({ headerLinks, headerNames }: Props) => (
  <header className="app-header">
    {headerLinks.map((headerLink, index) => (
      <Link to={headerLink}>
        <p>{headerNames[index]}</p>
      </Link>
    ))}
  </header>
);

export default Header;
