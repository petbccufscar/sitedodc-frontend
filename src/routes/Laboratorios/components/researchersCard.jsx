import React, { Component } from "react";

import "../../../styles/css/labs.css";

const ResearchersCard = props =>{
    const { nome, funcao, email, links } = props;
    

    return(
        <div className="card-body">
            <h5 className="card-title"> { nome } </h5>
            <p className="card-subtitle mb-2 text-muted">{ funcao }</p>
            <p className="card-text"> Email: {email} </p>
            <a href= "#" className="card-link">Home Page</a>
            <a href="#" className="card-link">Curriculum Lattes</a>
        </div>
    );
};

export default ResearchersCard;

