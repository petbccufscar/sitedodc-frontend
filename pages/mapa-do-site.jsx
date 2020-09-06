import React from "react";
import { Breadcrumbs, Breadcrumb } from "../components/Breadcrumbs";
import Link  from "next/link";

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
    header: <h4>Ensino</h4>,
    items: [
      { title: "Graduação", href: "/graduacao" },
      { title: "Pós-graduação", href: "/pos-graduacao" },
    ],
  },
  {
    header: <h4>Pesquisa</h4>,
    items: [
      { title: "Laboratórios", href: "/laboratorios" },
    ],
  },
  {
    header: <h4>Extensão</h4>,
    items: [
      { title: "Alunos em ação", href: "/alunos-em-acao" },
    ],
  },
  {
    header: <h4>Pessoas</h4>,
    items: [
      { title: "Alunos", href: "/alunos" },
      { title: "Docentes", href: "/docentes" },
      { title: "Técnico-administrativos", href: "/tecnicos-administrativos" },
      { title: "Ex-colaboradores", href: "/ex-colaboradores" },
    ],
  },
  {
    header: <h4>Institucional</h4>,
    items: [
      { title: "Institucional", href: "/institucional" },
    ],
  },
  {
    header: <h4>Suporte</h4>,
    items: [
      { title: "Links úteis", href: "/suporte/links" },
      { title: "Reportar problemas", href: "/suporte/reportar" },
    ],
  },
  {
    header: <div> <h4>Link Externo</h4> <ul><li><a href="http://www.dc.ufscar.br/suporte" target="blank">Página do site do suporte</a></li></ul></div>,
    items: [],
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
                    <Link href={item.href}>{item.title}</Link>
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
