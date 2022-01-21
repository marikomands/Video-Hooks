import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  console.log("🚀 ~ VideoList ~ videos", videos);
  const renderedList = videos.map((video) => {
    return (
      <div>
        <VideoItem
          key={video.id.videoId}
          onVideoSelect={onVideoSelect}
          video={video}
        />
      </div>
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
