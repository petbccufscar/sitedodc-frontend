import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import { ImageLoader } from "../../components/image-loader";

class Infraestrutura extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Infraestrutura</Breadcrumb>
        </Breadcrumbs>

        <div className="container">
          <h1>Infraestrutura</h1>
          <hr />
          <h3 className="mt-4">Chefia</h3>
          <ul class="list-unstyled">
            <li>Vânia Paula de Almeida Neris</li>
            <li>Valter Vieira de Camargo</li>
          </ul>
          <h3 className="mt-4">Tecnologia</h3>
          <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptas sapiente modi odio deleniti, fuga veniam nobis explicabo aperiam animi id perferendis cumque eaque quae vitae impedit quod voluptatem est.
                Lorem, ipsum dolor sit amet consectetur asipisicing elit. Optio repudiandae doloribus, porro, ea quod ratione quas iusto accusamus consequatur nisi fuga nesciunt tempora distinctio voluptates possimus maiores blanditiis. Ducimus, voluptatum!
              </p>
          <div className="row">
            <div className="col-md-auto m-3 text-center align-self-center">
              <ImageLoader
                src="https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/22366780_10156728442849196_8442054594264435074_n.jpg?_nc_cat=101&_nc_ht=scontent-gru2-1.xx&oh=bb3d10fbdaaa2083dd361ba284084cbb&oe=5C974645"
                loaderHeight="153px"
                loaderWidth="271px"
                height="180px"
                width="300px"
                alt="Computador de um laboratório do departamento"
              />
            </div>
            <div className="col align-self-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam delectus recusandae possimus fuga animi, iure magnam quasi consequuntur at? Eius facilis tenetur architecto. Dignissimos libero sint laudantium quidem aut?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptas error cum quod expedita veritatis aliquid! Dolor eum distinctio, commodi sequi eos sit itaque blanditiis porro. Quaerat accusantium illo ducimus?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, quod? Reprehenderit magni quia, quo magnam beatae nostrum ipsum accusamus dolorum mollitia labore ullam, voluptates commodi, vel atque iure nesciunt? Voluptas.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Infraestrutura;
