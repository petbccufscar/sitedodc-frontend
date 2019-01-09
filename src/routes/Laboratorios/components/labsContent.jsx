import React from "react";
import ResearchersCard from "./researchersCard";

const LabsContent = props => {
    const { tabContent } = props;

    return(
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 align-self-center text-center">
                        <img
                            src={require('../../../../src/images/logos/bcc.png')}
                            width="50"
                            height="55"
                            alt="Logo do grupo de pesquisa"
                        />
                    </div>
                    <div className="col">
                        <h2>{ tabContent.title }</h2>
                    </div>
                </div>
                <hr />
                { tabContent.body }
                <br />
                <h3> Áreas de pesquisa</h3>
                <br />
                <ul>
                    { tabContent.researchLine.map( (research, index) => <li key={ index }> { research } </li>) }
                </ul>
                <hr />
                <h3> Professores responsáveis </h3>
                <br />
                { tabContent.researchers.map( (researcher, index) => <ResearchersCard key={ index } nome={ researcher.nome } funcao={ researcher.funcao } email={ researcher.email }/> )}
                <br />
                <h3> Informações Adicionais </h3>
                <h1> ... </h1>   
            </div> 
        </React.Fragment>
    );
}

export default LabsContent;