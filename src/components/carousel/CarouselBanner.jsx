import React from "react";

import PropTypes from "prop-types";


const CarouselBanner = ({ banner, active, texto, alt }) => (
  <div className={active ? "carousel-item active" : "carousel-item"}>
    <img className="w-100 banner rounded" src={banner} alt={alt} />
    <div class="carousel-caption d-none d-md-block">
      <p>{texto}</p>
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