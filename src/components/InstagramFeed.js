import React from "react";
import Instafeed from "instafeed.js";

class InstagramFeed extends React.Component {
  componentDidMount() {
    const instafeed = new Instafeed({
      accessToken:
        "IGQVJYQk4xcWo1UGlMQVNGMXJtY21jSkN4X1h3OUVEYzNDTzBONVFmS3Vqa2FySFNDdlpXcW9rM09EWnlsX1h0djlCT2hxY05yYkFSNnNRTkU4Rlh6NTVIZADFRUktINTIteld3a1FoSkZAZAdVZABNkRraQZDZD",
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
