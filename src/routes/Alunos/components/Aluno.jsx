import React, { Component } from "react";
import Card from "../../../components/Card"
import avatar from "../../../images/avatar.png"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Aluno = ({nome, foto=avatar}) => (
    <div className="card hoverable" style={{width:"14rem"}}>
        <img className="card-img-top" src={foto} alt="Card image cap"/>
        <div className="card-body text-center">
            <h5 className="card-title">{nome}</h5>
        </div>
    </div>
);

export default Aluno;
