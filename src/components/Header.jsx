import React from "react";
import "./Header.css";
import Logo from "../images/Logo.png";
import CloseIcon from "@material-ui/icons/Close";
import CropDinIcon from "@material-ui/icons/CropDin";
import MinimizeIcon from "@material-ui/icons/Minimize";
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
        <div className="red header__button">
          <CloseIcon className="header__icons" />
        </div>
        <div className=" header__button">
          <CropDinIcon className="header__icons" />
        </div>
        <div className="header__button">
          <MinimizeIcon className="header__icons" />
        </div>
      </div>
    </div>
  );
}

export default Header;
