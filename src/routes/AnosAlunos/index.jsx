import React from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";

import { Query } from "react-apollo";
import { GET_INTERVALO } from "../../utils/queries";

const generateLinkToYear = (year, curso) => {
  return (
    <Link
      to={`/alunos/${curso}/${year}`}
      className="ano-aluno btn no-decoration mt-3 mx-2 btn-link hoverable"
    >
      {year}
    </Link>
  );
};

const Curso = ({ name, links, classnames = "" }) => {
  return (
    <div className={classnames}>
      <h4>{name}</h4>
      <div className="row" style={{ columnCount: 8 }}>
        {links}
      </div>
    </div>
  );
};

const AnosAlunos = () => {
  

  return (
    <React.Fragment>
      <Breadcrumbs>
        <Breadcrumb endereco="/">Início</Breadcrumb>
        <Breadcrumb bold>Alunos</Breadcrumb>
      </Breadcrumbs>
      <main role="main" className="container" id="conteudo">
        <Query query={GET_INTERVALO}>
          {({ loading, error, data }) => {
            if(loading || error) return <div />;
            console.log(data.inicio[0].Ano);
            const currentYear = data.mais_recente[0].Ano;
            const startYear = data.inicio[0].Ano;
            const years = currentYear - startYear + 1;
          
            let bccLinks = Array.apply(null, { size: years });
            let encLinks = Array.apply(null, { size: years });
            for (let year = currentYear, i = 0; year >= startYear; year--, i++) {
              bccLinks[i] = generateLinkToYear(year, "bcc");
              encLinks[i] = generateLinkToYear(year, "enc");
            }
            return (
              <React.Fragment>
                <Curso
                  name="Bacharelado em Ciência da Computação"
                  links={bccLinks}
                />
                <Curso
                  name="Engenharia da Computação"
                  links={encLinks}
                  classnames="mt-4"
                />
              </React.Fragment>
            );
          }}
        </Query>
      </main>
    </React.Fragment>
  );
};

export default AnosAlunos;
