import React from "react";
import { Timeline, Event } from "./timeline";

import { ImageLoader } from "../../../components/image-loader";

import ImgCapa from "../../../images/capa40anos.png";
import ImgRegua from "../../../images/sobre1.jpg";
import ImgPatio from "../../../images/sobre2.jpg";

class LinhaDoTempo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, previous: 0 };
  }

  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <React.Fragment>

        <div className="container">
          <Timeline>
            <Event interval={"2019"}
              subtitle={"Reestruturação dos projetos pedagógicos dos cursos de Ciência da Computação e Engenharia da Computação."} />
            <Event interval={"2009"}
              subtitle={"Criação do Doutorado em Ciência da Computação."} />
            <Event interval={"2007"}
              subtitle={"Criação do curso de Bacharelado em Sistemas de Informação, na modalidade à distância."} />
            <Event interval={"2007"}
              subtitle={"Mudança para o atual prédio, com 3.000 m2 acabados."} />
            <Event interval={"2003"}
              subtitle={"Primeiras turmas da Pós-Graduação Lato Sensu em São Carlos"} />
            <Event interval={"1992"}
              subtitle={"Criação do curso de Engenharia da Computação."} />
            <Event interval={"1990"}
              subtitle={"Plano estratégico arrojado: 25% dos docentes afastados para titulação."} />
            <Event interval={"1988"}
              subtitle={"Criação do Mestrado em Ciência da Computação, com dois doutores do DC e dois doutores externos."} />
            <Event interval={"1986"}
              subtitle={"Divisão do DCEs em Departamento de Computação (DC) e Departamento de Estatística."} />
            <Event interval={"1981"}
              subtitle={"Fabricação de computadores para uso no ensino"}>
              <p>O modelo foi chamado de ProEn - Processador de Ensino, com 8 KBytes de memória.</p>
            </Event>
            <Event interval={"1980"}
              subtitle={"Mudança para o segundo prédio"}>
              <p>Aproximadamente 1.000 m2, em um dos blocos do atual prédio do Departamento de Física.</p>
              <p>O Computador em uso na UFSCar era o IBM 360/370, com interação através de cartão perfurado e 512 Kb / 1 MB de memória.</p>
            </Event>
            <Event interval={"1975"}
              subtitle={"Criação do curso de Bacharelado em Ciência da Computação."} />
            <Event interval={"1974"}
              subtitle={"Criação do curso de Processamento de Dados (extinto em 1986)."} />
            <Event interval={"1973"}
              subtitle={"Criação da Divisão de Processamento de Dados (DPD)."} />
            <Event interval={"1973"}
              subtitle={"Criação do curso de extensão universitária em Processamento de Dados."} />
            <Event interval={"24/07/1972"}
              title={"Fundação"}
              subtitle={"Criação do Departamento de Computação e Estatística (DCEs)."}>
              <p>
                O espaço físico era de aproximadamente 150 m2, no atual prédio do CECH.
                O primeiro computador da UFSCar foi um HP 2100A, com leitora de fita de papel perfurado e 16 KBytes de memória.
              </p>
            </Event>
          </Timeline>
        </div>
      </React.Fragment>
    );
  }
}

export default LinhaDoTempo;
