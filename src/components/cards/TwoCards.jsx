import React from "react";
import { defaultCardTwoColumns } from "./styles";
import Card from "./Card";

const TwoCards = ({ classnames, children }) => {
  return <Card classnames={`${defaultCardTwoColumns} ${classnames}`}>{children}</Card>;
};

export default TwoCards;