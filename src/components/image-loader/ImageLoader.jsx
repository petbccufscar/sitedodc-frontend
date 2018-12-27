import React from "react";

import { box, loader } from "./style";

const Loader = ({ style, classnames }) => {
  return (
    <div className={`${box} ${classnames}`} style={style}>
      <div className={loader} />
    </div>
  );
};

class ImageLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    const { src } = this.props;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      this.setState({
        loaded: true
      });
    };
  }

  render() {
    const {
      classnames,
      title,
      alt,
      src,
      loaderHeight,
      loaderWidth,
      width,
      height
    } = this.props;
    const { loaded } = this.state;

    return (
      <React.Fragment>
        {!loaded && (
          <Loader
            classnames={classnames}
            style={{ height: loaderHeight, width: loaderWidth }}
          />
        )}
        {loaded && (
          <img
            className={classnames}
            src={src}
            alt={alt}
            title={title}
            height={height}
            width={width}
          />
        )}
      </React.Fragment>
    );
  }
}

export default ImageLoader;
