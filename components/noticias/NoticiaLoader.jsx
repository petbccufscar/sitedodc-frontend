import React from "react";
import ContentLoader from "react-content-loader";

const NoticiaLoader = (props) => (
  <ContentLoader
    height={220}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="21" y="165" rx="4" ry="4" width="350" height="13" />
    <rect x="21" y="189" rx="4" ry="4" width="175" height="8" />
    <rect x="0" y="0" rx="5" ry="5" width="400" height="148" />
  </ContentLoader>
);
export default NoticiaLoader;
