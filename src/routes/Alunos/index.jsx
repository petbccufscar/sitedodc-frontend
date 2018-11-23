import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";

class Alunos extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      anos: [2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980, 1979, 1978, 1977, 1976, 1975, 1974, 1973, 1972]
    };
  }

  render() {
    let anosBCC = this.state.anos.map(ano => {
      return this.Ano(ano, "bcc");
    });
    let anosENC = this.state.anos.map(ano => {
      return this.Ano(ano, "enc");
    });
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Alunos</Breadcrumb>
        </Breadcrumbs>

        <div className="container">
          <h4>Bacharelado em Ciência da Computação</h4>
          <div className="row"
          style={{ columnCount: 8 }}>
            {anosBCC}
          </div>
        </div>

        <div className="container mt-4">
          <h4>Engenharia da Computação</h4>
          <div className="row"
          style={{ columnCount: 8 }}>
            {anosENC}
          </div>
        </div>
        
      </React.Fragment>
    );
  }

  Ano(ano, curso) {
    return (
      <Link to={"/alunos/" + curso + "/" + ano} className="btn btn-link"> {ano} </Link>
    );
  }
}

export default Alunos;

