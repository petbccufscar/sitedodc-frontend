import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import {
  VTab,
  SideMenu,
  TabPanelContainer,
  VerticalTabs,
} from "../../components/vertical-tabs";
import { TabPanel } from "react-web-tabs";
import { Link } from "react-router-dom";


import { placeholder } from "../../components/placeholders";

const tabs = [
  {
    props: {
      panelId: "distribuicao",
      title: "Distribuição de Disciplinas",
      header: "",
      showHeader: false,
    },
    content: {
      title: "Distribuição de Disciplinas",
      body: placeholder,
    }
  },
  {
    props: {
      panelId: "estagios",
      title: "Estágio",
      header: "",
      showHeader: false,
    },
    content: {
      title: "Estágio",
      body: placeholder,
    }
  },
  {
    props: {
      panelId: "suporte",
      title: "Suporte",
      header: "",
      showHeader: false,
    },
    content: {
      title: "Suporte",
      body: placeholder,
    }
  }
];

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
                tab.props.panelId === "suporte" ?
                  <Link to="/suporte/reportar" className="nav-link">
                    {tab.props.title}
                  </Link> :
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
