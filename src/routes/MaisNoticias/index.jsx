import React, { Component } from "react";
import Noticias from "../../components/Noticias";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";

const MAX_ITENS = 12

class MaisNoticias extends Component {
  constructor(props) {
    super(props)
    this.state = { start: MAX_ITENS, disabled: false }
  }

  onLoad(itens) {
    if (itens.length < MAX_ITENS && !this.state.disabled) {
      this.setState({ disabled:true })
    }
  }

  render() {
    let array = []

    for(let i = 0; i < this.state.start / MAX_ITENS; i++) {
      array.push(i*MAX_ITENS)
    }

    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Notícias</Breadcrumb>
        </Breadcrumbs>
        <div className="container">
          <div className="col">
            <div className="row mt-5 mais-noticias" id="conteudo">
              {array.map((item,index)=> 
                <Noticias 
                  key={index}
                  quantidade={MAX_ITENS}
                  start={item}
                  onLoad={itens=> this.onLoad(itens)}
                />
              )}
            </div>
            <div className="text-center">
            <button
              onClick={()=> {
                !this.state.disabled && this.setState(prevState=> ({ start: prevState.start + MAX_ITENS }))
                }
              }
              type="button"
              class="btn btn-primary"
              disabled={this.state.disabled}
            >
              Carregar mais
            </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MaisNoticias;
