import React, { useContext } from "react";
import { MainContext } from "../context/mainContext";

const Section = (props) => {
  const { showExplorer } = useContext(MainContext);

  return (
    <section className={`${showExplorer ? "" : "hiddenExplorer"}`}>
      {props.children}
    </section>
  );
};

export default Section;
