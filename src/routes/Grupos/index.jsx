import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import Team from "./components/Team";

const descriptionPlaceholder = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis leo tellus, in elementum felis pretium volutpat.
Quisque eget malesuada nibh. Integer at justo sit amet ligula sollicitudin dapibus. Aenean varius eu ex sed tempus.
In sollicitudin sit amet velit.`;

const placeholder = [
  {
    title: "PET-BCC",
    description: descriptionPlaceholder,
    link: "https://petbcc.secompufscar.com.br/",
    img: {
      title: "",
      src:
        "https://petbcc.secompufscar.com.br/static/site2016/images/equipe.jpg",
      alt: ""
    }
  },
  {
    title: "SECOMP",
    description: descriptionPlaceholder,
    link: "https://secompufscar.com.br/",
    img: {
      title: "",
      src:
        "https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/22728645_10156775249124196_3639172201758646992_n.jpg?_nc_cat=107&oh=28608feab4b036f7f4ace5d4066fa82a&oe=5C89B427",
      alt: ""
    }
  },
  {
    title: "CATI Jr",
    description: descriptionPlaceholder,
    link: "http://www.catijr.com.br",
    img: {
      title: "",
      src:
        "http://www.catijr.com.br/wp-content/uploads/2017/06/catitodoslindosefederados-1024x576.jpg",
      alt: ""
    }
  },
  {
    title: "PyLadies",
    description: descriptionPlaceholder,
    link: "http://saocarlos.pyladies.com/",
    img: {
      title: "",
      src:
        "https://pbs.twimg.com/profile_images/590334811560091648/ZqUGyjIv_400x400.png",
      alt: ""
    }
  }
];

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
          {placeholder.map((grupo, index) => (
            <React.Fragment>
              <Team
                title={grupo.title}
                description={grupo.description}
                link={grupo.link}
                img={grupo.img}
              />

              {index !== placeholder.length && (
                <div className="row border-bottom mt-3" />
              )}
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Grupos;
