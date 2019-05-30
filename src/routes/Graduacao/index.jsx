import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import {
  VTab,
  SideMenu,
  TabPanelContainer,
  VerticalTabs,
} from "../../components/vertical-tabs";
import { TabPanel } from "react-web-tabs";

import { placeholder, placeholder2 } from "../../components/placeholders";
import ofertas from "./components/Ofertas";

const tabs = [
  {
    props: {
      panelId: "ofertas",
      title: "Ofertas de Disciplinas",
      header: "",
      showHeader: false,
    },
    content: {
      title: "Ofertas de Disciplinas",
      body: ofertas, 
    }
  },
  {
    props: {
      panelId: "alunos-especiais",
      title: "Alunos Especiais",
      header: "",
      showHeader: false,
    },
    content: {
      title: "Alunos Especiais",
      body: placeholder, 
    }
  },
  {
    props: {
      panelId: "estagios",
      title: "Estágios",
      header: "",
      showHeader: false,
    },
    content: {
      title: "Estágios",
      body: placeholder, 
    }
  },
  {
    props: {
      panelId: "tcc",
      title: "TCC",
      header: "",
      showHeader: false,
    },
    content: {
      title: "TCC",
      body: placeholder, 
    }
  }
]

class Graduacao extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Graduação</Breadcrumb>
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

export default Graduacao;
