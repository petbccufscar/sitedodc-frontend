import React from "react";
import { defaultCardThreeColumns } from "./styles";
import Card from "./Card";

const FourCards = ({ classnames, children }) => {
  return <Card classnames={`${defaultCardThreeColumns} ${classnames}`}>{children}</Card>;
};

export default FourCards;