import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `
Visando a constante atualização dos cursos de computação da [UFSCar](http://www.ufscar.br/) e a melhor adequação dos estudantes egressos aos desafios futuros, o [Departamento de Computação](http://www.dc.ufscar.br/) (DC) está elaborando Certificados de Estudos, que darão aos estudantes a oportunidade de obter diferenciais de qualificação ao longo da graduação, indicando tanto especialização e aprofundamento de conhecimento quanto a atualidade da formação dos mesmos.

Sendo formado por mais de 40 professores doutores, o DC-UFSCar oferece, ao longo de 8 disciplinas obrigatórias, uma base sólida em algoritmos e programação para os estudantes de graduação dos cursos de [Ciência](http://bcc.dc.ufscar.br/) e [Engenharia](http://enc.dc.ufscar.br/) da Computação. Além disso, uma vez que seus professores são especialistas em diferentes áreas, o departamento consegue ofertar diversas disciplinas avançadas que permitem compor certificados de estudos em temas de grande relevância.

A seguir são listados alguns dos certificados que serão oferecidos:
- Ciência de Dados  
- Computação de Alto Desempenho  
- Controle, Automação e Robótica
- Desenvolvimento Web e Móvel  
- Engenharia de Software  
- Resolução de Problemas Difíceis  
- Sistemas Embarcados  
- Visão Computacional
`;

const Certificados = (
	<React.Fragment>
		<ReactMarkdown source={content} />
	</React.Fragment>
);

export default Certificados;
