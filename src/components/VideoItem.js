import React from "react";
import "./VideoItem.css";

function VideoItem({ vid, onVidSelect }) {
  return (
    <div className="video-item item" onClick={() => onVidSelect(vid)}>
      <img
        className="ui image"
        src={vid.snippet.thumbnails.medium.url}
        alt={vid.snippet.title}
      />
      <div className="content">
        <div className="header">{vid.snippet.title}</div>
      </div>
    </div>
  );
}

export default VideoItem;
