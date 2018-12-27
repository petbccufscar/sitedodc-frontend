import React from "react";
import { ImageLoader } from "../../../components/image-loader";

const LinkRapido = ({ imagem, link, alt }) => (
  <a
    className="links-rapidos p-2 hoverable rounded border mr-2 mb-2"
    href={link}
    rel="noopener noreferrer"
    target="_blank"
  >
    <ImageLoader
      classnames={"img-fluid"}
      src={imagem}
      alt={alt}
      loaderHeight="68px"
      loaderWidth="68px"
    />
  </a>
);

export default LinkRapido;
