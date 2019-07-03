import React from "react";

import ContentLoader from "react-content-loader";

const LinksRapidosLoader = (props) => (
  <ContentLoader
    height={40}
    width={155}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="35" height="35" />
    <rect x="40" y="0" rx="0" ry="0" width="35" height="35" />
    <rect x="80" y="0" rx="0" ry="0" width="35" height="35" />
    <rect x="120" y="0" rx="0" ry="0" width="35" height="35" />
  </ContentLoader>
);

export default LinksRapidosLoader;
