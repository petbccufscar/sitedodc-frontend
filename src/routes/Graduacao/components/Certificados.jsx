import React from 'react';
import ReactMarkdown from 'react-markdown';
import Certificado from './Certificado';

const content = `
Visando a constante atualização dos cursos de computação da [UFSCar](http://www.ufscar.br/) e a melhor adequação dos estudantes egressos aos desafios futuros, o [Departamento de Computação](http://www.dc.ufscar.br/) (DC) está elaborando Certificados de Estudos, que darão aos estudantes a oportunidade de obter diferenciais de qualificação ao longo da graduação, indicando tanto especialização e aprofundamento de conhecimento quanto a atualidade da formação dos mesmos.

Sendo formado por mais de 40 professores doutores, o DC-UFSCar oferece, ao longo de 8 disciplinas obrigatórias, uma base sólida em algoritmos e programação para os estudantes de graduação dos cursos de [Ciência](http://bcc.dc.ufscar.br/) e [Engenharia](http://enc.dc.ufscar.br/) da Computação. Além disso, uma vez que seus professores são especialistas em diferentes áreas, o departamento consegue ofertar diversas disciplinas avançadas que permitem compor certificados de estudos em temas de grande relevância.

A seguir são listados alguns dos certificados que serão oferecidos:

`;

const certficados = [
	{
		titulo: 'Ciência de Dados',
		desc:
			'A Ciência de Dados é um campo multidisciplinar que abrange métodos e processos para a obtenção de conhecimento ou compreensão de premissas a partir de dados (informação). As soluções de problemas práticos baseadas na Ciência de Dados empregam métodos de diferentes áreas da Computação, como Aprendizado de Máquina e Bancos de Dados, além de conhecimentos em Matemática e, principalmente, Estatística. A demanda por profissionais com forte base nessa área de conhecimento está em pleno crescimento, tanto no mercado de trabalho quanto na academia. O certificado de estudos em Ciência de Dados é composto por disciplinas com conteúdos práticos e teóricos, e tem por objetivo capacitar o estudante a desenvolver ou gerenciar projetos para tomadas de decisão baseada em dados em todos os seus níveis.',
		id: 'ciencia-dados',
	},
	{
		titulo: 'Computação de Alto Desempenho',
		desc:
			'A busca por alto desempenho é uma constante na computação. Limites nas tecnologias de integração de circuitos e na velocidade de execução de instruções impulsionaram o desenvolvimento de sistemas computacionais com múltiplos elementos de processamento. Assim, computação de alto desempenho está comumente associada ao processamento paralelo, que pode ser explorado via instruções vetorizadas, combinando o uso de processadores tradicionais com dispositivos de processamento especializados. Tecnologias de interligação em rede permitem ainda que múltiplos sistemas computacionais cooperem na execução de programas. Deste modo, essa área de formação capacita estudantes a trabalhar com sistemas de alto desempenho, explorando aspectos que vão desde a arquitetura de sistemas computacionais paralelos, passando por recursos oferecidos pelos sistemas operacionais para a criação de tarefas locais e remotas, além de técnicas de programação para particionamento e sincronização de atividades em sistemas computacionais distribuídos.',
		id: 'comp-desempenho',
	},
	{
		titulo: 'Controle, Automação e Robótica',
		desc: '',
		id: 'controle',
		empty: true,
	},

	{
		titulo: 'Desenvolvimento Web e Móvel',
		desc:
			'Praticamente todo sistema de software atual tem uma interface web ou para dispositivos móveis. Por mais que existam diferentes capacidades e especialidades sendo requeridas no mercado de trabalho, sem dúvida a demanda por desenvolvedores "full-stack", que engloba o desenvolvimento web e móvel, é a que mais fortemente se apresenta para o profissional. Esta trilha tem como objetivo formar desenvolvedores altamente capacitados em projetar qualquer tipo de aplicação web e móvel, cobrindo os principais conceitos fundamentais de maneira que o estudante consiga implementar aplicações para diferentes domínios.',
		id: 'dev-web-mobile',
	},
	{
		titulo: 'Engenharia de Software',
		desc:
			'A demanda por profissionais capacitados na área de Engenharia de Software é crescente, uma vez que o mercado de tecnologia da informação busca profissionais treinados no desenvolvimento de sistemas de software complexos. Por isso, o DC-UFSCar oferece este certificado com o objetivo de capacitar estudante a desenvolver, reutilizar, testar, validar e gerenciar projetos de sistemas de software.',
		id: 'eng-software',
	},
	{
		titulo: 'Resolução de Problemas Difíceis',
		desc:
			'Problemas computacionais complexos e desafiadores surgem nas mais variadas áreas. Pode ser muito difícil, ou mesmo impossível, encontrar algoritmos eficientes que sempre encontram a solução ótima para estes problemas. Para atacar tais problemas é importante usar abordagens avançadas e complementares que permitem o projeto e análise de algoritmos exatos, heurísticos e aproximados. O objetivo deste certificado é qualificar o estudante no uso destas variadas técnicas que permitem resolver problemas computacionais complexos, tipicamente NP-Difíceis.',
		id: 'res-prob',
	},
	{
		titulo: 'Sistemas Embarcados',
		desc:
			'A crescente demanda por dispositivos eletrônicos incorporados em uma grande variedade de produtos oferecendo as mais diversas funcionalidades, trouxe um grande crescimento à complexidade dos projetos desenvolvidos na indústria eletrônica ao longo dos últimos anos. Atualmente, utilizando projetos conhecidos como System-on-Chip (SoC), é possível projetar um sistema dedicado completo dentro de um único circuito integrado. Este certificado tem por objetivo capacitar os alunos de graduação com conhecimentos avançados de arquitetura de computadores e técnicas modernas de projetos de sistemas digitais voltadas ao desenvolvimento de sistemas dedicados que possam ser implementados como SoC e suas aplicações, como por exemplo na Internet das Coisas "IoT".',
		id: 'embarcados',
	},
	{
		titulo: 'Visão Computacional',
		desc: '',
		id: '',
		empty: true,
	},
];

const Certificados = (
	<>
		<ReactMarkdown source={content} />
		<div class="accordion" id="accordion">
			{certficados.map(certficado => (
				<Certificado {...certficado} />
			))}
		</div>
	</>
);

export default Certificados;
