import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb";

class AreaDocentes extends Component {
  render() {
    return (
      <main role="main" id="conteudo" class="container mt-5">
        <Breadcrumb path={this.props.location.pathname} />

        <h2>Área do Docente</h2>

        <div class="row mt-4">
          <div class="col-md-3 col-lg-3 col-xl-2" id="menu_area">
            <div
              id="side-menu"
              data-toggle="affix"
              data-stick-class="affix-sidebar"
              data-parent="main"
              data-offset="85"
            >
              <ul class="nav nav-pills flex-column border p-2" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="suporte-tab"
                    data-toggle="pill"
                    href="#suporte"
                    role="tab"
                    aria-controls="suporte"
                    aria-selected="true"
                  >
                    Suporte
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="documentos-tab"
                    data-toggle="pill"
                    href="#documentos"
                    role="tab"
                    aria-controls="documentos"
                  >
                    Documentos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col">
            <div class="container tab-content" id="conteudo_area">
              <div
                class="tab-pane fade show active"
                id="suporte"
                role="tabpanel"
                aria-labelledby="suporte-tab"
              >
                <h3>Suporte</h3>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean velit nisl, tempor efficitur rutrum sed, pulvinar ut
                  erat. Nam sollicitudin sollicitudin quam, sed auctor metus
                  vulputate eu. Nulla suscipit, augue nec vestibulum
                  condimentum, libero dolor malesuada sapien, quis condimentum
                  quam turpis nec sem. Fusce consequat, lorem in imperdiet
                  tincidunt, lorem mauris luctus odio, sed pretium risus elit
                  sed justo. Praesent posuere eros eget viverra mollis.
                  Phasellus consequat dictum lorem eget finibus. Aenean tempor
                  dignissim lacinia. Phasellus auctor rhoncus nisl non varius.
                  Fusce hendrerit sed dolor eget laoreet. Nunc auctor, eros sit
                  amet sagittis dictum, libero purus tincidunt mi, aliquet
                  faucibus ante dolor sed leo. Phasellus imperdiet urna a nisi
                  mollis, eget condimentum nulla fermentum.
                </p>
              </div>

              <div
                class="tab-pane fade"
                id="documentos"
                role="tabpanel"
                aria-labelledby="documentos-tab"
              >
                <h3>Documentos</h3>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean velit nisl, tempor efficitur rutrum sed, pulvinar ut
                  erat. Nam sollicitudin sollicitudin quam, sed auctor metus
                  vulputate eu. Nulla suscipit, augue nec vestibulum
                  condimentum, libero dolor malesuada sapien, quis condimentum
                  quam turpis nec sem. Fusce consequat, lorem in imperdiet
                  tincidunt, lorem mauris luctus odio, sed pretium risus elit
                  sed justo. Praesent posuere eros eget viverra mollis.
                  Phasellus consequat dictum lorem eget finibus. Aenean tempor
                  dignissim lacinia. Phasellus auctor rhoncus nisl non varius.
                  Fusce hendrerit sed dolor eget laoreet. Nunc auctor, eros sit
                  amet sagittis dictum, libero purus tincidunt mi, aliquet
                  faucibus ante dolor sed leo. Phasellus imperdiet urna a nisi
                  mollis, eget condimentum nulla fermentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default AreaDocentes;
