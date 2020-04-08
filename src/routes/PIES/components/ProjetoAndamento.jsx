import React from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

const ProjetoAndamento = ({ id, titulo, coordenador, alunosEnvolvidos, desc, proexNum, dataInicio, dataTermino }) => (
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
							<strong>Número Proex:</strong> {proexNum}<br/>
							<strong>Alunos Envolvidos: </strong>
								{alunosEnvolvidos == null ? "": alunosEnvolvidos}
							
							<p>
								<strong>Início: </strong> {format(new Date(dataInicio), 'MM/YYYY')}
								<br />
								<strong>Término: </strong> {format(new Date(dataTermino), 'MM/YYYY')}
							</p>
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
				</div>
			</div>
		</div>
	</React.Fragment>
);

export default ProjetoAndamento;
