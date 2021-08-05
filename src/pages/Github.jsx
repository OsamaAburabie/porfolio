import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Github = () => {
  return (
    <main>
      <Sidebar />
      <div className="wrapper">
        <Topbar />
        <h1>Github</h1>
      </div>
    </main>
  );
};

export default Github;
