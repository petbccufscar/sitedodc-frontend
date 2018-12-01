import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import ReactIframeResizer from 'react-iframe-resizer-super';

const iframeResizerOptions = { 
  checkOrigin: false,
   heightCalculationMethod: 'documentElementScroll'
};

class Catalogo extends Component {

  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Catálogo</Breadcrumb>
        </Breadcrumbs>

        <div className="container">
        <ReactIframeResizer fframeResizerOptions={iframeResizerOptions}  src="http://dctemp.dc.ufscar.br/static/lattes/index.html"></ReactIframeResizer>
        </div>
        
      </React.Fragment>
      
    );
  }
}

export default Catalogo;

