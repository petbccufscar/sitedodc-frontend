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
import TecnicoAdministrativos from "../routes/TecnicoAdministrativos";
import Graduacao from "../routes/Graduacao";
import PosGraduacao from "../routes/PosGraduacao";
import Laboratorios from "../routes/Laboratorios";
import Catalogo from "../routes/Catalogo";
import Alunos from "../routes/Alunos";
import Sobre from "../routes/Sobre";
import ScrollToTop from "./ScrollToTop";
import LinhaDoTempo from "../routes/LinhaDoTempo";

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
              <Route exact path="/tecnico-administrativos" component={TecnicoAdministrativos}/>
              <Route exact path="/graduacao" component={Graduacao}/>
              <Route exact path="/pos-graduacao" component={PosGraduacao}/>
              <Route exact path="/laboratorios" component={Laboratorios}/>
              <Route exact path="/catalogo" component={Catalogo}/>
              <Route exact path="/alunos" component={Alunos}/>
              <Route exact path="/sobre" component={Sobre}/>
              <Route exact path="/linha-do-tempo" component={LinhaDoTempo}/>

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

