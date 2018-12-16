import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import {
  VTab,
  SideMenu,
  TabPanelContainer,
  VerticalTabs
} from "../../components/vertical-tabs";
import { TabPanel } from "react-web-tabs";

import { placeholder, placeholder2 } from "../../components/placeholders";

const tabs = [
  {
    props: {
      panelId: "graduacao-home",
      title: "Home",
      header: "Graduação",
      showHeader: true
    },
    content: {
      title: "Home",
      body: placeholder
    }
  },
  {
    props: {
      panelId: "graduacao-suport",
      title: "Suporte",
      header: "Graduação",
      showHeader: false
    },
    content: {
      title: "Suporte",
      body: placeholder2
    }
  },
  {
    props: {
      panelId: "graduacao-dist-disciplina",
      title: "Distribuição de Disciplinas",
      header: "Graduação",
      showHeader: false
    },
    content: {
      title: "Distribuição de Disciplinas",
      body: placeholder
    }
  },
  {
    props: {
      panelId: "graduacao-estagio",
      title: "Estágio",
      header: "Graduação",
      showHeader: false
    },
    content: {
      title: "Estágio",
      body: placeholder2
    }
  },
  {
    props: {
      panelId: "graduacao-documentos",
      title: "Documentos",
      header: "Graduação",
      showHeader: false
    },
    content: {
      title: "Documentos",
      body: placeholder
    }
  },
  {
    props: {
      panelId: "pos-graduacao-home",
      title: "Home",
      header: "Pós-graduação",
      showHeader: true
    },
    content: {
      title: "Home",
      body: placeholder2
    }
  },
  {
    props: {
      panelId: "pos-graduacao-documentos",
      title: "Documentos",
      header: "Pós-graduação",
      showHeader: false
    },
    content: {
      title: "Documentos",
      body: placeholder
    }
  }
];

class AreaAluno extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Área do aluno</Breadcrumb>
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
                  <h4>{tab.content.title}</h4>
                  <hr />
                  {tab.content.body}
                </TabPanel>
              );
            })}
          </TabPanelContainer>
        </VerticalTabs>
      </React.Fragment>
    );
  }
}

export default AreaAluno;
