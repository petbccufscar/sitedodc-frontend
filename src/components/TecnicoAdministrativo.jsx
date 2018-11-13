import React, { Component } from "react";
import Card from "./Card";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TecnicoAdministrativo = () => (
    <div
    className="card-columns"
    style={{ columnCount: 2 }}>
        <Card
        key="0"
        img_esquerda
        titulo="Nicanor José Costa"
        subtitulo="Coordenador dos cursos BCC e ENC"
        imagem="https://picsum.photos/100/100/?random"
        />

        <Card
        key="0"
        img_esquerda
        titulo="Nicanor José Costa"
        subtitulo="Coordenador dos cursos BCC e ENC"
        imagem="https://picsum.photos/100/100/?random"
        />

        <Card
        key="0"
        img_esquerda
        titulo="Nicanor José Costa"
        subtitulo="Coordenador dos cursos BCC e ENC"
        imagem="https://picsum.photos/100/100/?random"
        />

        <Card
        key="0"
        img_esquerda
        titulo="Nicanor José Costa"
        subtitulo="Coordenador dos cursos BCC e ENC"
        imagem="https://picsum.photos/100/100/?random"
        />
    </div>
);

export default TecnicoAdministrativo;
