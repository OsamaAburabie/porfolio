import React from "react";
import "./Header.css";
import Logo from "../images/Logo.png";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={Logo} alt="vscode-logo" className="Logo" />
        <p>File</p>
        <p>Edit</p>
        <p>Selection</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Termenal</p>
        <p>Help</p>
      </div>
      <div className="header__center">
        <p>Osama Aburabie - Visual Studio Code</p>
      </div>
      <div className="header__right">
        <div className="red header__button"></div>
        <div className="green header__button"></div>
        <div className="yellow header__button"></div>
      </div>
    </div>
  );
}

export default Header;
