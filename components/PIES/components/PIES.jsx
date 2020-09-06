import React from 'react';

const PiesFragment = (
	<React.Fragment>
		<center>
			<img src={'/images/pies.jpeg'} />
		</center>
		<div className="text-justify">
			<p>
				Projetos Integradores Extensionistas são projetos desenvolvidos por alunos do Departamento de Computação
				da UFSCar. O foco é o desenvolvimento de soluções, envolvendo software e/ou hardware, que beneficiem a
				comunidade em geral, como empresas, organizações públicas e a sociedade civil.
			</p>
			<p>
				Quaisquer interessados podem submeter propostas de PIEs, desde alunos, técnicos administrativos,
				professores, empresas e membros da sociedade civil. Os projetos submetidos serão analisados por uma
				comissão interna que avaliará sua viabilidade de execução.
			</p>
			<p>
				Maiores detalhes sobre como submeter PIEs podem ser encontrados no edital disponível
				<a target="_blank" href="pies/edital_PIEs.pdf">
					{' '}
					aqui.
				</a>
			</p>
			<p>
				Para submeter seu projeto use como base nosso <a href="pies/template_PIEs.docx" target="_blank">template!</a>
			</p>
			<p>
				Dúvidas e esclarecimentos podem ser encaminhados para a Comissão de Avaliação de Acompanhamento (CAAP)
				dos PIEs, pelo e-mail: <b>caap-dc-ufscar AT googlegroups.com</b>
			</p>
		</div>
	</React.Fragment>
);

export default PiesFragment;
