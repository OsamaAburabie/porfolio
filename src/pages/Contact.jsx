import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Section from "../components/Section";

// import Typist from "react-typist";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AddIcon from "@material-ui/icons/Add";
import Crop32Icon from "@material-ui/icons/Crop32";
import DeleteIcon from "@material-ui/icons/Delete";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import "./Contact.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [focusedName, setFocusedName] = useState(true);
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedMessage, setFocusedMessage] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <main>
      <Sidebar />
      <div className="wrapper">
        <Topbar />
        <Section>
          <div className="contactPage">
            <div className="contactPage__top">
              {/* <Typist avgTypingDelay={5} cursor={{ hideWhenDone: true }}> */}
              <ol className="contact__list">
                {/* eslint-disable-next-line */}
                <li style={{ color: "grey" }}>/* Here is how to reach me */</li>
                <li></li>
                <li>
                  .socials{" "}
                  <span style={{ color: "gold" }}>&nbsp;&nbsp;{"{"}</span>
                </li>
                <li></li>
                <li className="socialItem">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <EmailIcon />
                  <span>
                    &nbsp;
                    {/* eslint-disable-next-line */}
                    <a href="" target="_blank">
                      aburabie.osama@gmail.com
                    </a>
                  </span>
                </li>
                <li className="socialItem">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <GitHubIcon />
                  <span>
                    &nbsp;
                    {/* eslint-disable-next-line */}
                    <a
                      href="https://github.com/OsamaAburabie"
                      rel="noreferrer"
                      target="_blank"
                    >
                      OsamaAburabie
                    </a>
                  </span>
                </li>
                <li className="socialItem">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <LinkedInIcon />
                  <span>
                    &nbsp;
                    {/* eslint-disable-next-line */}
                    <a
                      href="https://www.linkedin.com/in/osama-aburabi/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Osama Aburabi'e
                    </a>
                  </span>
                </li>
                <li className="socialItem">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <FacebookIcon />
                  <span>
                    &nbsp;
                    {/* eslint-disable-next-line */}
                    <a
                      href="https://www.facebook.com/osamajamell/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Osama Jamil
                    </a>
                  </span>
                </li>
                <li className="socialItem">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <TwitterIcon />
                  <span>
                    &nbsp;
                    <a
                      href="https://twitter.com/Osama_Aburabie"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Osama_Aburabie
                    </a>
                  </span>
                </li>
                <li></li>
                <li>
                  <span style={{ color: "gold" }}>{"}"}</span>
                </li>
                <li></li>
                <li></li>
                <li></li>
                {/* eslint-disable-next-line */}
                <li style={{ color: "grey" }}>
                  /* You can also send me a direct message from bellow and I'll
                  get back to you */
                </li>
              </ol>
              {/* </Typist> */}
            </div>
            <div className="terminal">
              <div className="terminal__header">
                <div className="terminal__header__left">
                  <div>problems</div>
                  <div>output</div>
                  <div>terminal</div>
                  <div>debug console</div>
                </div>
                <div className="terminal__header__right">
                  <div className="terminal__button">
                    <ChevronRightIcon />
                    <p>node</p>
                  </div>
                  <div className="terminal__button">
                    <AddIcon />
                  </div>
                  <div className="terminal__button">
                    <Crop32Icon />
                  </div>
                  <div className="terminal__button">
                    <DeleteIcon />
                  </div>
                  <div className="terminal__button">
                    <KeyboardArrowUpIcon />
                  </div>
                  <div className="terminal__button">
                    <CloseIcon />
                  </div>
                </div>
              </div>
              <div className="terminal__body">
                <form onSubmit={submitForm}>
                  <label className="terminal__text__label">
                    <span>OsamaAburabie@Contact</span>:
                    <span style={{ color: "lightblue" }}>~</span>$ What is your
                    name?
                  </label>
                  <div className="terminal__text">
                    <span id="terminal-show">{name}</span>
                    <div
                      id="terminal-cursor"
                      className={`animate-flicker ${focusedName ? "" : "none"}`}
                    ></div>
                    <input
                      type="text"
                      id="terminal-input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={() => setFocusedName(true)}
                      onBlur={() => setFocusedName(false)}
                    />
                  </div>
                  {/* ===================================================== */}
                  <label className="terminal__text__label">
                    <span>OsamaAburabie@Contact</span>:
                    <span style={{ color: "lightblue" }}>~</span>$ What is your
                    email?
                  </label>
                  <div className="terminal__text">
                    <span id="terminal-show">{email}</span>
                    <div
                      id="terminal-cursor"
                      className={`animate-flicker ${
                        focusedEmail ? "" : "none"
                      }`}
                    ></div>
                    <input
                      type="text"
                      id="terminal-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedEmail(true)}
                      onBlur={() => setFocusedEmail(false)}
                    />
                  </div>
                  {/* ===================================================== */}
                  <label className="terminal__text__label">
                    <span>OsamaAburabie@Contact</span>:
                    <span style={{ color: "lightblue" }}>~</span>$ Write your
                    message!
                  </label>
                  <div className="terminal__text">
                    <span id="terminal-show">{message}</span>
                    <div
                      id="terminal-cursor"
                      className={`animate-flicker ${
                        focusedMessage ? "" : "none"
                      }`}
                    ></div>
                    <input
                      type="text"
                      id="terminal-input"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onFocus={() => setFocusedMessage(true)}
                      onBlur={() => setFocusedMessage(false)}
                    />
                  </div>

                  <button type="submit" className="sentButton">
                    <span>Send</span> <SendIcon fontSize="small" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
};

export default Contact;
