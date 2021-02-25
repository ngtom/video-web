import React from "react";

function VideoDetail({ vid }) {
  if (!vid) {
    return <div> loading</div>;
  }
  const vidSrc = `https://www.youtube.com/embed/${vid.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={vidSrc} />
      </div>
      <div className="ui segment">
        <h4 className="header">{vid.snippet.title}</h4>
        <p>{vid.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;
