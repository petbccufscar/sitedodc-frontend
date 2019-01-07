import React, { Component } from "react";

const ResearchersCard = props =>{
    const { nome, funcao, email, links } = props;

    return(
        <div className="card-body" style={{ width: '100%' }}>
            <h6 className="card-title"> { nome } </h6>
            <p className="card-subtitle mb-2 text-muted">{ funcao }</p>
            <p className="card-text"> {email} </p>
            <a href={links} className="card-link">Home Page</a>
            <a href="#" className="card-link">Curriculum Lattes</a>
        </div>
    );
};

export default ResearchersCard;

