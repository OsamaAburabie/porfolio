import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Section from "../components/Section";

const About = () => {
  return (
    <main>
      <Sidebar />
      <div className="wrapper">
        <Topbar />
        <Section>
          <h1>About</h1>
        </Section>
      </div>
    </main>
  );
};

export default About;
