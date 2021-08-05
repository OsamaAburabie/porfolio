import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "./Home.css";
const Home = () => {
  return (
    <main>
      <Sidebar />
      <div className="wrapper">
        <Topbar />
        <h1 style={{ color: "fff" }}>Home</h1>
      </div>
    </main>
  );
};

export default Home;
