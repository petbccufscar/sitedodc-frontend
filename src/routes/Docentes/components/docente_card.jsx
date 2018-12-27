import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Card, { CardBody, CardFooter } from "../../../components/Card"
import Badge from "../../../components/Badge"
import { ImageLoader } from "../../../components/image-loader";


const DocenteCard = ({ docente }) => (

  <Card
    key={docente["Nome"]}
    className="hoverable"
  >
    <CardBody >
      {docente.Foto && (
        <div className="mr-4">
          <ImageLoader
            classnames="card-img-rounded rounded-circle"
            src={"http://159.89.232.182:1337" + docente.Foto.url}
            alt={"alt"}
          />
        </div>)}
      <div>
        <Link to={"/docente/" + docente._id} >
          <h5 className="card-title">{docente.Nome}</h5>
        </Link>

        <p className="card-text">
          {docente.Tipo + "-" + docente.Horas + "h/DE"}<br />
          Telefone: {docente.Telefone} <br />
          Email: {docente.Email}
        </p>

      </div>
    </CardBody>
    <CardFooter>
      <ul className="mb-0 pl-0" >
        {docente.Areas.slice(0, 3).map((area, index) =>
          <Badge key={index} color="extra-light" link={"/docentes/por-area/" + area.Nome}>
            {area.Nome}
          </Badge>)}
        <FontAwesomeIcon icon="angle-right" size="sm" color="gray"></FontAwesomeIcon>
      </ul>
    </CardFooter>
  </Card>
);




export default DocenteCard;