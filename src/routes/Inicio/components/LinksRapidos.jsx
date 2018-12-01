import React, { Component } from "react";
import LinkRapido from "./LinkRapido";
import LinksRapidosLoader from "./LinksRapidosLoader";
class LinksRapidos extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.ready !== nextState.ready) {
      return true;
    }
    return false;
  }
  state = {};
  constructor() {
    super();
    this.state = {
      links: [],
      ready: false
    };
  }
  async componentDidMount() {
    try {
      const response = await fetch("https://sitedodc-backend.herokuapp.com/link");
      const json = await response.json();
      this.setState({ links: json, ready: true });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className=" pt-5 pt-md-4">
        <h4 className="mb-3">Links rápidos</h4>

        {
          this.state.ready ? <div className="d-flex flex-wrap">
            {
              this.state.links.map((link, index) => (
                <LinkRapido link={link.Link} key={index} />


              ))} </div> : (<LinksRapidosLoader />)


        }
      </div>
    );
  }
}

export default LinksRapidos;
