import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import Labs from "../../images/print-lab.png";
import {
  VTab,
  SideMenu,
  TabPanelContainer,
  VerticalTabs,
} from "../../components/vertical-tabs";

import { TabPanel } from "react-web-tabs";
import LabsContent from "./components/labsContent";

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
      body: (
        <div className="container-fluid">
          <h4 className="text-muted">Sobre nós</h4>
          <br />
          <p>O laboratório ASGARD foi criado em 2012, situado na Universidade Federal de São Carlos (UFSCar), no Departamento de Computação (DC), sendo dirigido pelos professores César Marcondes e Hermes Senger.</p>
          <p>Em nosso laboratório trabalhamos com redes de computadores (Em específico, Internet do futuro) e sistemas distribuídos.</p>
          <p>E temos uma cafeteira própria ;D!</p>
        </div>
      ),
      researchLine: [
        'Controle de congestionamento avançado (TCP)',
        'Inteligência artificial aplicada a redes',
        'Estimativas de características na Internet',
        'Desenvolvimento de projetos de rede em hardware reconfigurável',
        'Sistemas embarcados críticos',
        'Software Defined Radio (SDR)',
        'Software Defined Networks (SDN)',
        'Sistemas de Alto Desempenho e Bioinformática.',
        'Computação paralela e distribuída',
        'Computação de alto desempenho (Clusters, grades e clouds computacionais)',
        'Avaliação de desempenho',
        'Escalonamento',
        'Tolerância a falhas',
        'Segurança',
        'Infraestrutura computacional',
        'Big Data',
        'Aplicações para e-Ciência'
      ],
      researchers: [
        {
          nome: 'Dr. César Augusto Cavalheiro Marcondes',
          funcao: 'Professor Adjunto',
          email: 'marcondes@dc.ufscar.br',
          homePageLink: 'https://about.me/cesarmarcondes',
          curriculumLink: 'nda'
        },
        {
          nome: 'Dr. Hermes Senger',
          funcao: 'Professor Adjunto',
          email: 'hermes@dc.ufscar.br',
          homePageLink: 'nda',
          curriculumLink: 'nda'
        }
      ],
      externalLinks: 'links do site de pesquisa ...'
    }
  },
  {
    props: {
      panelId: "grupo-BIPG ",
      title: "BIPG ",
      header: "Grupos de pesquisa",
      showHeader: false,
    },
    content: {
      title: "BIPG - Biomedical Image Processing Group ",
      body: (
        <div className="container-fluid">
          <h4 className="text-muted">Welcome to the Biomedical Image Processing (BIP) Group</h4>
          <br />
          <p>Founded in 2011 by professor Ricardo J. Ferrari, Ph.D. with the goal of developing practical and efficient solutions to significant problems in the biomedical field, the BIPGroup researches image and video processing, computer vision, machine learning, and pattern recognition techniques.</p>
          <p>Primary applications are in segmentation and analysis of 3D magnetic resonance (MR) brain images of neurodegenerative diseases (such as Alzheimer's, Parkinson´s and Multiple Sclerosis diseases), dynamic analysis of cells in in-vivo studies using intravital microscopy, and quantification of abdominal and thighs adipose tissues in CT images among others.</p>
          <p>... ... ... Retirado do site deles (Exemplo)</p>
        </div>
      ),
      researchLine: [
        'Biomedical Image',
        'Video Processing',
        'Computer Vision',
        'Machine Learning',
        'Pattern Recognition'
      ],
      researchers: [
        {
          nome: 'Ricardo José Ferrari',
          funcao: 'Professor Adjunto',
          email: 'rferrari@dc.ufscar.br',
          homePageLink: 'nda',
          curriculumLink: 'nda'
        }
      ],
      externalLinks: 'links do site de pesquisa ...'
    }
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
                  <LabsContent tabContent={ tab.content } />
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
