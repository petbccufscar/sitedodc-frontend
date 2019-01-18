import React from "react";
import PropTypes from 'prop-types';

import { row } from "./style";

const AlunosContainer = ({ children }) => {
  return <div className={row}>{children}</div>;
};

AlunosContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

export default AlunosContainer;