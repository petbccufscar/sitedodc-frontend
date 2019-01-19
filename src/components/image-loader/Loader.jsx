import React from "react";
import PropTypes from "prop-types";

import { box, loader } from "./style";

const Loader = ({ classnames, height, width }) => {
  return (
    <div
      className={`${box} ${classnames}`}
      style={{ height: height, width: width }}
    >
      <div className={loader} />
    </div>
  );
};

Loader.propTypes = {
  classnames: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default Loader;
