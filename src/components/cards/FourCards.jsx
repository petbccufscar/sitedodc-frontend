import React from "react";
import { defaultCardFourColumns } from "./styles";
import Card from "./Card";

const FourCards = ({ classnames, children }) => {
  return <Card classnames={`${defaultCardFourColumns} ${classnames}`}>{children}</Card>
};

export default FourCards;