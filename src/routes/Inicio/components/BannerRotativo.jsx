import React, { Component } from "react";
import banner1 from "../../../images/banner1.jpg";
import banner2 from "../../../images/banner2.jpg";
import banner3 from "../../../images/banner3.jpg";
import PropTypes from "prop-types";

const Banner = ({ banner, active }) => (
  <div className={active ? "carousel-item active" : "carousel-item"}>
    <img className="d-block w-100" src={banner} alt="descrição qualquer" />
  </div>
);

Banner.propTypes = {
  banner: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

const ControleBanner = ({ direction }) => (
  <a className={"carousel-control-" + direction} href="#carrossel" role="button" data-slide={direction}>
    <span className={"carousel-control-" + direction + "-icon"} aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a>
);

ControleBanner.propTypes = {
  direction: PropTypes.string.isRequired,
};

class BannerRotativo extends Component {
  constructor() {
    super();
    this.state = {
      carrosseis: [],
    };
  }

  render() {
    return (
      <div
        id="carrossel"
        className="carousel slide carousel-fade d-none d-md-block"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <Banner key="1" banner={banner1} active />
          <Banner key="2" banner={banner3} />
          <Banner key="3" banner={banner2} />
        </div>
        <ControleBanner direction="prev"/>
        <ControleBanner direction="next"/>
      </div>
    );
  }
}

export default BannerRotativo;
