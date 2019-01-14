import React from "react";
import ImageLoader from "../../../components/image-loader/ImageLoader";

import "../../../styles/css/labs.css";


const ResearchersCard = (props) => {
    const { nome, funcao, email } = props;

    return(
        <div className="card-body" style={
            { padding: 0,
              margin: "10px" }
            }>
            <div className="row">
                <div className="col-md-4" id="imgCard">
                    <ImageLoader
                        src={ require("../../../../src/images/imageExample.jpg") }
                        background-size= "cover"
                        background-position= "center"
                        height="100%"
                        width="100%"
                     />
                </div>

                <div className="col-md-8" style={
                    { padding: "1.2rem" }
                }>
                    <h5 className="card-title"> { nome } </h5>
                    <p className="card-subtitle mb-2 text-muted">{ funcao }</p>
                    <p className="card-text"><b> Email: </b>{ email } </p>
                    <a href= "#" className="card-link">Home Page</a>
                    <a href="#" className="card-link">Curriculum Lattes</a>
                </div>
            </div>
        </div>
    );
};

export default ResearchersCard;

