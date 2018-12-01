import React from "react";

const  Card = ({
  className,
  key,
  children
}) => (
    <div className={"card "+ className} key={key}>
      {children}
    </div>
  );

export const CardImage = ({ img, alt }) => (

  <img
    className="card-img-top"
    src={img}
    alt={alt}
  />
)

export const CardBody = ({ img, alt, children }) => (

  <div className="card-body d-flex flex-row">
    {children}
  </div>
)

export const CardFooter = ({ children }) => (

  <div className="card-footer bg-white">
    {children}
  </div>
)

export default Card;