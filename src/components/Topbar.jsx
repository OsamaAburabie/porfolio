import React from "react";
import { NavLink } from "react-router-dom";
import "./Topbar.css";
import ReactLogo from "../images/ReactLogo.svg";
import JsLogo from "../images/JavascriptLogo.svg";
import CssLogo from "../images/CssLogo.svg";
import HtmlLogo from "../images/HtmlLogo.svg";
import GithubLogo from "../images/GithubLogo.svg";
const Topbar = () => {
  return (
    <div className="topbar">
      <NavLink
        to="/"
        className="top-file"
        activeClassName="active-top-bar"
        exact
      >
        <img src={ReactLogo} alt="ReactLogo" />
        <p>Home.jsx</p>
      </NavLink>
      <NavLink
        to="/about"
        className="top-file"
        activeClassName="active-top-bar"
      >
        <img src={JsLogo} alt="ReactLogo" />
        <p>About.js</p>
      </NavLink>
      <NavLink
        to="/contact"
        className="top-file"
        activeClassName="active-top-bar"
      >
        <img src={CssLogo} alt="ReactLogo" />
        <p>Contact.css</p>
      </NavLink>
      <NavLink
        to="/projects"
        className="top-file"
        activeClassName="active-top-bar"
      >
        <img src={HtmlLogo} alt="ReactLogo" />
        <p>Projects.html</p>
      </NavLink>
      <NavLink
        to="/github"
        className="top-file"
        activeClassName="active-top-bar"
      >
        <img src={GithubLogo} alt="ReactLogo" />
        <p>Github.md</p>
      </NavLink>
    </div>
  );
};

export default Topbar;
