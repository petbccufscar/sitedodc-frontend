import React from "react";
import PropTypes from 'prop-types';

import { row } from "./style";

const AvatarContainer = ({ children }) => {
  return <div className={row}>{children}</div>;
};

AvatarContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

export default AvatarContainer;