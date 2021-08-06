import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Projects = () => {
  return (
    <main>
      <Sidebar />
      <div className="wrapper">
        <Topbar />
        <section>
          <h1>Projects</h1>
        </section>
      </div>
    </main>
  );
};

export default Projects;
