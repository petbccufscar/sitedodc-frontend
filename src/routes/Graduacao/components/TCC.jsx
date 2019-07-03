import React from "react";
import ReactMarkdown from "react-markdown";

const content = `O Trabalho de Conclusão de Curso (TCC) é um componente curricular que constitui-se de um trabalho acadêmico como síntese, integração ou aplicação de conhecimentos adquiridos de caráter científico ou tecnológico relacionados ao curso de graduação. 

O TCC será desenvolvido sob a supervisão de um docente vinculado ao curso e formalizado como uma monografia. O objetivo é reforçar os princípios de investigação científica expondo ao estudante temas que incentivem a realização de projetos inovadores e que extrapolem os limites dos conteúdos transmitidos durante o curso.`;

const TCC = (
    <React.Fragment>
        <ReactMarkdown source={content} />
    </React.Fragment>
);

export default TCC;
