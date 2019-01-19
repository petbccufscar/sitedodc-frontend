import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import {AlunoCard,
  AlunosContainer,
  AlunoCardImage,
  AlunoCardBody,
} from "./components/aluno_card";

const placeholder = [
  {
    nome: "João Pedro Silva",
    foto:
      "https://media.licdn.com/dms/image/C4D03AQHbCeoAB_V90Q/profile-displayphoto-shrink_800_800/0?e=1548288000&v=beta&t=u2-VmC999jl8VXBnLA1cScTN5jFFHj3ps0Bo49wbHJ0",
  },
  {
    nome: "Rene Ferrante Neto",
    foto:
      "https://media.licdn.com/dms/image/C4D03AQFhksJqcrVC7g/profile-displayphoto-shrink_800_800/0?e=1548288000&v=beta&t=q-12MDh4nlfaLlO_4esIbj2YX2BS5-SDdAmmRlyDdUA",
  },
  {
    nome: "Alcides Mignoso e Silva",
    foto:
      "https://media.licdn.com/dms/image/C4E03AQFYxMpy88VG8Q/profile-displayphoto-shrink_800_800/0?e=1548288000&v=beta&t=GMa2BsedHExMhMbxSCXNAy4ZuO9Ak5HVsbeySMT9IAk",
  },
  {
    nome: "Nome Do Aluno",
    foto: "",
  },
  {
    nome: "Daniel Lucio Masselani de Moura",
    foto:
      "https://avatars3.githubusercontent.com/u/26843282?s=400&u=ba4dd1dfbb265deacb1dbcf6223236d0f03ecf56&v=4",
  },
  {
    nome: "Nome Do Aluno",
    foto: "",
  },
  {
    nome: "Nome Do Aluno",
    foto: "",
  },
  {
    nome: "Nome Do Aluno",
    foto: "",
  },
  {
    nome: "Nome Do Aluno",
    foto: "",
  },
  {
    nome: "Nome Do Aluno",
    foto: "",
  },
  {
    nome: "Nome Do Aluno",
    foto: "",
  },
  {
    nome: "Nome Do Aluno",
    foto: "",
  },
  {
    nome: "Nome Do Aluno",
    foto: "",
  },
];

class Alunos extends Component {
  render() {
    let path = window.location.pathname;
    let curso = path.substring(8, 11).toUpperCase();
    let ano = path.substring(12);
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb endereco="/alunos">Alunos</Breadcrumb>
          <Breadcrumb bold>
            {curso} {ano}
          </Breadcrumb>
        </Breadcrumbs>

        <div className="container">
          <AlunosContainer>
            {placeholder.map(aluno => {
              return (
                <AlunoCard>
                  <AlunoCardImage foto={aluno.foto} />
                  <AlunoCardBody nome={aluno.nome} />
                </AlunoCard>
              );
            })}
          </AlunosContainer>
        </div>
      </React.Fragment>
    );
  }
}

export default Alunos;
