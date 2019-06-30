import React from "react";
import PropTypes from "prop-types";

import Loader from "./Loader";
import Img from "./Img";

class ImageLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      imgSrc: this.props.src,

    };
  }

  componentDidMount() {
    const { src, fallback } = this.props;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      this.setState({
        loaded: true,
      });
    };

    img.onerror = () => {
      if (fallback) {
        this.setState({
          loaded: true,
          imgSrc: fallback,
        });
      }
    };
  }

  render() {
    const {
      classnames,
      loaderHeight,
      loaderWidth,

      src,
      fallback,

      ...imgProps
    } = this.props;
    const { loaded, imgSrc } = this.state;

    return (
      <React.Fragment>
        {!loaded && (
          <Loader
            classnames={classnames}
            height={loaderHeight}
            width={loaderWidth}
          />
        )}
        {loaded && <Img classnames={classnames} src={imgSrc} {...imgProps} />}
      </React.Fragment>
    );
  }
}

ImageLoader.propTypes = {
  classnames: PropTypes.string,
  loaderHeight: PropTypes.string,
  loaderWidth: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  src: PropTypes.string.isRequired,
  fallback: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default ImageLoader;
