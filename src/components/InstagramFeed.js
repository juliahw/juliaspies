import React from "react";
import Instafeed from "instafeed.js";

class InstagramFeed extends React.Component {
  componentDidMount() {
    const instafeed = new Instafeed({
      accessToken:
        "IGQVJYU0YyUENLWVpoTEFjYUdCSWhVUGdoWENYanFOb1l0U3VFazJzbVh6U1E1YUNrdHF3WXdLZAVpBalBjeXFNeGhLMmlpNkVUbFhZASTZAIdGhtajVHZAEk3VTJKdk01VmIwbENYd0h4Y0ZAjNHFrbHcxWQZDZD",
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
