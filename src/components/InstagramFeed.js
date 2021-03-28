import React from "react";
import cx from "classnames";

class InstagramFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const instagramTokenFile = await fetch("instagramToken.txt");
    const token = await instagramTokenFile.text();

    const instagramUrl = new URL("https://graph.instagram.com/me/media");
    instagramUrl.search = new URLSearchParams({
      fields: ["id", "media_url", "permalink"],
      limit: 3,
      access_token: token,
    });

    const response = await fetch(instagramUrl);
    const responseJson = await response.json();

    this.setState({
      images: responseJson.data,
      loading: false,
    });
  }

  render() {
    return (
      <div className="row" id="instagram-feed">
        <React.Fragment>
          {[0, 1, 2].map((i) => {
            return (
              <div className="span4" key={`instagram-${i}`}>
                {this.state.loading ? (
                  <div className="placeholder" id={`placeholder-${i}`} />
                ) : (
                  <a href={this.state.images[i].permalink} target="_blank">
                    <img src={this.state.images[i].media_url} />
                  </a>
                )}
              </div>
            );
          })}
        </React.Fragment>
      </div>
    );
  }
}

export default InstagramFeed;
