import React from "react";
import Card, { CardBody } from "./Card";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const TecnicoAdministrativo = () => (
    <div
        className="card-columns"
        style={{ columnCount: 2 }}>

        <Card>
            <CardBody >
                <div className="mr-4">
                    <img id="card-img-rounded"
                        className="rounded-circle"
                        src={"https://picsum.photos/100/100/?random"}
                        alt={"alt"}
                    />
                </div>
                <div>
                    <h5 className="card-title">Nicanor José Costa</h5>
                    <p className="card-text">
                        Secretaria de Coordenação de Cursos
                    </p>
                </div>
            </CardBody>
        </Card>
        <Card>
            <CardBody >
                <div className="mr-4">
                    <img id="card-img-rounded"
                        className="rounded-circle"
                        src={"https://picsum.photos/100/100/?random"}
                        alt={"alt"}
                    />
                </div>
                <div>
                    <h5 className="card-title">Nicanor José Costa</h5>
                    <p className="card-text">
                        Secretaria de Coordenação de Cursos
                    </p>
                </div>
            </CardBody>
        </Card>
        <Card>
            <CardBody >
                <div className="mr-4">
                    <img id="card-img-rounded"
                        className="rounded-circle"
                        src={"https://picsum.photos/100/100/?random"}
                        alt={"alt"}
                    />
                </div>
                <div>
                    <h5 className="card-title">Nicanor José Costa</h5>
                    <p className="card-text">
                        Secretaria de Coordenação de Cursos
                    </p>
                </div>
            </CardBody>
        </Card>
        <Card>
            <CardBody >
                <div className="mr-4">
                    <img id="card-img-rounded"
                        className="rounded-circle"
                        src={"https://picsum.photos/100/100/?random"}
                        alt={"alt"}
                    />
                </div>
                <div>
                    <h5 className="card-title">Nicanor José Costa</h5>
                    <p className="card-text">
                        Secretaria de Coordenação de Cursos
                    </p>
                </div>
            </CardBody>
        </Card>

    </div>
);

export default TecnicoAdministrativo;
