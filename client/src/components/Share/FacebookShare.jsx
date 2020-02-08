import React from "react";
import { FacebookShareButton } from "react-share";
import messengerLogo from "../../images/messengerLogo.svg";

const FacebookShare = () => {
  let url = "https://www.dearbrightly.com";
  // let href =
  //   "fb-messenger://share/?link= https%3A%2F%2Fwww.dearbrightly.com&app_id=1553861511428720";
  return (
    <div className="facebookShare">
      <FacebookShareButton
        url={url}
        quote="I Love Dear Brightly!"
        className="facebookBtn"
      >
        <img src={messengerLogo} alt="messenger logo"></img>
        Facebook Messenger
      </FacebookShareButton>

      {/* <div className="mobile">
        <a href={href}>
          <button>
            <img src={messengerLogo} alt="messenger logo"></img>
            Facebook Messenger
          </button>
        </a>
      </div> */}
    </div>
  );
};

export default FacebookShare;
