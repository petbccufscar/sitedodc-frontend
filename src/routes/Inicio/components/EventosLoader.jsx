import React from "react";
import ContentLoader from "react-content-loader";

const EventosLoader = props => (
  <ContentLoader 
    height={252}
    width={350}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="122" y="25" rx="5" ry="5" width="240" height="30" /> 
    <rect x="0" y="10" rx="0" ry="0" width="90" height="28" /> 
    <rect x="0" y="42" rx="0" ry="0" width="90" height="28" />
    <rect x="122" y="105" rx="5" ry="5" width="240" height="30" /> 
    <rect x="0" y="90" rx="0" ry="0" width="90" height="28" /> 
    <rect x="0" y="122" rx="0" ry="0" width="90" height="28" />
    <rect x="122" y="185" rx="5" ry="5" width="240" height="30" /> 
    <rect x="0" y="170" rx="0" ry="0" width="90" height="28" /> 
    <rect x="0" y="202" rx="0" ry="0" width="90" height="28" />
  </ContentLoader>
);
export default EventosLoader;