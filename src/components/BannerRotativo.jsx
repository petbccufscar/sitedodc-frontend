import React, { Component } from "react";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";

class BannerRotativo extends Component {
  state = {};
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
        className="carousel slide carousel-fade d-none d-md-block"
        data-ride="carousel"
      >
        <div key="1" className="carousel-item active">
          <img
            className="d-block w-100"
            src={banner1}
            alt="descrição qualquer"
          />
        </div>
        <div key="2" className="carousel-item">
          <img
            className="d-block w-100"
            src={banner2}
            alt="descrição qualquer"
          />
        </div>
        <div key="3" className="carousel-item">
          <img
            className="d-block w-100"
            src={banner3}
            alt="descrição qualquer"
          />
        </div>
      </div>
    );
  }
}

export default BannerRotativo;
