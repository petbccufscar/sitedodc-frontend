import React from "react";
import avatar from "../../../images/avatar.png"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AlunoCard = ({nome, foto=avatar}) => (
    <div className="card hoverable" style={{width:"14rem"}}>
        <img className="card-img-top" src={foto} alt="Foto do aluno"/>
        <div className="card-body text-center">
            <h5 className="card-title">{nome}</h5>
        </div>
    </div>
);

export default AlunoCard;
