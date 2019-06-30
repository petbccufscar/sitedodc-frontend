import React from "react";
import CarouselControl from "./CarouselControl";

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
