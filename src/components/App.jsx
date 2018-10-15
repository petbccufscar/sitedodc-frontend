import React, { Component } from "react";
import TopBar from "./TopBar";
import Inicio from "../routes/Inicio";
import Rodape from "./Rodape";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MaisNoticias from "../routes/MaisNoticias";
import Noticia from "../routes/Noticia";
import AreaAluno from "../routes/AreaAluno";
import AreaDocente from "../routes/AreaDocente";
import AreaVisitante from "../routes/AreaVisitante";
import Docentes from "../routes/Docentes";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <TopBar />
          <main role="main" id="conteudo" class="container-fluid m-0 p-0">
            <Route exact path="/" component={Inicio} />
            <Route exact path="/inicio" component={Inicio} />
            <Route exact path="/mais-noticias" component={MaisNoticias} />
            <Route exact path="/noticia/:id" component={Noticia} />
            <Route exact path="/area-aluno" component={AreaAluno} />
            <Route exact path="/area-docente" component={AreaDocente} />
            <Route exact path="/area-visitante" component={AreaVisitante} />
            <Route exact path="/docentes" component={Docentes} />
          </main>
          <Rodape />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
