import React from "react";
import cx from "classnames";

import { getInstagramToken } from "../lib/API";

class InstagramFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    const token = await getInstagramToken();

    const instagramUrl = new URL("https://graph.instagram.com/me/media");
    instagramUrl.search = new URLSearchParams({
      fields: ["id", "media_url", "permalink"],
      limit: 3,
      access_token: token
    });

    const response = await fetch(instagramUrl);
    const responseJson = await response.json();

    this.setState({
      images: responseJson.data,
      loading: false
    });
  }

  render() {
    return (
      <div className="row" id="instagram-feed">
        {this.state.loading ? (
          <React.Fragment>
            <div className="span4">
              <div className="placeholder" id="placeholder1"></div>
            </div>
            <div className="span4">
              <div className="placeholder" id="placeholder2"></div>
            </div>
            <div className="span4">
              <div className="placeholder" id="placeholder3"></div>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {this.state.images.map(image => {
              return (
                <div className="span4 instagram-image-container" key={image.id}>
                  <a href={image.permalink} target="_blank">
                    <img src={image.media_url} />
                  </a>
                </div>
              );
            })}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default InstagramFeed;
