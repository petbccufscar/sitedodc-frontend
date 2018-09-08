import React, { Component } from "react";
import TopBar from "./TopBar";
import Inicio from "../routes/Inicio";
import Rodape from "./Rodape";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MaisNoticias from "../routes/MaisNoticias";
import "../style/custom.css";
class App extends Component {
  render() {
    return (
      <Router>
        <div id="topo">
          <TopBar />

          <Route exact path="/" component={Inicio} />
          <Route exact path="/inicio" component={Inicio} />
          <Route exact path="/mais-noticias" component={MaisNoticias} />

          <Rodape />
        </div>
      </Router>
    );
  }
}

export default App;
