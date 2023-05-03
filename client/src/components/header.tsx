import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <article className="header__content">
        <Link className="header__link" to="/">
          <h1 className="header__title">Recipe Roulette</h1>
        </Link>
      </article>
    </header>
  );
};

export default Header;
