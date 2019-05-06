import React from "react";

import PropTypes from "prop-types";

import CarouselControl from "./CarouselControl";


{
  /* <CarouselBanner
  key="1"
  banner={banner1}
  active
  texto="Descrição primeiro banner"
/>; */
}

const Carousel = ({ children }) => {
  return (
    <div
      id="carrossel"
      className="carousel slide carousel-fade d-none d-md-block banner"
      data-ride="carousel"
    >
      <div className="carousel-inner">{children}</div>
      <CarouselControl direction="prev" />
      <CarouselControl direction="next" />
    </div>
  );
};

export default Carousel;
