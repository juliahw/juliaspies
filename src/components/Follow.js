import React from "react";
import InstagramFeed from "./InstagramFeed";

const FACEBOOK_LINK = "https://www.facebook.com/juliamakespies";
const INSTAGRAM_LINK = "https://www.instagram.com/juliamakespies";

const Follow = () => (
  <div>
    <InstagramFeed />

    <div className="row">
      <div className="span12">
        <p>
          <a target="_blank" href={FACEBOOK_LINK}>
            Facebook
          </a>{" "}
          &middot;{" "}
          <a target="_blank" href={INSTAGRAM_LINK}>
            Instagram
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Follow;
