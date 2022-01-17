import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };
  onTermSubmit = async (term) => {
    const { data } = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(data);
    this.setState({ videos: data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
