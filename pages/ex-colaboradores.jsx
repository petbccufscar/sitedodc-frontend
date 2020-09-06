import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../components/Breadcrumbs";
import {
  VTab,
  SideMenu,
  TabPanelContainer,
  VerticalTabs
} from "../components/vertical-tabs";
import { TabPanel } from "react-web-tabs";

import Docentes from "../components/ExColaboradores/components/Docentes";
import DocentesSubstitutos from "../components/ExColaboradores/components/DocentesSubstitutos";
import Funcionarios from "../components/ExColaboradores/components/Funcionarios";

const tabs = [
  {
    props: {
      panelId: "docentes",
      title: "Docentes",
      header: "",
      showHeader: false
    },
    content: {
      title: "Docentes",
      body: Docentes
    }
  },
  {
    props: {
      panelId: "docentesSub",
      title: "Docentes substitutos",
      header: "",
      showHeader: false
    },
    content: {
      title: "Docentes substitutos",
      body: DocentesSubstitutos
    }
  },
  {
    props: {
      panelId: "funcionarios",
      title: "Funcionários",
      header: "",
      showHeader: false
    },
    content: {
      title: "Funcionários",
      body: Funcionarios
    }
  }
];

class PosGraduacao extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Visualizando ex-colaboradores</Breadcrumb>
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

export default PosGraduacao;
