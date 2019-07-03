import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import {
  VTab,
  SideMenu,
  TabPanelContainer,
  VerticalTabs,
} from "../../components/vertical-tabs";
import { TabPanel } from "react-web-tabs";

import motivacao from "./components/Motivacao";
import ingresso from "./components/Ingresso";
import auxilio from "./components/Auxilio";
import sobre_sao_carlos from "./components/SobreSaoCarlos";

const tabs = [
  {
    props: {
      panelId: "motivacao",
      title: "Motivação",
      header: "Informações",
      showHeader: true,
    },
    content: {
      title: "Motivação para Estudar na UFSCar",
      body: motivacao,
    },
  },
  {
    props: {
      panelId: "ingresso",
      title: "Como ingressar",
      header: "Informações",
      showHeader: false,
    },
    content: {
      title: "Como ingressar?",
      body: ingresso,
    },
  },
  {
    props: {
      panelId: "auxilios",
      title: "Auxílios",
      header: "Informações",
      showHeader: false,
    },
    content: {
      title: "Auxílios Permanência",
      body: auxilio,
    },
  },
  {
    props: {
      panelId: "saocarlos",
      title: "Sobre São Carlos",
      header: "Informações",
      showHeader: false,
    },
    content: {
      title: "Sobre São Carlos",
      body: sobre_sao_carlos,
    },
  },
];

class AreaVisitante extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Área do visitante</Breadcrumb>
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

export default AreaVisitante;
