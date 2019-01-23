import React from "react";
import PropTypes from "prop-types";

const Img = ({
  classnames,
  height,
  width,
  src,
  title,
  alt,
  hasError,
  fallback,
}) => {
  return (
    <div>
      <img
        className={classnames}
        src={hasError ? fallback : src}
        alt={alt}
        title={title}
        style={{ height: height, width: width }}
      />
    </div>
  );
};

Img.propTypes = {
  classnames: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default Img;
