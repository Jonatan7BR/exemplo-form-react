import "./Header.scss";
import ThemeToggle from "./ThemeToggle";

const Header = () => (
  <header className="page-header">
    <h1 className="title _nomargi">Exemplo de cadastro em formulário</h1>
    <div className="themetoggler">
      <ThemeToggle />
    </div>
  </header>
);

export default Header;
