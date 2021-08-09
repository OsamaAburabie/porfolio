import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Section from "../components/Section";
import Typist from "react-typist";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <Sidebar />
      <div className="wrapper">
        <Topbar />
        <Section>
          <div className="homePage">
            <Typist avgTypingDelay={25} cursor={{ hideWhenDone: true }}>
              <ol>
                <li></li>
                <li>&lt;body&gt;</li>
                <li>
                  &nbsp;&nbsp;&lt;span&gt; <span>Hello There!</span>{" "}
                  &lt;/span&gt;
                </li>
                <li>
                  &nbsp;&nbsp;&lt;h1&gt;
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    I'm Osama Aburabi'e
                  </span>{" "}
                  &lt;/h1&gt;
                </li>
                <li>
                  &nbsp;&nbsp;&lt;p&gt;{" "}
                  <span>
                    I am a Full-Stack Developer. I strive to create simple,
                    original and impactful User Experiences.
                  </span>{" "}
                  &lt;/p&gt;
                </li>
                <li>&lt;/body&gt;</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                {/* eslint-disable-next-line */}
                <li style={{ color: "grey" }}>/* </li>
                <li style={{ color: "grey" }}>
                  wanna know more about me?! feel free to explore my editor :){" "}
                </li>
                <li></li>
                <li style={{ color: "grey" }}>
                  ps feel free to contact me if you need anything!
                </li>
                <li style={{ color: "grey" }}>*/ </li>
              </ol>
              <NavLink to="/contact" className="contactButton">
                Contact Me!
              </NavLink>
            </Typist>
          </div>
        </Section>
      </div>
    </main>
  );
};

export default Home;
