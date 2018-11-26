import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// TODO: pegar da api
const Grupo = ({
  titulo = "Sem titulo",
  descricao = "Sem descrição",
  link,
  foto,
}) => (
    <div className="row mt-4  ml-0 mr-0">
        <div className="col-md-4 mb-2 pl-0 rounded" style={{ minHeight:"200px" ,backgroundImage:'url('+foto+')', backgroundSize:"cover", backgroundPosition:"center"}}>
    
        </div>  
        <div className="col-md-8">
            <h3>{titulo}</h3>
            <p className="text-justify">{descricao}</p>
            <p>
                <Link to={link}>
                    <FontAwesomeIcon icon="globe-americas" className="d-inline-block mr-2"/>
                    Visitar Site
                </Link>
            </p>
        </div>
</div>
);

export default Grupo;
