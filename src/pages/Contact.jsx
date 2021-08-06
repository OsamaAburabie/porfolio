import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
// import Typist from "react-typist";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./Contact.css";
const Contact = () => {
  return (
    <main>
      <Sidebar />
      <div className="wrapper">
        <Topbar />
        <section>
          <div className="contactPage">
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
                  <a className="Email" href="" target="_blank">
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
            </ol>
            {/* </Typist> */}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
