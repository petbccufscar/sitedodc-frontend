import React, { Component } from 'react';
import { Breadcrumbs, Breadcrumb } from '../../components/Breadcrumbs';

import { VTab, SideMenu, TabPanelContainer, VerticalTabs } from '../../components/vertical-tabs';

import { TabPanel } from 'react-web-tabs';

import PiesFragment from './components/PIES';
import Projetos from './components/Projetos';
import ProjetosAndamento from './components/ProjetosAndamento'

const tabs = [
	{
		props: {
			panelId: 'sobre',
			title: 'Sobre',
			header: '',
			showHeader: false,
		},
		content: {
			title: 'Projetos Integradores Extensionistas (PIEs)',
			body: PiesFragment,
		},
	},
	{
		props: {
			panelId: 'projetos',
			title: 'Projetos à procura de alunos',
			header: '',
			showHeader: false,
		},
		content: {
			title: 'Projetos Integradores Extensionistas (PIEs)',
			body: Projetos,
		},
	},
	{
		props: {
			panelId: 'projetos_andamento',
			title: 'Projetos em andamento',
			header: '',
			showHeader: false,
		},
		content: {
			title: 'Projetos em andamento',
			body: ProjetosAndamento,
		},
	},
];

class PIES extends Component {
	render() {
		return (
			<React.Fragment>
				<Breadcrumbs>
					<Breadcrumb endereco="/">Início</Breadcrumb>
					<Breadcrumb bold>PIEs</Breadcrumb>
				</Breadcrumbs>

				<VerticalTabs>
					<SideMenu defaultTab={tabs[0].props.panelId}>
						{tabs.map((tab, index) => (
							<VTab key={'t_' + index} {...tab.props}>
								{tab.props.title}
							</VTab>
						))}
					</SideMenu>
					<TabPanelContainer>
						{tabs.map((tab, index) => (
							<TabPanel key={'p_' + index} tabId={tab.props.panelId}>
								<h4>{tab.content.title}</h4>
								<hr />
								{tab.content.body}
							</TabPanel>
						))}
					</TabPanelContainer>
				</VerticalTabs>
			</React.Fragment>
		);
	}
}

export default PIES;
