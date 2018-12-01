import React from "react"
import ContentLoader from "react-content-loader"

const NoticiaCompletaLoader = props => (
  <ContentLoader 
    height={160}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="95" rx="3" ry="3" width="350" height="6.4" /> 
    <rect x="0" y="80" rx="3" ry="3" width="380" height="6.4" /> 
    <rect x="0" y="65" rx="3" ry="3" width="201" height="6.4" /> 
    <rect x="0" y="50" rx="3" ry="3" width="350" height="6.4" /> 
    <rect x="0" y="35" rx="3" ry="3" width="380" height="6.4" /> 
    <rect x="0" y="7" rx="3" ry="3" width="380" height="20" />
  </ContentLoader>
)

export default NoticiaCompletaLoader;