import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import Labs from "../../images/print-lab.png";
import {
  VTab,
  SideMenu,
  TabPanelContainer,
  VerticalTabs,
} from "../../components/vertical-tabs";

import { placeholder, placeholder2 } from "../../components/placeholders";
import { TabPanel } from "react-web-tabs";
import ResearchersCard from "./components/researchersCard";

const tabs = [
  {
    props: {
      panelId: "grupo-Asgard",
      title: "Asgard",
      header: "Grupos de pesquisa",
      showHeader: true,
    },
    content: {
      title: "Asgard - Above cloud computing",
      body: "Qualquer coisa",
      researchLine: [
        'a',
        'b',
        'c',
        'd',
        'e'
      ],
      researchers: [
        {
          nome: 'Dr. César Augusto Cavalheiro Marcondes',
          funcao: 'Professor Adjunto',
          email: 'marcondes@dc.ufscar.br',
          homePageLink: 'https://about.me/cesarmarcondes',
          curriculumLink: 'lala'
        },
        {
          nome: 'Dr. Hermes Senger',
          funcao: 'Professor Adjunto',
          email: 'hermes@dc.ufscar.br',
          homePageLink: 'nda',
          curriculumLink: 'nda'
        },
        {
          nome: 'Álvaro Shiokawa Alvarez',
          funcao: 'Mestrando em Ciência da Computação, área de Redes de Computadores',
          email: 'alvaro@comp.ufscar.br',
          homePageLink: 'nda',
          curriculumLink: 'nda'
        }
      ],
      externalLinks: 'links do site de pesquisa ...'
    },
  }
];

class Laboratorios extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Laboratórios</Breadcrumb>
        </Breadcrumbs>

        <VerticalTabs>
          <SideMenu defaultTab={tabs[0].props.panelId}>
            {tabs.map((tab, index) => {
              return (
                <VTab key={"t_" + index} {...tab.props}>
                  {tab.props.title}
                </VTab>
              );
            })}
          </SideMenu>
          <TabPanelContainer>
            {tabs.map((tab, index) => {
              return (
                <TabPanel key={"p_" + index} tabId={tab.props.panelId}>
                  <h3>{tab.content.title}</h3>
                  <hr />
                  {tab.content.body}
                  <hr />
                  <h3> Áreas de pesquisa</h3>
                  <ul>
                    {tab.content.researchLine.map( research => <li> { research } </li>)}
                  </ul>
                  <hr />
                  <h3> Pesquisadores </h3>
                  <br />
                  { tab.content.researchers.map( researcher => <ResearchersCard nome={ researcher.nome } funcao={ researcher.funcao } email={ researcher.email }/> )}
                </TabPanel>
              );
            })}
          </TabPanelContainer>
        </VerticalTabs>
      </React.Fragment>
    );
  }
}

export default Laboratorios;
