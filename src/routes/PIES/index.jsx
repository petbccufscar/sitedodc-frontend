import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";

class PIES extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>PIEs</Breadcrumb>
        </Breadcrumbs>
        <div className="container">
        <center><h3>Projetos Integradores Extensionistas (PIEs)</h3></center>
        <hr></hr>
        <br></br>
        <p>
                Projetos Integradores Extensionistas são projetos desenvolvidos por alunos do Departamento de Computação da UFSCar. O foco é o desenvolvimento de soluções, envolvendo software e/ou hardware, que beneficiem a comunidade em geral, como empresas, organizações públicas e a sociedade civil. 
                </p>
                <p>
                Quaisquer interessados podem submeter propostas de PIEs, desde alunos, técnicos administrativos, professores, empresas	e membros da sociedade civil. Os projetos submetidos serão analisados por uma comissão interna que avaliará sua viabilidade de execução.
                </p>
                <p>
                Maiores detalhes sobre como submeter PIEs podem ser encontrados no edital disponível
                
            <a target="blank"
                    href="pies.pdf"> aqui.</a>
            </p>
            <p>
            Dúvidas e esclarecimentos podem ser encaminhados para a Comissão de Avaliação de Acompanhamento (CAAP) dos PIEs, pelo e-mail: <b>caap-dc-ufscar AT googlegroups.com</b>	
            </p>
        </div>
      </React.Fragment>
    );
  }
}

export default PIES;
