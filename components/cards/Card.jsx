import React from "react";

const Card = ({ classnames, children }) => {
  return <div className={`${classnames} card hoverable`}>{children}</div>;
};

export default Card;