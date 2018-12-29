import React from "react";
import Card, { CardBody } from "./Card";
import { ImageLoader } from "./image-loader";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Placeholder = () => (
    <Card>
    <CardBody>
      <div className="mr-4">
        <ImageLoader
          classnames="card-img-rounded rounded-circle"
          src={"https://picsum.photos/100/100/?random"}
          alt={"alt"}
        />
      </div>
      <div>
        <h5 className="card-title">Nicanor José Costa</h5>
        <p className="card-text">Secretaria de Coordenação de Cursos</p>
      </div>
    </CardBody>
  </Card>
);

const TecnicoAdministrativo = () => (
  <div className="card-columns" style={{ columnCount: 2 }}>
    <Placeholder />
    <Placeholder />
    <Placeholder />
    <Placeholder />
  </div>
);

export default TecnicoAdministrativo;
