import './Header.scss';

interface Props {
  headerLinks: string[];
  headerNames: string[];
}
const Header = ({ headerLinks, headerNames }: Props) => (
  <header className="app-header">
    {headerLinks.map((headerLink, index) => (
      <a href={headerLink}>{headerNames[index]}</a>
    ))}
  </header>
);

export default Header;
