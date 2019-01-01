import React from "react";
import PropTypes from "prop-types";

const Card = ({
  className,
  children,
}) => <div className={"card " + className}>{children}</div>;

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export const CardBody = ({ children }) => (
  <div className="card-body d-flex flex-row">{children}</div>
);
CardBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export const CardFooter = ({ children }) => (
  <div className="card-footer bg-white">{children}</div>
);
CardFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
export default Card;
