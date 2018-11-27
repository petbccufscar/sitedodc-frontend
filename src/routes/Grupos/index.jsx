import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import Grupo from "./components/Grupo";

// TODO: pegar da api
class Grupos extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Alunos em ação</Breadcrumb>
        </Breadcrumbs>
        <div className="container">
            <Grupo titulo="PET-BCC"
                descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis leo tellus, in elementum felis pretium volutpat.
                Quisque eget malesuada nibh. Integer at justo sit amet ligula sollicitudin dapibus. Aenean varius eu ex sed tempus.
                In sollicitudin sit amet velit."
                link="https://petbcc.secompufscar.com.br/"
                foto="https://petbcc.secompufscar.com.br/static/site2016/images/equipe.jpg"/>

            <div class="row border-bottom mt-3"></div>

            <Grupo titulo="SECOMP"
                descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis leo tellus, in elementum felis pretium volutpat.
                Quisque eget malesuada nibh. Integer at justo sit amet ligula sollicitudin dapibus. Aenean varius eu ex sed tempus.
                In sollicitudin sit amet velit."
                link="https://secompufscar.com.br/"
                foto="https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/22728645_10156775249124196_3639172201758646992_n.jpg?_nc_cat=107&oh=28608feab4b036f7f4ace5d4066fa82a&oe=5C89B427"/>

            <div class="row border-bottom mt-3"></div>    

            <Grupo titulo="CATI Jr"
                descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis leo tellus, in elementum felis pretium volutpat.
                Quisque eget malesuada nibh. Integer at justo sit amet ligula sollicitudin dapibus. Aenean varius eu ex sed tempus.
                In sollicitudin sit amet velit."
                link="http://www.catijr.com.br"
                foto="http://www.catijr.com.br/wp-content/uploads/2017/06/catitodoslindosefederados-1024x576.jpg"/>

            <div class="row border-bottom mt-3"></div>    

            <Grupo titulo="PyLadies"
                descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis leo tellus, in elementum felis pretium volutpat.
                Quisque eget malesuada nibh. Integer at justo sit amet ligula sollicitudin dapibus. Aenean varius eu ex sed tempus.
                In sollicitudin sit amet velit."
                link="http://saocarlos.pyladies.com/"
                foto="https://pbs.twimg.com/profile_images/590334811560091648/ZqUGyjIv_400x400.png"/>

        </div>
          
      </React.Fragment>
    );
  }
}

export default Grupos;
