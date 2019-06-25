import React from "react";
import ReactMarkdown from "react-markdown";

const content = `
A UFSCar oferta anualmente 2897 vagas para ingresso em 65 opções de cursos de graduação presenciais. Essas vagas estão distribuídas em seus 4 campi, sendo 1797 vagas para São Carlos.

Para concorrer a uma dessas vagas, é necessário se submeter às provas do Exame Nacional do Ensino Médio (ENEM). Os resultados desse exame são utilizados pela UFSCar para fazer a seleção dos estudantes ingressantes por meio do Sistema de Seleção Unificada (SiSU).

De posse de seu resultado no ENEM, os estudantes fazem a inscrição no SiSU, escolhendo o curso em que pretendem ingressar. 

Desde o ano de 2008 a UFSCar implantou a reserva de vagas para estudantes que comprovem pertencer a uma das etnias indígenas do território brasileiro, por meio de declaração de etnia e vínculo com sua comunidade de origem. A seleção dos ingressantes é feita anualmente, por meio de processo seletivo específico, com oferta de uma vaga adicional em cada uma das opções de curso da UFSCar.

Em 09/06/2008, por meio da Portaria GR nº 941/08, a Universidade Federal de São Carlos regulamentou o ingresso nos cursos de graduação presenciais de pessoas em situação de Refúgio no Brasil.

A Lei nº 9474/97, de 20/07/97, define mecanismos para implementação do Estatuto dos Refugiados de 1951, prevendo em seu art. 44 que “o ingresso em instituições acadêmicas de todos os níveis deverá ser facilitado, levando-se em consideração a situação desfavorável vivenciada pelos refugiados”.

Assim, a partir do ano de 2009 a UFSCar passou a realizar processo seletivo específico, com oferta de no mínimo uma vaga adicional em cada curso, para seleção de pessoas em situação de refúgio, desde que com o devido atestado emitido pelo Conare – Comitê Nacional para os Refugiados, vinculado ao Ministério da Justiça.
`

const Motivacao = (
 <React.Fragment>
   <ReactMarkdown source={content}/>
 </React.Fragment>
);

export default Motivacao;
