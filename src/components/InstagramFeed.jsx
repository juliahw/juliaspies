import React, { useEffect, useState } from 'react';

const rows = 2;
const imagesPerRow = 3;
const imageCount = rows * imagesPerRow;

function range(start, end) {
  return [...Array(end - start).keys()].map((i) => start + i);
}

function InstagramFeed() {
  const [images, setImages] = useState(undefined);
  const [loading, setLoading] = useState(
    Array(imageCount).map(() => ({ loading: true })),
  );

  const setImageLoaded = (i) => {
    const loadingCopy = [...loading];
    loadingCopy[i] = false;
    setLoading(loadingCopy);
  };

  useEffect(() => {
    async function fetchImages() {
      const instagramTokenFile = await fetch('instagramToken.txt');
      const token = (await instagramTokenFile.text()).split('').reverse().join('');

      const instagramUrl = new URL('https://graph.instagram.com/me/media');
      instagramUrl.search = new URLSearchParams({
        fields: ['id', 'media_url', 'permalink'],
        limit: imageCount,
        access_token: token,
      });

      const response = await fetch(instagramUrl);
      const responseJson = await response.json();

      setImages(responseJson.data);
    }

    fetchImages();
  }, []);

  const renderImage = (i) => {
    const content = images && !loading[i] ? (
      <a href={images[i].permalink} target="_blank" rel="noreferrer">
        <img
          src={images[i].media_url}
          onLoad={() => {
            setImageLoaded(i);
          }}
        />
        <div className="overlay" />
      </a>
    ) : (
      <div className="placeholder" id={`placeholder-${i}`} />
    );

    return (
      <div className="span4 image-container" key={`instagram-image-${i}`}>
        {content}
      </div>
    );
  };

  const renderRow = (i) => {
    const start = imagesPerRow * i;
    const end = start + imagesPerRow;

    return (
      <div className="row" key={`instagram-row-${i}`}>
        {range(start, end).map(renderImage)}
      </div>
    );
  };

  return <div id="instagram-feed">{range(0, rows).map(renderRow)}</div>;
}

export default InstagramFeed;
