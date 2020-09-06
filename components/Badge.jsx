/* eslint "jsx-a11y/no-access-key": 0 */

import React from "react";
import PropTypes from "prop-types";

const Badge = ({
  id,
  link,
  children,
  color = "dark",
  onClick,
  accessKey = "",
}) => (
  <li id={id} className="list-inline-item ">
    <a
      className={"badge badge-" + color + " font-weight-normal"}
      accessKey={accessKey}
      onClick={onClick}
      href={link}
    >
      {children}
    </a>
  </li>
);
Badge.propTypes = {
  id:PropTypes.string.isRequired,
  link:PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  color:PropTypes.string,
  onClick:PropTypes.func,
  accessKey:PropTypes.string,
};

export default Badge;
