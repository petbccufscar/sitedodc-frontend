import React from "react";
const LinkRapido = ({ imagem, link, alt}) => (
  <a
    className="links-rapidos p-2 hoverable rounded border mr-2 mb-2"
    href={link}
    rel="noopener noreferrer"
    target="_blank"

  >
    <img src={imagem} alt={alt} className="img-fluid" />
  </a>
);

export default LinkRapido;
