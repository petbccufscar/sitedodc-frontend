import React from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import { Timeline, Event } from "./components/Timeline";

import { ImageLoader } from "../../components/image-loader";

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
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Linha do tempo</Breadcrumb>
        </Breadcrumbs>

        <div className="container">
          <Timeline>
            <Event
              interval={"2012"}
              title={"40 ANOS"}
              subtitle={"Em 2012 o DC comemorou seus 40 anos de existência."}
            >
              <h2>Apresentação</h2>
              <p>
                Ao longo dos seus primeiros 40 anos, o Departamento de
                Computação colaborou diretamente na formação de 3.470
                profissionais da computação, que ajudaram a construir outros
                cursos de computação, ajudaram a construir as empresas de
                computação que conhecemos hoje e as tecnologias que utilizamos
                em nosso dia a dia.
              </p>
              <div className="d-flex flex-row align-items-center my-3">
                <div className=" mr-3">
                  {" "}

                  <ImageLoader
                    src="http://www.dc.ufscar.br/imagens/capa-40-anos"
                    height="100px"
                    width="80px"
                    loaderHeight="100px"
                    loaderWidth="80px"
                    alt="Capa - 40 anos"
                    classnames="image-right"

                    title="Capa - 40 anos"
                  />
                </div>
                <div>

                  <h2>Relatorio Anual - Edicão Comemorativa - 40 Anos</h2>
                  <p>
                    Conheça a atuação do DC em ensino, pesquisa e extensão, um
                    pouco da história do DC-UFSCar e um pouco da história da
                    computação, no{" "}
                    <a
                      className="external-link"
                      href="http://www2.dc.ufscar.br/revista40anos"
                    >
                      Relatorio Anual - Edição Comemorativa - 40 Anos
                    </a>
                    .
                  </p>
                </div>
              </div>

              <h3>Vídeos</h3>
              <div className="d-flex flex-row flex-wrap justify-content-between mt-3">
                <div className="flex-fill">
                  <iframe
                    frameBorder="0"
                    title="Departamento de Computação UFSCar - Vídeo Institucional"
                    width="100%"
                    height="290"
                    src="http://www.youtube.com/embed/65ErgsOfEtE"
                  />
                </div>
                <div className="flex-fill">
                  <iframe
                    frameBorder="0"
                    title="Departamento de Computação da UFSCar - 40 Anos"
                    width="100%"
                    height="290"
                    src="http://www.youtube.com/embed/UEklyABA7uc"
                  />
                </div>
              </div>
            </Event>
            <Event interval={"1972"} title={"Fundação"}>
              <div>
                <p>
                  O Departamento de Computação da Universidade Federal de São
                  Carlos (DC-UFSCar) existe desde 1972, sendo responsável pelos
                  cursos de graduação de Bacharelado em Ciência da Computação,
                  Engenharia de Computação e Sistemas de Informação. Também é
                  responsável pelo curso de pós-graduação (<i>stricto sensu</i>)
                  em Ciência da Computação e oferece cursos de especialização (
                  <i>lato sensu</i>).
                </p>
                <div className="mr-3 float-left">

                  <ImageLoader
                    src="http://www.dc.ufscar.br/imagens/foto-regua-de-calculo"
                    title=" Foto: Régua de cálculo"
                    height="153px"
                    width="271px"
                    loaderHeight="153px"
                    loaderWidth="271px"
                    alt="Foto: Régua de cálculo"
                  />
                </div>
                <p>
                  Em sua existência, o DC-UFSCar tem habilitado e colocado
                  anualmente no mercado de trabalho cerca de uma centena de
                  profissionais, que atuam em empresas e em Instituições de
                  Ensino Superior.
                </p>
                <p>
                  Atento à constante evolução na área de computação, o DC-UFSCar
                  tem atuado na vanguarda deste desenvolvimento tecnológico,
                  firmando-se no cenário nacional e internacional como um centro
                  de pesquisa bastante atuante.
                </p>
                <div className="ml-3  float-right">
                  <ImageLoader
                    src="http://www.dc.ufscar.br/imagens/foto-patio-interno"
                    alt="Foto: Pátio interno"
                    height="153px"
                    width="271px"
                    loaderHeight="153px"
                    loaderWidth="271px"
                    title="Foto: Pátio interno"
                  />
                </div>
                <p>
                  O DC entende que a teoria deve ser sempre integrada com
                  atividades práticas, especialmente em cursos de tecnologia,
                  onde a aplicação do conhecimento é fundamental. Desta forma,
                  no último ano letivo, os alunos têm de realizar estágio
                  curricular em empresas, ou desenvolver atividades de pesquisa
                  em Informática, aplicando os conhecimentos adquiridos durante
                  o curso
                </p>

                <h2>Docentes</h2>
                <p>
                  O quadro de docentes do DC é formado por professores
                  associados, adjuntos, assistentes e titulares, sendo a maioria
                  formada por doutores e com dedicação exclusiva. A experiência
                  e capacitação dos professores podem ser observadas na
                  qualidade de formação de alunos de graduação e de
                  pós-graduação <i>stricto-sensu</i>, em cursos regulares da
                  UFSCar.
                </p>
                <h2>Educação continuada</h2>
                <p>
                  A educação continuada, na área de computação, sempre mereceu
                  atenção da UFSCar e tem sido realizada por seminários,
                  palestras, congressos, cursos de extensão e por cursos de
                  especialização. Os cursos de especialização sempre foram
                  realizados em parcerias de cooperação com outras Instituições
                  de Ensino Superior. Por outro lado, a evidência das áreas da
                  computação no mercado de trabalho tem gerado uma demanda
                  crescente por cursos de formação específica, que podem ser
                  oferecidos pelo DC.
                </p>
                <h2>Interação entre teoria e prática</h2>
                <p>
                  Os estudantes também têm a oportunidade de realizar estudos
                  extras, paralelamente às aulas, através de bolsas de
                  monitoria, de iniciação científica e de treinamento.
                </p>
              </div>
            </Event>
          </Timeline>
        </div>
      </React.Fragment>
    );
  }
}

export default LinhaDoTempo;
