import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Alunos from "../routes/Alunos";
import AnosAlunos from "../routes/AnosAlunos";
import AreaAluno from "../routes/AreaAluno";
import AreaDocente from "../routes/AreaDocente";
import AreaVisitante from "../routes/AreaVisitante";
import BCC from "../routes/bcc";
import Catalogo from "../routes/Catalogo";
import Inicio from "../routes/Inicio";
import Docente from "../routes/Docente";
import Docentes from "../routes/Docentes";
import ENC from "../routes/enc";
import FormularioSuporte from "../routes/FormularioSuporte";
import Graduacao from "../routes/Graduacao";
import Grupos from "../routes/Grupos";
import MapaDoSite from "../routes/MapaDoSite";
import Laboratorios from "../routes/Laboratorios";
import LinhaDoTempo from "../routes/LinhaDoTempo";
import LinksSuporte from "../routes/LinksSuporte";
import MaisNoticias from "../routes/MaisNoticias";
import Noticia from "../routes/Noticia";
import NaoEncontrado from "./NaoEncontrado";
import PosGraduacao from "../routes/PosGraduacao";
import Rodape from "./Rodape";
import ScrollToTop from "./ScrollToTop";
import Sobre from "../routes/Sobre";
import TecnicoAdministrativos from "../routes/TecnicoAdministrativos";
import TopBar from "./TopBar";
import Contato from "../routes/Contato";

class App extends Component {
  constructor(props) {
    super(props);
    this.constrastState = localStorage.getItem("contrastState") === "true";
    document.body.classList = this.constrastState ? ["contrast"] : [""];
    this.handleHighContrastClick = this.handleHighContrastClick.bind(this);
  }

  handleHighContrastClick(e) {
    e.preventDefault();
    localStorage.setItem("contrastState", "" + !this.constrastState);
    this.constrastState = !this.constrastState;
    document.body.classList = this.constrastState ? ["contrast"] : [""];
  }

  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <React.Fragment>
          <ScrollToTop>
            <TopBar onClick={this.handleHighContrastClick} />
            <Switch>
              <Route exact path="/" component={Inicio} />
              <Route exact path="/inicio" component={Inicio} />
              <Route exact path="/mais-noticias" component={MaisNoticias} />
              <Route exact path="/noticia/:id" component={Noticia} />
              <Route exact path="/area-aluno" component={AreaAluno} />
              <Route exact path="/area-docente" component={AreaDocente} />
              <Route exact path="/area-visitante" component={AreaVisitante} />
              <Route exact path="/docentes" component={Docentes} />
              <Route exact path="/docente/:id" component={Docente} />
              <Route exact path="/alunos-em-acao" component={Grupos} />
              <Route
                exact
                path="/tecnico-administrativos"
                component={TecnicoAdministrativos}
              />
              <Route exact path="/graduacao" component={Graduacao} />
              <Route exact path="/pos-graduacao" component={PosGraduacao} />
              <Route exact path="/laboratorios" component={Laboratorios} />
              <Route exact path="/catalogo" component={Catalogo} />
              <Route exact path="/alunos" component={AnosAlunos} />
              <Route exact path="/alunos/:curso/:ano" component={Alunos} />

              <Route exact path="/sobre" component={Sobre} />
              <Route exact path="/linha-do-tempo" component={LinhaDoTempo} />
              <Route exact path="/suporte/links" component={LinksSuporte} />
              <Route exact path="/graduacao/bcc" component={BCC} />
              <Route exact path="/graduacao/enc" component={ENC} />
              <Route exact path="/contato" component={Contato} />

              <Route
                exact
                path="/suporte/reportar"
                component={FormularioSuporte}
              />
              <Route exact path="/mapa-do-site" component={MapaDoSite} />

              <Route path="*" component={NaoEncontrado} />
            </Switch>
            <Rodape />
          </ScrollToTop>
        </React.Fragment>
      </Router>
    );
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
}

export default App;
