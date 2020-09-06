import React from "react";
import ContentLoader from "react-content-loader";

const CarouselLoader = (props) => (
  <ContentLoader
    width={700}
    height={280}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="20" y="8" rx="5" ry="5" width="660" height="264" />
  </ContentLoader>
);
export default CarouselLoader;
