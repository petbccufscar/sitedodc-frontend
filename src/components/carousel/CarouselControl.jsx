import React from "react";

import PropTypes from "prop-types";


const CarouselControl = ({ direction }) => (
  <a
    className={`carousel-control-${direction}`}
    href="#carrossel"
    role="button"
    data-slide={direction}
  >
    <span className={`carousel-control-${direction}-icon`} aria-hidden="true" />
    <span className="sr-only" />
  </a>
);

CarouselControl.propTypes = {
  direction: PropTypes.string.isRequired,
};

export default CarouselControl;
