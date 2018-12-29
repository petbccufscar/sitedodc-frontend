import React from "react";
import avatar from "../../../images/avatar.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImageLoader } from "../../../components/image-loader";

const AlunoCard = ({ nome, foto = avatar }) => (
  <div className="card hoverable" style={{ width: "14rem" }}>
    <ImageLoader
      classnames="card-img-top"
      src={foto}
      alt="Foto do aluno"
      loaderHeight="222px"
    />
    <div className="card-body text-center">
      <h5 className="card-title">{nome}</h5>
    </div>
  </div>
);

export default AlunoCard;
