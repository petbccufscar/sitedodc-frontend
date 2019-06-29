import React from "react";

import PropTypes from "prop-types";


const CarouselBanner = ({ banner, active, texto, creditos, alt }) => (
  <div className={active ? "carousel-item active" : "carousel-item"}>
    <img className="w-100 banner rounded-left" src={banner} alt={alt} />
    <div className="carrossel-legenda p-0">
      <p className="pl-4 pt-2 mb-1">{texto}<br/><small>{creditos}</small></p>
    </div>
  </div>
);

CarouselBanner.propTypes = {
  banner: PropTypes.string.isRequired,
  active: PropTypes.bool,
  texto: PropTypes.string,
  creditos: PropTypes.string,
  alt: PropTypes.string,
};

export default CarouselBanner;