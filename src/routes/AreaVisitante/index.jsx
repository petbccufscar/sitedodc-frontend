import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";

class AreaVisitante extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Inicio</Breadcrumb>
          <Breadcrumb>Area do visitante</Breadcrumb>
        </Breadcrumbs>
        <div className="container">
          <h1 class="display-6">Área do Visitante</h1>
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
                      id="motivacao-tab"
                      data-toggle="pill"
                      href="#motivacao"
                      role="tab"
                      aria-controls="motivacao"
                    >
                      Motivação
                    </a>
                  </li>

                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="ingresso-tab"
                      data-toggle="pill"
                      href="#ingresso"
                      role="tab"
                      aria-controls="ingresso"
                    >
                      Como ingressar
                    </a>
                  </li>

                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="auxilios-tab"
                      data-toggle="pill"
                      href="#auxilios"
                      role="tab"
                      aria-controls="auxilios"
                    >
                      Auxílios
                    </a>
                  </li>

                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="saocarlos-tab"
                      data-toggle="pill"
                      href="#saocarlos"
                      role="tab"
                      aria-controls="saocarlos"
                    >
                      Sobre São Carlos
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col">
              <div class="tab-content" id="conteudo_area">
                <div
                  class="tab-pane fade show active"
                  id="motivacao"
                  role="tabpanel"
                  aria-labelledby="motivacao-tab"
                >
                  <h1>Motivação para Estudar na UFSCar</h1>
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
                    Fusce hendrerit sed dolor eget laoreet. Nunc auctor, eros
                    sit amet sagittis dictum, libero purus tincidunt mi, aliquet
                    faucibus ante dolor sed leo. Phasellus imperdiet urna a nisi
                    mollis, eget condimentum nulla fermentum.
                  </p>
                  <p>
                    Cras porttitor dolor vel nunc pulvinar, ut malesuada nisl
                    placerat. Nunc sit amet lectus vel felis egestas vehicula
                    sed et neque. Donec at ultrices nunc. Curabitur nec lacinia
                    diam, vel ornare nisi. Curabitur maximus varius ante. Ut a
                    porta lectus. Nam tristique neque semper, viverra elit quis,
                    dapibus sem. Aliquam congue, elit eget viverra condimentum,
                    nunc sapien fringilla elit, nec auctor nibh diam ut quam.
                    Morbi posuere rhoncus euismod. Sed varius elit sit amet
                    aliquam ornare. Vestibulum vitae tellus mi. Mauris velit
                    ligula, venenatis vitae ipsum non, maximus viverra sapien.
                  </p>
                  <p>
                    Cras porttitor dolor vel nunc pulvinar, ut malesuada nisl
                    placerat. Nunc sit amet lectus vel felis egestas vehicula
                    sed et neque. Donec at ultrices nunc. Curabitur nec lacinia
                    diam, vel ornare nisi. Curabitur maximus varius ante. Ut a
                    porta lectus. Nam tristique neque semper, viverra elit quis,
                    dapibus sem. Aliquam congue, elit eget viverra condimentum,
                    nunc sapien fringilla elit, nec auctor nibh diam ut quam.
                    Morbi posuere rhoncus euismod. Sed varius elit sit amet
                    aliquam ornare. Vestibulum vitae tellus mi. Mauris velit
                    ligula, venenatis vitae ipsum non, maximus viverra sapien.
                  </p>
                </div>

                <div
                  class="tab-pane fade"
                  id="ingresso"
                  role="tabpanel"
                  aria-labelledby="ingresso-tab"
                >
                  <h1>Como Ingressar?</h1>
                  <hr />
                  <p>
                    Cras porttitor dolor vel nunc pulvinar, ut malesuada nisl
                    placerat. Nunc sit amet lectus vel felis egestas vehicula
                    sed et neque. Donec at ultrices nunc. Curabitur nec lacinia
                    diam, vel ornare nisi. Curabitur maximus varius ante. Ut a
                    porta lectus. Nam tristique neque semper, viverra elit quis,
                    dapibus sem. Aliquam congue, elit eget viverra condimentum,
                    nunc sapien fringilla elit, nec auctor nibh diam ut quam.
                    Morbi posuere rhoncus euismod. Sed varius elit sit amet
                    aliquam ornare. Vestibulum vitae tellus mi. Mauris velit
                    ligula, venenatis vitae ipsum non, maximus viverra sapien.
                  </p>
                </div>

                <div
                  class="tab-pane fade"
                  id="auxilios"
                  role="tabpanel"
                  aria-labelledby="auxilios-tab"
                >
                  <h1>Auxílios Permanência</h1>
                  <hr />
                  <p>
                    Cras porttitor dolor vel nunc pulvinar, ut malesuada nisl
                    placerat. Nunc sit amet lectus vel felis egestas vehicula
                    sed et neque. Donec at ultrices nunc. Curabitur nec lacinia
                    diam, vel ornare nisi. Curabitur maximus varius ante. Ut a
                    porta lectus. Nam tristique neque semper, viverra elit quis,
                    dapibus sem. Aliquam congue, elit eget viverra condimentum,
                    nunc sapien fringilla elit, nec auctor nibh diam ut quam.
                    Morbi posuere rhoncus euismod. Sed varius elit sit amet
                    aliquam ornare. Vestibulum vitae tellus mi. Mauris velit
                    ligula, venenatis vitae ipsum non, maximus viverra sapien.
                  </p>
                </div>

                <div
                  class="tab-pane fade"
                  id="saocarlos"
                  role="tabpanel"
                  aria-labelledby="saocarlos"
                >
                  <h1>Sobre São Carlos</h1>
                  <hr />
                  <p>
                    Cras porttitor dolor vel nunc pulvinar, ut malesuada nisl
                    placerat. Nunc sit amet lectus vel felis egestas vehicula
                    sed et neque. Donec at ultrices nunc. Curabitur nec lacinia
                    diam, vel ornare nisi. Curabitur maximus varius ante. Ut a
                    porta lectus. Nam tristique neque semper, viverra elit quis,
                    dapibus sem. Aliquam congue, elit eget viverra condimentum,
                    nunc sapien fringilla elit, nec auctor nibh diam ut quam.
                    Morbi posuere rhoncus euismod. Sed varius elit sit amet
                    aliquam ornare. Vestibulum vitae tellus mi. Mauris velit
                    ligula, venenatis vitae ipsum non, maximus viverra sapien.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AreaVisitante;
