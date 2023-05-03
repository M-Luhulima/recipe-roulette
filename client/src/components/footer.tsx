import React from "react";

// check of qua styling iets met footer_content wordt gedaan
// footer misschien weg?

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <article className="footer__container">
        <p className="footer__text">&copy; 2023 Recipe Roulette</p>
      </article>
    </footer>
  );
};

export default Footer;
