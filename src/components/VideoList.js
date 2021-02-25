import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ vids, onVidSelect }) => {
  return (
    <div className="ui relaxed divided list">
      {vids.map((vid) => {
        return (
          <VideoItem key={vid.id.videoId} vid={vid} onVidSelect={onVidSelect} />
        );
      })}
    </div>
  );
};

export default VideoList;
