import React, { Component } from "react";
function GetCarrosseis(carrosseis) {
  const carrosselHTML = carrosseis.map((carrosel, index) => (
    <div
      key={carrosel.uuid}
      className={index === 0 ? "carousel-item active" : "carousel-item"}
    >
      <img
        className="d-block w-100"
        src={"http://localhost:8080" + carrosel.url_foto}
        alt={carrosel.descricao}
      />
    </div>
  ));

  return carrosselHTML;
}
class BannerRotativo extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      carrosseis: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:8080/api/contents?type=Rotativo")
      .then(recebidoJson => {
        return recebidoJson.json();
      })
      .then(recebidoObject => {
        this.setState({ carrosseis: recebidoObject.data });
      });
  }
  render() {
    return (
      <div
        id="carrossel"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        {GetCarrosseis(this.state.carrosseis)}
      </div>
    );
  }
}

export default BannerRotativo;
