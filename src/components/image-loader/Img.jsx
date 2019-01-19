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
    <div style={{ height: height, width: width }}>
      <img
        className={classnames}
        src={hasError ? fallback : src}
        alt={alt}
        title={title}
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
