import React from "react";

import PropTypes from "prop-types";


const CarouselBanner = ({ banner, active, texto, alt }) => (
  <div className={active ? "carousel-item active" : "carousel-item"}>
    <img className="w-100 banner rounded-left" src={banner} alt={alt} />
    <div class="carrossel-legenda p-0">
      <p class="pl-4 pt-2">{texto}</p>
    </div>
  </div>
);

CarouselBanner.propTypes = {
  banner: PropTypes.string.isRequired,
  active: PropTypes.bool,
  texto: PropTypes.string,
  alt: PropTypes.string,
};

export default CarouselBanner;