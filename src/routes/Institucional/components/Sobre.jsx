import React from "react";
// import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import { ImageLoader } from "../../../components/image-loader";
import ImgRegua from "../../../images/sobre1.jpg";

const Sobre = (
  <React.Fragment>
    <div className="container text-justify">
      <p>
        O Departamento de Computação da Universidade Federal de São Carlos
        (DC-UFSCar) existe desde 1972, sendo responsável pelos cursos de
        graduação de Bacharelado em Ciência da Computação, Engenharia de
        Computação e Sistemas de Informação. Também é responsável pelo curso de
        pós-graduação (<i>stricto sensu</i>) em Ciência da Computação e oferece
        cursos de especialização (<i>lato sensu</i>
        ).
      </p>

      <div className="row ">
        <div className="col-md-auto m-3 text-center align-self-center">
          <ImageLoader
            src={ImgRegua}
            title="Foto: Régua de cálculo"
            loaderHeight="200px"
            loaderWidth="315px"
            height="200px"
            width="315px"
            alt="Foto: Régua de cálculo"
          />
        </div>

        <div className="col align-self-center">
          <p>
            Em sua existência, o DC-UFSCar tem habilitado e colocado anualmente
            no mercado de trabalho cerca de uma centena de profissionais, que
            atuam em empresas e em Instituições de Ensino Superior.
          </p>
          <p>
            Atento à constante evolução na área de computação, o DC-UFSCar tem
            atuado na vanguarda deste desenvolvimento tecnológico, firmando-se
            no cenário nacional e internacional como um centro de pesquisa
            bastante atuante.
          </p>
        </div>
      </div>
      <br />

      <div className="row">
        <div className="col align-self-center">
          <p>
            O DC entende que a teoria deve ser sempre integrada com atividades
            práticas, especialmente em cursos de tecnologia, onde a aplicação do
            conhecimento é fundamental. Desta forma, no último ano letivo, os
            alunos têm de realizar estágio curricular em empresas, ou
            desenvolver atividades de pesquisa em Informática, aplicando os
            conhecimentos adquiridos durante o curso
          </p>

          <h3 className="mt-4">Docentes</h3>
          <p>
            O quadro de docentes do DC é formado por professores associados,
            adjuntos, assistentes e titulares, sendo a maioria formada por
            doutores e com dedicação exclusiva. A experiência e capacitação dos
            professores podem ser observadas na qualidade de formação de alunos
            de graduação e de pós-graduação <i>stricto-sensu</i>, em cursos
            regulares da UFSCar.
          </p>
        </div>
      </div>

      <h3 className="mt-4">Educação continuada</h3>
      <p>
        A educação continuada, na área de computação, sempre mereceu atenção da
        UFSCar e tem sido realizada por seminários, palestras, congressos,
        cursos de extensão e por cursos de especialização. Os cursos de
        especialização sempre foram realizados em parcerias de cooperação com
        outras Instituições de Ensino Superior. Por outro lado, a evidência das
        áreas da computação no mercado de trabalho tem gerado uma demanda
        crescente por cursos de formação específica, que podem ser oferecidos
        pelo DC.
      </p>
      <h3 className="mt-4">Interação entre teoria e prática</h3>
      <p>
        Os estudantes também têm a oportunidade de realizar estudos extras,
        paralelamente às aulas, através de bolsas de monitoria, de iniciação
        científica e de treinamento.
      </p>
    </div>
  </React.Fragment>
);

export default Sobre;
