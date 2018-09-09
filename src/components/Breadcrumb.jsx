import React, { Component } from "react";

class Breadcrumb extends Component {
  render() {
    const paths = this.props.path
      .substring(1)
      .split("/")
      .map(path => {
        return path.replace("-", " ");
      });

    return (
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <span className="mr-2">Você está em:</span>
          <li class="breadcrumb-item">
            <a href="/">Início</a>
          </li>
          {paths.map(path => {
            return (
              <li class="breadcrumb-item">
                <a href="/">{path}</a>
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
}

export default Breadcrumb;
