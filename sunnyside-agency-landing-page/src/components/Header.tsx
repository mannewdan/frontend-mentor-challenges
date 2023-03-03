import React from "react";

export default function Header() {
  const [burgerActive, setBurgerActive] = React.useState(false);

  return (
    <header className="header">
      <h1>We Are Creatives</h1>

      <nav>
        <img className="logo" src="images/logo.svg" alt="logo"></img>
        <img
          onClick={() => {
            setBurgerActive((prev) => !prev);
          }}
          className={`hamburger ${burgerActive ? "active" : ""}`}
          src="images/icon-hamburger.svg"
          alt=""
        ></img>
        <ul className={burgerActive ? "" : "inactive"}>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li className="contact">
            <a>Contact</a>
          </li>
        </ul>
      </nav>

      <img className="arrow" src="images/icon-arrow-down.svg" alt=""></img>
    </header>
  );
}
