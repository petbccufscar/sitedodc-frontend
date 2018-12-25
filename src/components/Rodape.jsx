import React, { Component } from "react";
class Rodape extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <footer id="rodape" className="footer  mt-5">
        <div className="container py-5   text-dark text-center text-md-left">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <h6 className="text-uppercase font-weight-bold">
                Departamento de Computação <small>UFSCar</small>
              </h6>

              <hr className="mb-2 mt-0" />
              <ul className="list-unstyled">
                <li>Universidade Federal de São Carlos</li>
                <li>Rod. Washington Luís, km 235 - Jardim Guanabara</li>
                <li>Caixa Postal 676</li>
                <li>CEP: 13565-905 - São Carlos/SP</li>
                <li>E-mail: dc@ufscar.br</li>
                <li>Telefone: +55 16 3351-8232</li>
                <li>Fax: +55 16 3351-8233</li>
                <li>
                  Contato: <a href="/contato">clique aqui</a>
                </li>
              </ul>
            </div>

            <div className="col-md-8">
              <iframe
                title="Iframe do Google Maps"
                height="220px"
                width="100%"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.8238490302215!2d-47.88273818439348!3d-21.979722710974197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8711e42fdad05%3A0x6a0cd2ccbce13d28!2sDepartamento+de+Computa%C3%A7%C3%A3o%2C+Universidade+Federal+de+S%C3%A3o+Carlos!5e0!3m2!1sen!2sus!4v1480425559308"
                frameBorder="0"
              />
            </div>
          </div>
        </div>

        <div className="footer-copyright py-3  bg-dark text-light text-center">
          © 2018 Departamento de Computação - UFSCar. Todos os direitos
          reservados.
        </div>
      </footer>
    );
  }
}

export default Rodape;
