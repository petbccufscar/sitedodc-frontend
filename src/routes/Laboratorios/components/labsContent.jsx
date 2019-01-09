import React, { Component } from "react";
import ResearchersCard from "./researchersCard";

const LabsContent = props => {
    const { tabContent } = props;

    return(
        <React.Fragment>
            <div className="container-fluid">
                <h3>{ tabContent.title }</h3>
                <hr />
                { tabContent.body }
                <br />
                <h3> Áreas de pesquisa</h3>
                <br />
                <ul>
                    { tabContent.researchLine.map( research => <li> { research } </li>) }
                </ul>
                <hr />
                <h3> Professores responsáveis </h3>
                <br />
                { tabContent.researchers.map( researcher => <ResearchersCard nome={ researcher.nome } funcao={ researcher.funcao } email={ researcher.email }/> )}
                <br />
                <h3> Informações Adicionais </h3>
                <h1> ... </h1>   
            </div> 
        </React.Fragment>
    );
}

export default LabsContent;