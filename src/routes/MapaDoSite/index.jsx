import React from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";

const mapa = [
  {
    header: <h4>Início</h4>,
    items: [
      { title: "Área do Aluno", href: "/area-aluno" },
      { title: "Área do Visitante", href: "/area-visitante" },
      { title: "Área do Docente", href: "/area-docente" },
      { title: "Notícias", href: "/mais-noticias" },
      { title: "Eventos", href: "" },
    ],
  },
  {
    header: (
      <React.Fragment>
        <h4>Ensino</h4>
        <h5>Graduação</h5>
      </React.Fragment>
    ),
    items: [
      { title: "Ciência da Computação", href: "/graduacao/bcc" },
      { title: "Engenharia da Computação", href: "/graduacao/enc" },
      { title: "Sistemas de Informação", href: "/graduacao/si" },
      { title: "Estágio", href: "/graduacao/estagio" },
      { title: "Alunos externos", href: "/graduacao/alunos-externos" },
      { title: "TCC", href: "/graduacao/tcc" },
    ],
  },
  {
    header: <h5>Pós Graduação</h5>,
    items: [
      { title: "Stricto Sensu", href: "/pos-graduacao/stricto-sensu" },
      { title: "Lato Sensu", href: "/pos-graduacao/lato-sensu" },
    ],
  },
  {
    header: <h4>Pesquisa</h4>,
    items: [
      { title: "Catálogo", href: "/catalogo" },
      { title: "Laboratórios", href: "/laboratorios" },
    ],
  },
  {
    header: <h4>Extensão</h4>,
    items: [
      { title: "Alunos em ação", href: "alunos-em-acao" },
      { title: "Projetos e ações", href: "projetos-e-acoes" },
    ],
  },
  {
    header: <h4>Pessoas</h4>,
    items: [
      { title: "Alunos", href: "/alunos" },
      { title: "Docentes", href: "/docentes" },
      { title: "Técnico-administrativos", href: "/tecnicos-administrativos" },
    ],
  },
  {
    header: <h4>Institucional</h4>,
    items: [
      { title: "Sobre", href: "/sobre" },
      { title: "Linha do Tempo", href: "/linha-do-tempo" },
      { title: "Infraestrutura", href: "/infraestrutura" },
      { title: "Contato", href: "/contato" },
    ],
  },
  {
    header: <h4>Suporte</h4>,
    items: [
      { title: "Links úteis", href: "/suporte/links" },
      { title: "Reportar problemas", href: "/suporte/reportar" },
    ],
  },
];

const MapaDoSite = () => {
  return (
    <React.Fragment>
      <Breadcrumbs>
        <Breadcrumb endereco="/">Início</Breadcrumb>
        <Breadcrumb bold>Mapa do Site</Breadcrumb>
      </Breadcrumbs>
      <div className="container">
        <div className=" mt-5" id="conteudo">
          <h3>Mapa do Site</h3>
          <hr />
          {mapa.map((section, index) => (
            <React.Fragment key={`section_${index}`}>
              {section.header}
              <ul>
                {section.items.map((item, index) => (
                  <li key={`item_${index}`}>
                    <Link to={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MapaDoSite;
