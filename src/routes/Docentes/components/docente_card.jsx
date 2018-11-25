import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Card, {CardBody, CardFooter} from "../../../components/Card"
import Badge from "../../../components/Badge"

const AreasDocente = ({ areas }) => (
  (areas) && (
    <ul className="mb-0 pl-0" >
        {areas.slice(0, 3).map(area => <Badge color="extra-light"><a href={"/docentes/por-area/" + area["Área"]}> {area["Área"]} </a></Badge>)}
        <FontAwesomeIcon icon="angle-right" size="sm" color="gray"></FontAwesomeIcon>
      </ul>
  )
)

const DocenteCard = ({ docente }) => (

    <Card
      key={docente["Nome"]}
      className="hoverable"
    >
      <CardBody >
        <div className="mr-4">
          <img id="card-img-rounded"
            className="rounded-circle"
            src={"https://picsum.photos/100/100/?random"}
            alt={"alt"}
          />
        </div>
        <div>
        <Link to={"/docente/" + docente["_id"]} >

        <h5 className="card-title">{docente["Nome"]}</h5>
        <p className="card-text">
        {docente["Tipo"] + "-" + docente["Horas"] + "h/DE"}<br/>
        Telefone: {docente["Ramal"]} <br/>
        Email: {docente["Email"]}
        </p>
        </Link>

        </div>
      </CardBody>
      <CardFooter>
        <AreasDocente areas={docente["Áreas"]} />
      </CardFooter>
    </Card>
);




export default DocenteCard;