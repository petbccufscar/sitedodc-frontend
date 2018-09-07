import React, { Component } from "react";
import TopBar from "./TopBar";
import BannerRotativo from "./BannerRotativo";
import Corpo from "./Corpo";
import Rodape from "./Rodape";

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <BannerRotativo />
        <Corpo />
        <Rodape />
      </div>
    );
  }
}

export default App;
