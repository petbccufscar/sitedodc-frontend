import React from "react";
import ImageLoader from "../../../components/image-loader/ImageLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card, { CardBody, CardFooter } from "../../../components/Card";
import PropTypes from "prop-types";


const ResearchersCard = (props) => {
    const { nome, funcao, email } = props;

    return(
       <Card className="hoverable mb-3">
           <CardBody>
               <div className="row justify-content-center">
                    <div className="mr-4 ml-4">
                        <ImageLoader
                            classnames="card-img-researchers rounded-circle"
                            src={ require("../../../../src/images/imageExample.jpg") }
                            alt="Imagem professor responsável"
                        />
                    </div>
                    <div className="card-content align-self-center" style={{ padding: "1rem" }}>
                        <h4 className="card-title"> { nome } </h4>
                        <p className="card-subtitle mb-2 text-muted">{ funcao }</p>
                        <p className="card-text"><b> Email: </b>{ email } </p>
                    </div>
               </div>
           </CardBody>
           <CardFooter>
               <div className="row justify-content-center">
                    <a href= "#" className="card-link">
                        <FontAwesomeIcon icon="user" className="align-self-center d-inline-block mr-2"/>
                        Página Pessoal
                    </a>
                    <a href="#" className="card-link">
                        <FontAwesomeIcon icon="globe-americas" className="align-self-center d-inline-block mr-2"/>
                        Lattes
                    </a>

               </div> 
           </CardFooter> 
       </Card>
    );
};

ResearchersCard.propTypes = {
    nome:PropTypes.string.isRequired,
    funcao:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
};

export default ResearchersCard;

