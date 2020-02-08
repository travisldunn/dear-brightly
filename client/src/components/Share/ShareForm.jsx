import React from "react";
import EmailShare from "./EmailShare";
import FacebookShare from "./FacebookShare";
import LinkShare from "./LinkShare";
import horn from "../../images/horn.svg";

const ShareForm = () => {
  return (
    <div className="shareForm">
      <img src={horn} alt="horn"></img>
      <h1>
        Invite a friend and <br /> compare results!
      </h1>
      <h2>Don’t keep us a secret!</h2>
      <EmailShare />
      <FacebookShare />
      <h3>Or share with everyone by sharing this link.</h3>
      <LinkShare />
    </div>
  );
};

export default ShareForm;
