import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  const handleLogout = () => {
    // logout code
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link className="a" to="/">
          <h1 className="header-title">Recipe Roulette</h1>
        </Link>
      </div>
      <div className="header-right">
          <button className="login-button" onClick={handleLogout}>
            Login
          </button>
        </div>
    </header>
  );
};

export default Header;
