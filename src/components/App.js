import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("buildings");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // const onVideoSelect = (video) => {
  //   console.log("Picture Clicked", video);
  //   setSelectedVideo(video);
  // };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
            {/* onVideoSelect={(video )=> setSelectedVideo(video)} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
