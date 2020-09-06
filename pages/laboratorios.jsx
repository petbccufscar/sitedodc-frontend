import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../components/Breadcrumbs";

import {
  VTab,
  SideMenu,
  TabPanelContainer,
  VerticalTabs,
} from "../components/vertical-tabs";

import { TabPanel } from "react-web-tabs";
import LabsContent from "../components/Laboratorios/components/labsContent";

import { Query } from "react-apollo";
import { GET_LABORATORIOS } from "../utils/queries";

class Laboratorios extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Laboratórios</Breadcrumb>
        </Breadcrumbs>

        <Query query={GET_LABORATORIOS}>
          {({ loading, error, data }) => {
            if (loading || error) { return <div />; }
            return (
              <VerticalTabs>
                <SideMenu defaultTab={`grupo-${data.laboratorios[0].Nome}`}>
                  {data.laboratorios.map((tab, index) => {
                    return (
                      <VTab
                        key={"t_" + index}
                        panelId={`grupo-${tab.Nome}`}
                        title={`${tab.Nome}`}
                        header="Grupos de pesquisa"
                        showHeader={index === 0}
                      >
                        {tab.Nome}
                      </VTab>
                    );
                  })}
                </SideMenu>
                <TabPanelContainer>
                  {data.laboratorios.map((lab, index) => {

                    return (
                      <TabPanel key={"p_" + index} tabId={`grupo-${lab.Nome}`}>
                        <LabsContent
                          logoSrc={`${process.env.REACT_APP_API_URL}/${lab.Logo.url}`}
                          name={lab.NomeExpandido}
                          description={lab.Descricao}
                          docentes={lab.Docentes}
                        />
                      </TabPanel>
                    );
                  })}
                </TabPanelContainer>
              </VerticalTabs>
            );
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export default Laboratorios;
