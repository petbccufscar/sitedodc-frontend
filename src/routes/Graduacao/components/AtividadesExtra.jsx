import React from "react";
import ReactMarkdown from "react-markdown";

const content = `
As atividades extracurriculares são todas aquelas que expõem o estudante a experiências inovadoras e enriquecedoras durante seu período acadêmico, complementando a formação recebida em sala de aula. 

De acordo com o regimento geral dos cursos de graduação da UFSCar, as atividades extracurriculares, também chamadas de atividades complementares, são todas aquelas de caráter acadêmico, científico e cultural realizadas pelo estudante ao longo de seu curso de graduação. 
`

const AtividadesExtra = (
    <React.Fragment>
        <ReactMarkdown source={content}/>
    </React.Fragment>
);

export default AtividadesExtra;
