import React, { Component } from "react";
import TopBar from "./TopBar";
import Inicio from "../routes/Inicio";
import Rodape from "./Rodape";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MaisNoticias from "../routes/MaisNoticias";
import Noticia from "../routes/Noticia";
class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <TopBar />

          <Route exact path="/" component={Inicio} />
          <Route exact path="/inicio" component={Inicio} />
          <Route exact path="/mais-noticias" component={MaisNoticias} />
          <Route exact path="/noticia/:id" component={Noticia} />

          <Rodape />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
