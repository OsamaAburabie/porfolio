import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Projects = () => {
  return (
    <main>
      <Sidebar />
      <div className="wrapper">
        <Topbar />
        <h1>Projects</h1>
      </div>
    </main>
  );
};

export default Projects;
