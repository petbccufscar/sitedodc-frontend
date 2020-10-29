import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projeto = ({ id, titulo, coordenador, alunosEnvolvidos, desc, doc }) => (
	<React.Fragment>
		<div className="card">
			<div className="card-header" id={'heading-' + id}>
				<h5 className="mb-0">
					<button
						className="btn btn-link"
						type="button"
						data-toggle="collapse"
						data-target={'#collapse' + id}
						aria-expanded="false"
						aria-controls={'collapse' + id}
					>
						<div className="text-left">
							<h5 className="mb-1">{titulo}</h5>
							<strong>Coordenador: </strong>
							{coordenador} <br />
							<strong>Nro de Alunos Exigidos: </strong>
							{alunosEnvolvidos == null ? "": alunosEnvolvidos}
						</div>
					</button>
				</h5>
			</div>

			<div
				id={'collapse' + id}
				className="collapse"
				aria-labelledby={'heading' + id}
				data-parent="#accordion-projetos"
			>
				<div className="card-body">
					<p>{desc}</p>
					<p> { doc ? <a href={'https://api.dc.ufscar.br' + doc} target="blank">
							{' '}
							<FontAwesomeIcon icon="file-download" className="mr-2" />
							Download do Documento com Detalhes do Projeto
						</a> : <></>}
						
					</p>
				</div>
			</div>
		</div>
	</React.Fragment>
);

export default Projeto;
