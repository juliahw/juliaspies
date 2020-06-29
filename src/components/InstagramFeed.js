import React from "react";
import Instafeed from "instafeed.js";

class InstagramFeed extends React.Component {
  componentDidMount() {
    const instafeed = new Instafeed({
      accessToken:
        "IGQVJWekVMTjlVREI3aWJ0M1ZA3VklaWDRBMnI5SE1rSGNOVHdNVEVwT1hBWDROd3ZARZAXFDc1dQczVtbXpXQ3FsN1pOR0lFRVIzQUNLSFU0NTg1RmNJYy00RjFDaUxyNEh6c2hZATWtRWGNkcEVrWlRZAawZDZD",
      template:
        '<div class="span4"><a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a></div>',
      limit: 3
    });

    instafeed.run();
  }

  render() {
    return <div className="row" id="instafeed" />;
  }
}

export default InstagramFeed;
