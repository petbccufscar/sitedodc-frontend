import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { CardBody, CardFooter } from "../../../components/Card";
import { TwoCards } from "../../../components/cards";
import Badge from "../../../components/Badge";
import { ImageLoader } from "../../../components/image-loader";
import EmailsImage from "../../../utils/emails";

const DocenteCard = ({ docente }) => (
  <TwoCards key={docente["Nome"]} className="hoverable">
    <CardBody>
      {docente.Foto && (
        <div className="mr-4">
          <ImageLoader
            classnames="card-img-rounded rounded-circle"
            src={`${process.env.REACT_APP_API_URL}/${docente.Foto.url}`}
            alt={"alt"}
          />
        </div>
      )}
      <div>
        <Link to={`/docente/${docente._id}`}>
          <h5 className="card-title">{docente.Nome}</h5>
        </Link>

        <p className="card-text">
          {`${docente.Tipo}-${docente.Horas}h/DE`} <br />
          {`Nível: ${docente.Nivel=='Pos' ? 'Pós Doutorado': docente.Nivel}`} <br />
          {`Telefone: ${docente.Telefone}`} <br />
          {`Email:`}  <img src={EmailsImage.getEmailImagePath(docente.Email)}/>
        </p>
      </div>
    </CardBody>
    <CardFooter>
      <ul className="mb-0 pl-0">
        {docente.Areas.slice(0, 3).map((area, index) => (
          <Badge
            key={index}
            color="extra-light"
            link={`/docentes/por-area/${area.Nome}`}
          >
            {area.Nome}
          </Badge>
        ))}
        <FontAwesomeIcon icon="angle-right" size="sm" color="gray" />
      </ul>
    </CardFooter>
  </TwoCards>
);

export default DocenteCard;
