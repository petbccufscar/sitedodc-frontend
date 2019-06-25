import React from "react";
import ReactMarkdown from "react-markdown";

const content = `
Os auxílios e bolsas sob responsabilidade da Pró-Reitoria de Assuntos Comunitários e Estudantis 
[(ProACE)](http://www.proace.ufscar.br) da UFSCar são destinados aos alunos que passam por 
dificuldades financeiras para se manterem nos cursos de graduação. Dentre as modalidades de auxílios, 
temos a [bolsa alimentação](http://www.proace.ufscar.br/bolsa-e-auxilio-para-estudantes-1/auxilio-alimentacao), 
[bolsa moradia](http://www.proace.ufscar.br/bolsa-e-auxilio-para-estudantes-1/auxilio-moradia/), 
[bolsa atividade](http://www.proace.ufscar.br/bolsa-e-auxilio-para-estudantes-1/bolsa-atividade) e 
[bolsa emergencial](http://www.proace.ufscar.br/bolsa-e-auxilio-para-estudantes-1/acolhimento-emergencial).
`

const Auxilio = (
 <React.Fragment>
   <ReactMarkdown linkTarget="_blank" source={content}/>
 </React.Fragment>
);

export default Auxilio;
