import React, { Component } from "react";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import Breadcrumb from "../../components/Breadcrumb";
import sanitizeHtml from "sanitize-html";
class Noticia extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      noticia: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch("http://localhost:8080/api/content?type=Noticia&id=" + id)
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({ noticia: json.data });
      });
  }

  render() {
    return this.state.noticia.map(noticia => {
      return (
        <div className="container mt-5">
          <div className="row">
            <Breadcrumb path={this.props.location.pathname} />
          </div>
          <div className="row">
            {this.Imagem(noticia.imagem)}
            <div className="col">
              <div className="mb-2 pb-2 border-bottom">
                <h4>
                  <span className="mr-2 badge badge-primary">
                    {this.FormatarData(noticia.timestamp)}
                  </span>

                  {noticia.titulo}
                </h4>
                <small>{noticia.subtitulo}</small>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(noticia.conteudo)
                }}
              />
            </div>
          </div>
        </div>
      );
    });
  }
  FormatarData(data) {
    return format(new Date(data), "DD/MM/YYYY", {
      locale: pt
    });
  }

  Imagem(url) {
    return url !== "" ? (
      <div
        className="col-3 d-none d-md-block pl-0"
        style={{
          backgroundImage: "url('http://localhost:8080" + url + "')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "4px"
        }}
      />
    ) : (
      ""
    );
  }
}

export default Noticia;
