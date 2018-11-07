import React, { Component } from "react";
import TopBar from "./TopBar";
import Inicio from "../routes/Inicio";
import Rodape from "./Rodape";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MaisNoticias from "../routes/MaisNoticias";
import Noticia from "../routes/Noticia";
import AreaAluno from "../routes/AreaAluno";
import AreaDocente from "../routes/AreaDocente";
import AreaVisitante from "../routes/AreaVisitante";
import Docentes from "../routes/Docentes";
import NaoEncontrado from "./NaoEncontrado";
import Docente from "../routes/Docente";
import Grupos from "../routes/Grupos";
import ScrollToTop from "./ScrollToTop";

class App extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <React.Fragment>
        <ScrollToTop>
          <TopBar />
          <main role="main" id="conteudo" class="container-fluid m-0 p-0">
            <Switch>
              <Route exact path="/" component={Inicio} />
              <Route exact path="/inicio" component={Inicio} />
              <Route exact path="/mais-noticias" component={MaisNoticias} />
              <Route exact path="/noticia/:id" component={Noticia} />
              <Route exact path="/area-aluno" component={AreaAluno} />
              <Route exact path="/area-docente" component={AreaDocente} />
              <Route exact path="/area-visitante" component={AreaVisitante} />
              <Route exact path="/docentes" component={Docentes} />
              <Route exact path="/docente/:id" component={Docente}/>
              <Route exact path="/grupos" component={Grupos}/>
              <Route path="*" component={NaoEncontrado} />
            </Switch>
          </main>
          <Rodape />
          </ScrollToTop>
        </React.Fragment>
      </Router>
    );
  }

  componentDidUpdate() {
    window.scrollTo(0,0);
  }
}

export default App;

