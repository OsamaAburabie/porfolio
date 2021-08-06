import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const About = () => {
  return (
    <main>
      <Sidebar />
      <div className="wrapper">
        <Topbar />
        <section>
          <h1>About</h1>
        </section>
      </div>
    </main>
  );
};

export default About;
