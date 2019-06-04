import React from "react";
import { ImageLoader } from "../image-loader";
import PropTypes from "prop-types";
import { Tooltip } from "react-tippy"; 

const LinkRapido = ({ imagem, link, alt }) => (
  
  <a
    className="links-rapidos p-2 hoverable rounded border mr-2 mb-2"
    href={link}
    rel="noopener noreferrer"
    target="_blank"
  >
    <Tooltip
      title={alt}
      position="top"
    >
      <ImageLoader
        classnames={"img-fluid"}
        src={imagem}
        alt={alt}
        height="50px"
        widht="50px"
        loaderHeight="68px"
        loaderWidth="68px"
      />
    </Tooltip>
  </a>
);
LinkRapido.propTypes = {
  imagem:PropTypes.string.isRequired,
  link:PropTypes.string.isRequired,
  alt:PropTypes.string.isRequired,
};
export default LinkRapido;
