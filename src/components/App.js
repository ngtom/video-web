import React, { Component } from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
const KEY = "AIzaSyC9xf7NMQBJoDa-zupaB8SWdB38qB5vEUM";

class App extends Component {
  state = { vids: [], selVideo: null };

  componentDidMount() {
    this.onTermSubmit("Travelers");
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });
    this.setState({
      vids: response.data.items,
      selVideo: response.data.items[0],
    });
  };

  onVidSelect = (vid) => {
    this.setState({ selVideo: vid });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail vid={this.state.selVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                vids={this.state.vids}
                onVidSelect={this.onVidSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
