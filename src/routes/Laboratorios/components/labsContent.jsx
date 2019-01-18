import React from "react";
import ResearchersCard from "./researchersCard";
import PropTypes from "prop-types";


const LabsContent = (props) => {
    const { children } = props;

    return(
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 align-self-center text-center">
                        <img
                            src={require("../../../../src/images/logos/bcc.png")}
                            width="50"
                            height="55"
                            alt="Logo do grupo de pesquisa"
                        />
                    </div>
                    <div className="col">
                        <h2>{ children.content.title }</h2>
                    </div>
                </div>
                <hr />
                { children.content.body }
                <br />
                <h3> Áreas de pesquisa</h3>
                <br />
                <ul>
                    { children.content.researchLine.map( (research, index) => <li key={ index }> { research } </li>) }
                </ul>
                <hr />
                <h3> Professores responsáveis </h3>
                <br />
                { children.content.researchers.map( (researcher, index) => <ResearchersCard key={ index } nome={ researcher.nome } funcao={ researcher.funcao } email={ researcher.email }/> )}
                <br />
                <h3> Informações Adicionais </h3>
                <h1> ... </h1>   
            </div> 
        </React.Fragment>
    );
};

export default LabsContent;
