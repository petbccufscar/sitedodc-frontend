import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ofertas = (
  <React.Fragment>
    <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="heading-primeiras-disciplinas">
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#primeiras-disciplinas"
              aria-expanded="false"
              aria-controls="primeiras-disciplinas"
            >
              Primeiras Disciplinas
            </button>
          </h5>
        </div>

        <div
          id="primeiras-disciplinas"
          class="collapse"
          aria-labelledby="primeiras-disciplinas"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <ul>
              <li>Introdução a Computação</li>
              <li>Introdução ao Pensamento Algorítmico</li>
              <li>Construção de Algorítmos e Programação</li>
              <li>Lógica Digital</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="heading-bcc">
          <h5 class="mb-0">
            <button
              class="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#bcc"
              aria-expanded="false"
              aria-controls="bcc"
            >
              Bacharelado em Ciência da Computação
            </button>
          </h5>
        </div>
        <div
          id="bcc"
          class="collapse"
          aria-labelledby="heading-bcc"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <p>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </p>
            <a href="http://bcc.dc.ufscar.br/">
              <FontAwesomeIcon
                icon="globe-americas"
                className="d-inline-block mr-2"
              />
              Visitar Site
            </a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="heading-enc">
          <h5 class="mb-0">
            <button
              class="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#enc"
              aria-expanded="false"
              aria-controls="enc"
            >
              Engenharia da Computação
            </button>
          </h5>
        </div>
        <div
          id="enc"
          class="collapse"
          aria-labelledby="heading-enc"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <p>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </p>
            <a href="http://enc.dc.ufscar.br/">
              <FontAwesomeIcon
                icon="globe-americas"
                className="d-inline-block mr-2"
              />
              Visitar Site
            </a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="heading-bsi">
          <h5 class="mb-0">
            <button
              class="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#bsi"
              aria-expanded="false"
              aria-controls="bsi"
            >
              Bacharelado em Sistemas de Informação
            </button>
          </h5>
        </div>
        <div
          id="bsi"
          class="collapse"
          aria-labelledby="heading-bsi"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <p>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="heading-outros">
          <h5 class="mb-0">
            <button
              class="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#outros"
              aria-expanded="false"
              aria-controls="outros"
            >
              Outros Cursos
            </button>
          </h5>
        </div>
        <div
          id="outros"
          class="collapse"
          aria-labelledby="heading-outros"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <p>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </p>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Ofertas;
