import React, { Component } from "react";
import LinkRapido from "./LinkRapido";

class LinksRapidos extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      links: []
    };
  }
  componentDidMount() {
    fetch("https://sitedodc-backend.herokuapp.com/link")
      .then(recebidoJson => {
        return recebidoJson.json();
      })
      .then(links => {
        this.setState({ links: links });
      });
  }
  render() {
    return (
      <div className=" mt-4">
        <h4 className="mb-3">Links rápidos</h4>
        <div className="d-flex flex-wrap">
          {this.state.links.map(link => (
            <LinkRapido link="link" />
          ))}
        </div>
      </div>
    );
  }
}

export default LinksRapidos;
