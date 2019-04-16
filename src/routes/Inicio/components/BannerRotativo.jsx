import React, { Component } from "react";
import banner1 from "../../../images/banner1.jpg";
import banner2 from "../../../images/banner2.jpg";
import banner3 from "../../../images/banner3.jpg";
import banner4 from "../../../images/banner4.jpg";
import banner5 from "../../../images/banner5.jpg";
import PropTypes from "prop-types";

const Banner = ({ banner, active, texto }) => (
  <div
    className={active ? "carousel-item active banner" : "carousel-item banner"}
  >
    <img className="w-100" src={banner} alt="descrição qualquer" />
    <div class="carousel-caption d-none d-md-block">
      <p>{texto}</p>
    </div>
  </div>
);

Banner.propTypes = {
  banner: PropTypes.string.isRequired,
  active: PropTypes.bool,
  texto: PropTypes.string
};

const ControleBanner = ({ direction }) => (
  <a
    className={"carousel-control-" + direction}
    href="#carrossel"
    role="button"
    data-slide={direction}
  >
    <span
      className={"carousel-control-" + direction + "-icon"}
      aria-hidden="true"
    />
    <span className="sr-only" />
  </a>
);

ControleBanner.propTypes = {
  direction: PropTypes.string.isRequired
};

class BannerRotativo extends Component {
  constructor() {
    super();
    this.state = {
      carrosseis: []
    };
  }

  render() {
    return (
      <div
        id="carrossel"
        className="carousel slide carousel-fade d-none d-md-block banner"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <Banner
            key="1"
            banner={banner1}
            active
            texto="Descrição primeiro banner"
          />
          <Banner key="2" banner={banner2} texto="Descrição segundo banner" />
          <Banner key="3" banner={banner3} texto="Descrição terceiro banner" />
          <Banner key="4" banner={banner4} texto="Descrição quarto banner" />
          <Banner key="5" banner={banner5} texto="Descrição quinto banner" />
        </div>
        <ControleBanner direction="prev" />
        <ControleBanner direction="next" />
      </div>
    );
  }
}

export default BannerRotativo;
