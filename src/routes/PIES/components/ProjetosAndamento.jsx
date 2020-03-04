import React from 'react';
import ProjetoAndamento from './ProjetoAndamento';
import { Query } from 'react-apollo';
import { GET_PROJETOS_ANDAMENTO } from '../../../utils/queries';
import { Facebook } from 'react-content-loader';

const ProjetosAndamento = (
	<React.Fragment>

		<div className="accordion" id="accordion-projetos">
			<Query query={GET_PROJETOS_ANDAMENTO}>
				{({ loading, error, data }) => {
					if (loading) {
						return <Facebook />;
					}
					if (error) {
						return `Error! ${error.message}`;
					}

					return data.pies.map((projeto, index) => (
						<ProjetoAndamento
							id={index}
							titulo={projeto.titulo}
							coordenador={projeto.coordenador}
							alunosEnvolvidos={projeto.alunos_envolvidos}
                            desc={projeto.descricao}
                            proexNum={projeto.proex_num}
                            dataInicio={projeto.data_inicio}
                            dataTermino={projeto.data_termino}
						/>
					));
				}}
			</Query>
		</div>
	</React.Fragment>
);

export default ProjetosAndamento;
