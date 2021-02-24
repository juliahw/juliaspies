import React from "react";
import Instafeed from "instafeed.js";

class InstagramFeed extends React.Component {
  componentDidMount() {
    const instafeed = new Instafeed({
      accessToken:
        "IGQVJVai13SWFnRFRBT0dHZAV9uUFpGckx5S25KZAE1YZAnZAnOU5mTzB4ZAFVXc01Pc1c0VElPMGh5bFRBcVRtczBWNGo5emtycDZAHNWRQdmlEOXFyZAEVYTm9rWXEzQ1VYcWJ0TDRkVWNn",
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
