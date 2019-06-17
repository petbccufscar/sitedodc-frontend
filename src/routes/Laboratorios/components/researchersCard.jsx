import React from "react";
import ImageLoader from "../../../components/image-loader/ImageLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card, { CardBody, CardFooter } from "../../../components/Card";
import PropTypes from "prop-types";


const ResearchersCard = ( { nome, foto, funcao, email, site, lattes } ) => {
    return(
       <Card className="hoverable mb-3">
           <CardBody>
               <div className="row justify-content-center card-sm-align-center">
                    <div className="mr-4 ml-4">
                        <ImageLoader
                            classnames="card-img-researchers rounded-circle"
                            src={ foto }
                            alt="Imagem professor responsável"
                        />
                    </div>
                    <div className="card-content align-self-center card-breakpoint" style={{ padding: "1rem" }}>
                        <h5 className="card-title"> { nome } </h5>
                        <p className="card-subtitle mb-2 text-muted">{ funcao }</p>
                        <p className="card-text"><b> Email: </b>{ email } </p>
                    </div>
               </div>
           </CardBody>
           {(site.length + lattes.length) ? <CardFooter>
               <div className="row justify-content-center">
                    {site.length ? <a href= {site} className="card-link">
                        <FontAwesomeIcon icon="user" className="align-self-center d-inline-block mr-2"/>
                        Página Pessoal
                    </a> : ''}
                    {lattes.length ? <a href={lattes} className="card-link">
                        <FontAwesomeIcon icon="globe-americas" className="align-self-center d-inline-block mr-2"/>
                        Lattes
                    </a> : ''}

               </div> 
           </CardFooter> : ''}
       </Card>
    );
};

ResearchersCard.propTypes = {
    nome:PropTypes.string.isRequired,
    funcao:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
};

export default ResearchersCard;

