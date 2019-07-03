import React from "react";

const CardImage = ({ classnames, children }) => (
  <div className={`${classnames}`}>{children}</div>
);

export default CardImage;