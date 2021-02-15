import React from "react";
import Instafeed from "instafeed.js";

class InstagramFeed extends React.Component {
  componentDidMount() {
    const instafeed = new Instafeed({
      accessToken:
        "IGQVJVWk5ZAZAHpYMzk5TC1vSkdmNUhJUldSbmRCLWRKcmNqWkFYNTcxelhrY24wN0M1QlRrWFhwYTBxaDFHQXVXR3hKUTg4WkU3a3hPSGNJekxsbTNZAOEFOSmVWakZAGc1c5RE45S2lNMGNfZAWl3WDN0TQZDZD",
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
