import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb";

class AreaAluno extends Component {
  render() {
    return (
      <main role="main" id="conteudo" class="container mt-5">
        <Breadcrumb path={this.props.location.pathname} />
        <h1 class="display-6">Área do Aluno</h1>

        <div class="row mt-4">
          <div class="col-md-3 col-lg-3 col-xl-2" id="menu_area">
            <div
              class="border-right pr-2"
              id="menu_area"
              data-toggle="affix"
              data-parent="main"
              data-offset="75"
            >
              <ul class="nav nav-pills flex-column border p-2" role="tablist">
                <h6 class="border-bottom p-2">Graduação</h6>

                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="graduacao-home-tab"
                    data-toggle="pill"
                    href="#graduacao-home"
                    role="tab"
                    aria-controls="home-graduacao"
                    aria-selected="true"
                  >
                    Home
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="graduacao-suporte-tab"
                    data-toggle="pill"
                    href="#graduacao-suporte"
                    role="tab"
                    aria-controls="suporte-graduacao"
                    aria-selected="true"
                  >
                    Suporte
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="graduacao-dist-disciplina-tab"
                    data-toggle="pill"
                    href="#graduacao-dist-disciplinas"
                    role="tab"
                    aria-controls="distribuicao-disciplinas-"
                  >
                    Distribuição de Disciplinas
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="graduacao-estagio-tab"
                    data-toggle="pill"
                    href="#graduacao-estagio"
                    role="tab"
                    aria-controls="estagio-graduacao"
                  >
                    Estágio
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="graduacao-documentos-tab"
                    data-toggle="pill"
                    href="#graduacao-documentos"
                    role="tab"
                    aria-controls="documentos"
                  >
                    Documentos
                  </a>
                </li>

                <h6 class="border-bottom p-2">Pós-Graduação</h6>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="pos-graduacao-home-tab"
                    data-toggle="pill"
                    href="#pos-graduacao-home"
                    role="tab"
                    aria-controls="home-pos-graduacao"
                  >
                    Home
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="pos-graduacao-documentos-tab"
                    data-toggle="pill"
                    href="#pos-graduacao-documentos"
                    role="tab"
                    aria-controls="documentos-pos-graduacao"
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
                id="graduacao-home"
                role="tabpanel"
                aria-labelledby="graduacao-home-tab"
              >
                <h1>Home</h1>
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
                <p>
                  Cras porttitor dolor vel nunc pulvinar, ut malesuada nisl
                  placerat. Nunc sit amet lectus vel felis egestas vehicula sed
                  et neque. Donec at ultrices nunc. Curabitur nec lacinia diam,
                  vel ornare nisi. Curabitur maximus varius ante. Ut a porta
                  lectus. Nam tristique neque semper, viverra elit quis, dapibus
                  sem. Aliquam congue, elit eget viverra condimentum, nunc
                  sapien fringilla elit, nec auctor nibh diam ut quam. Morbi
                  posuere rhoncus euismod. Sed varius elit sit amet aliquam
                  ornare. Vestibulum vitae tellus mi. Mauris velit ligula,
                  venenatis vitae ipsum non, maximus viverra sapien.
                </p>
                <p>
                  Cras porttitor dolor vel nunc pulvinar, ut malesuada nisl
                  placerat. Nunc sit amet lectus vel felis egestas vehicula sed
                  et neque. Donec at ultrices nunc. Curabitur nec lacinia diam,
                  vel ornare nisi. Curabitur maximus varius ante. Ut a porta
                  lectus. Nam tristique neque semper, viverra elit quis, dapibus
                  sem. Aliquam congue, elit eget viverra condimentum, nunc
                  sapien fringilla elit, nec auctor nibh diam ut quam. Morbi
                  posuere rhoncus euismod. Sed varius elit sit amet aliquam
                  ornare. Vestibulum vitae tellus mi. Mauris velit ligula,
                  venenatis vitae ipsum non, maximus viverra sapien.
                </p>
              </div>

              <div
                class="tab-pane fade"
                id="graduacao-suporte"
                role="tabpanel"
                aria-labelledby="graduacao-suporte-tab"
              >
                <h1>Suporte</h1>
                <hr />
              </div>

              <div
                class="tab-pane fade"
                id="graduacao-estagio"
                role="tabpanel"
                aria-labelledby="graduacao-estagio-tab"
              >
                <h1>Distribuição de Disciplinas</h1>
                <hr />
              </div>

              <div
                class="tab-pane fade"
                id="graduacao-dist-disciplinas"
                role="tabpanel"
                aria-labelledby="graduacao-dist-disciplina-tab"
              >
                <h1>Estágio</h1>
                <hr />
              </div>

              <div
                class="tab-pane fade"
                id="graduacao-documentos"
                role="tabpanel"
                aria-labelledby="graduacao-documentos-tab"
              >
                <h1>Documentos</h1>
                <hr />
              </div>

              <div
                class="tab-pane fade"
                id="pos-graduacao-home"
                role="tabpanel"
                aria-labelledby="pos-graduacao-home-tab"
              >
                <h1>Home</h1>
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
                id="pos-graduacao-documentos"
                role="tabpanel"
                aria-labelledby="pos-graduacao-documentos-tab"
              >
                <h1>Documentos</h1>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default AreaAluno;
