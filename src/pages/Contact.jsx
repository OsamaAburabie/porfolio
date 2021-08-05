import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Contact = () => {
  return (
    <main>
      <Sidebar />
      <div className="wrapper">
        <Topbar />
        <h1>Contact</h1>
      </div>
    </main>
  );
};

export default Contact;
