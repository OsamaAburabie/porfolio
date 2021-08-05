import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const About = () => {
  return (
    <main>
      <Sidebar />
      <div className="wrapper">
        <Topbar />
        <h1>About</h1>
      </div>
    </main>
  );
};

export default About;
