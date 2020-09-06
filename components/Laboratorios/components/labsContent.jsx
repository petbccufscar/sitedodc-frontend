import React from "react";
import ResearchersCard from "./researchersCard";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

const LabsContent = ({ logoSrc, name, description, docentes }) => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 align-self-center text-center">
            <img
              src={logoSrc}
              width="50"
              height="55"
              alt="Logo do grupo de pesquisa"
            />
          </div>
          <div className="col">
            <h2>{name}</h2>
          </div>
        </div>
        <hr />
        <ReactMarkdown source={description} />
        <h3> Professores responsáveis </h3>
        {docentes.map((docente, index) => (
          <ResearchersCard
            key={index}
            nome={docente.Nome}
            foto={docente.Foto ? `${process.env.REACT_APP_API_URL}/${docente.Foto.url}` : '/images/avatar.png'}
            funcao={docente.Tipo}
            email={docente.Email}
            site={docente.Site}
            lattes={docente.Lattes}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

LabsContent.propTypes = {
  children: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.node,
    researchLine: PropTypes.arrayOf(PropTypes.string),
    researchers: PropTypes.arrayOf(
      PropTypes.shape({
        nome: PropTypes.string.isRequired,
        funcao: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        homePageLink: PropTypes.string.isRequired,
        curriculumLink: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default LabsContent;
