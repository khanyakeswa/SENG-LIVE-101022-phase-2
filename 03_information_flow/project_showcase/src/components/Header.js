import { useState } from "react";

const Header = ({currentState, darkmodeHandler}) => {

  const buttonTextContent = currentState ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={darkmodeHandler}>{buttonTextContent}</button>
    </header>
  );
};

export default Header;
