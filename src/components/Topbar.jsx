import React from "react";
import { NavLink } from "react-router-dom";
import "./Topbar.css";
import { useContext } from "react";
import { MainContext } from "../context/mainContext";
import CloseIcon from "@material-ui/icons/Close";

const Topbar = () => {
  const { topBarItems, setTopBarItems } = useContext(MainContext);
  //close the top bar
  const closeTab = (id) => {
    setTopBarItems(topBarItems.filter((item) => item.id !== id));
  };

  return (
    <div className="topbar">
      {topBarItems &&
        topBarItems.map((item) => {
          return (
            <NavLink
              key={item.id}
              to={item.to}
              exact={item.exact}
              className="top-file"
              activeClassName="active-top-bar"
            >
              <img src={item.ico} alt={item.text} />
              <p>{item.text}</p>
              <CloseIcon
                onClick={() => {
                  closeTab(item.id);
                }}
                className="top-file-close"
              />
            </NavLink>
          );
        })}
    </div>
  );
};

export default Topbar;
