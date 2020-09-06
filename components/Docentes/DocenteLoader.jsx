import React from "react";

import ContentLoader from "react-content-loader";

const DocenteLoader = (props) => (
  <ContentLoader
    height={90}
    width={200}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <circle cx="20" cy="20" r="20" />
    <rect x="50" y="1" rx="0" ry="0" width="150" height="90" />
  </ContentLoader>
);
export default DocenteLoader;
