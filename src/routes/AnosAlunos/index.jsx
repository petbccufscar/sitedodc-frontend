import React from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";

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
  const currentYear = 2018;
  const startYear = 1972;
  const years = currentYear - startYear + 1;

  let bccLinks = Array.apply(null, { size: years });
  let encLinks = Array.apply(null, { size: years });
  for (let year = currentYear, i = 0; year >= startYear; year--, i++) {
    bccLinks[i] = generateLinkToYear(year, "bcc");
    encLinks[i] = generateLinkToYear(year, "enc");
  }

  return (
    <React.Fragment>
      <Breadcrumbs>
        <Breadcrumb endereco="/">Início</Breadcrumb>
        <Breadcrumb bold>Alunos</Breadcrumb>
      </Breadcrumbs>
      <main role="main" className="container" id="conteudo">
        <Curso name="Bacharelado em Ciência da Computação" links={bccLinks} />
        <Curso
          name="Engenharia da Computação"
          links={encLinks}
          classnames="mt-4"
        />
      </main>
    </React.Fragment>
  );
};

export default AnosAlunos;
