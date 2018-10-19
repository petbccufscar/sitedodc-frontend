import React, { Component } from "react";
import { Link } from "react-router-dom";
import Botao from "../components/Botao"

// TODO: pegar da api
const Grupo = ({
  titulo = "Sem titulo",
  descricao = "Sem descrição",
  link,
  foto,
}) => (
    <div class="container ">
    <div class="row mt-4 justify-content-center">
        <div class="col-lg-4 col-md-6 text-lg-right mb-2">
            <img src={foto} class="img-responsive rounded" alt="..." 
            height="200" width="300"/>
        </div>
        <div class="col-lg-8 col-md-6">
            <h3>{titulo}</h3>
            <p class="text-justify">{descricao}</p>
            <p><Botao texto="VISITAR SITE" link={link} small={true}/></p>
        </div>
    </div>
</div>
);

export default Grupo;
