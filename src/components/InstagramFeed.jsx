import React, { useEffect, useState } from "react";
import cx from "classnames";

const rows = 2;
const imagesPerRow = 3;
const imageCount = rows * imagesPerRow;

function range(start, end) {
  return [...Array(end - start).keys()].map((i) => start + i);
}

function InstagramFeed() {
  const [images, setImages] = useState(undefined);

  useEffect(() => {
    async function fetchImages() {
      const instagramTokenFile = await fetch("instagramToken.txt");
      const token = await instagramTokenFile.text();

      const instagramUrl = new URL("https://graph.instagram.com/me/media");
      instagramUrl.search = new URLSearchParams({
        fields: ["id", "media_url", "permalink"],
        limit: imageCount,
        access_token: token,
      });

      const response = await fetch(instagramUrl);
      const responseJson = await response.json();
      setImages(responseJson.data);
    }

    fetchImages();
  }, []);

  const renderImage = (imageIndex) => {
    const content = images ? (
      <a href={images[imageIndex].permalink} target="_blank">
        <img src={images[imageIndex].media_url} />
      </a>
    ) : (
      <div className="placeholder" id={`placeholder-${imageIndex}`} />
    );

    return (
      <div className="span4" key={`instagram-image-${imageIndex}`}>
        {content}
      </div>
    );
  };

  const renderRow = (rowIndex) => {
    const start = imagesPerRow * rowIndex;
    const end = start + imagesPerRow;

    return (
      <div className="row" key={`instagram-row-${rowIndex}`}>
        {range(start, end).map(renderImage)}
      </div>
    );
  };

  return <div id="instagram-feed">{range(0, rows).map(renderRow)}</div>;
}

export default InstagramFeed;
