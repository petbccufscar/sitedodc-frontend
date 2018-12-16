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
      panelId: "apresentacao",
      title: "Apresentação",
      header: "",
      showHeader: false
    },
    content: {
      title: "Apresentação",
      body: placeholder
    }
  },
  {
    props: {
      panelId: "historico",
      title: "Histórico",
      header: "",
      showHeader: false
    },
    content: {
      title: "Histórico",
      body: placeholder2
    }
  },
  {
    props: {
      panelId: "perfil",
      title: "Perfil do Profissional",
      header: "",
      showHeader: false
    },
    content: {
      title: "Perfil do Profissional",
      body: placeholder
    }
  },
  {
    props: {
      panelId: "distribuicao_disciplinas",
      title: "Distribuição de Disciplinas",
      header: "",
      showHeader: false
    },
    content: {
      title: "Distribuição de Disciplinas",
      body: placeholder2
    }
  },
  {
    props: {
      panelId: "estagio",
      title: "Estágio",
      header: "",
      showHeader: false
    },
    content: {
      title: "Estágio",
      body: placeholder
    }
  },
  {
    props: {
      panelId: "objetivos",
      title: "Objetivos do Curso",
      header: "",
      showHeader: false
    },
    content: {
      title: "Objetivos do Curso",
      body: placeholder2
    }
  },
  {
    props: {
      panelId: "infraestrutura",
      title: "Infraestrutura",
      header: "",
      showHeader: false
    },
    content: {
      title: "Infraestrutura",
      body: placeholder
    }
  },
  {
    props: {
      panelId: "bolsas-auxilios",
      title: "Bolsas e auxílios",
      header: "",
      showHeader: false
    },
    content: {
      title: "Bolsas e auxílios",
      body: placeholder2
    }
  }
];

class ENC extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb endereco="/graduacao">Graduação</Breadcrumb>

          <Breadcrumb bold>Engenharia da computação</Breadcrumb>
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

export default ENC;
