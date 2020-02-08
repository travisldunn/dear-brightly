import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const LinkShare = () => {
  const [copied, setCopied] = useState(false);
  const url = "https://www.dearbrightly.com/inviteref?=12345";
  return (
    <div className="copy">
      <h2>{url}</h2>
      <CopyToClipboard text={url} onCopy={() => setCopied(true)}>
        <button className={copied ? "copied" : "copy"}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default LinkShare;
