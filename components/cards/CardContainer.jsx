import React from "react";
import { defaultContainer } from "./styles";

const CardContainer = ({ containerType = defaultContainer, classnames, children }) => {
  return <div className={`${containerType} ${classnames}`}>{children}</div>;
};

export default CardContainer;