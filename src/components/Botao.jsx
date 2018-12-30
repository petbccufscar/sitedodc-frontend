import React, { Component } from "react";
import { Link } from "react-router-dom";

const Botao = ({
  texto = "LINK",
  link = "#",
  background = "primary",
  textcolor = "white",
  small = false
}) => (
  <a target="_blank" href={link} className={"btn btn-" + background + " text-" + textcolor + " mr-3"}>
    {small ? (<small>{texto}</small>) : texto}
  </a>
    
);

export default Botao;

