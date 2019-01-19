import React from "react";
import PropTypes from 'prop-types';

import { column, cell } from "./style";

const AlunoCard = ({ children }) => {
  return (
    <div className={`${column}`}>
      <div className={`${cell} card h-100 mb-2`}>{children}</div>
    </div>
  );
};

AlunoCard.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}

export default AlunoCard;