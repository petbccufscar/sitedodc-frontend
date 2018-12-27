import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImageLoader } from "../../../components/image-loader";
import { groupImage, imageContainer } from "./style";

// TODO: pegar da api
const Grupo = ({
  titulo = "Sem titulo",
  descricao = "Sem descrição",
  link,
  foto
}) => (
  <div className="row mt-4 mx-0">
  <div className="col-md-4 mb-2 pl-0" style={{maxWidth:"100%"}}>
    <div className={` ${imageContainer}`}>
      <ImageLoader classnames={`rounded ${groupImage}`} src={foto} />
    </div ></div>
    <div className="col-md-8">
      <h3>{titulo}</h3>
      <p className="text-justify">{descricao}</p>
      <p>
        <Link to={link}>
          <FontAwesomeIcon
            icon="globe-americas"
            className="d-inline-block mr-2"
          />
          Visitar Site
        </Link>
      </p>
    </div>
  </div>
);

export default Grupo;
