import { Link } from "react-router-dom";

// check of qua styling iets met header__content wordt gedaan

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


// import { Link } from "react-router-dom";

// const Header: React.FC = () => {
//   return (
//     <header className="header">
//       <article className="header__content">
//         <img
//           src="/assets/images/recipe-logo.png"
//           alt=""
//           className="header__logo"
//         />
//         <Link className="header__link" to="/">
//           <h1 className="header__title">Recipe Roulette</h1>
//         </Link>
//       </article>
//     </header>
//   );
// };

// export default Header;
