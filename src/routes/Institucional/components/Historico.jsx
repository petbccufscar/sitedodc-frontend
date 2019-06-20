import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

const content = `
Em 1972 foi fundado o Departamento de Computação e Estatística – DCEs, composto por seis professores e um estagiário. Em janeiro de 1973, os professores com atuação em Computação começaram a desenvolver os primeiros sistemas administrativos computadorizados da UFSCar. No mesmo ano, foi criada a Divisão de Processamento de Dados – DPD, que ficou responsável pelos sistemas administrativos. Ainda em 1973, o departamento passou a oferecer um curso de extensão universitária em Processamento de Dados.

No início dos anos 1970, praticamente não havia profissionais graduados em Computação no Brasil. Assim, os primeiros docentes de Computação da UFSCar não tinham graduação na área. O Departamento de Computação e Estatística funcionava em uma pequena área com cerca de 150 metros quadrados, em um prédio que abrigava ainda outros departamentos e a biblioteca.

Nesse período, a universidade possuía apenas um computador, o HP 2100A, que dispunha de leitora de fita de papel perfurado. Posteriormente, a UFSCar fez parceria com a USP para ter acesso ao IBM 1130.

Já em 1974 foi criado o primeiro curso de graduação em Processamento de Dados. O curso, de curta duração, formou 156 alunos e foi extinto em 1986. Em 1975 foi criado o Bacharelado em Ciência da Computação, ativo até os dias de hoje. Foi um dos primeiros bacharelados em computação do país na integração entre hardware e software.

Em meados dos anos 1980, a UFSCar comprou o computador IBM 360, depois atualizado para o modelo 370. O Departamento de Computação e Estatística cresceu e se mudou para um novo prédio, com espaço de cerca de 1.000 metros quadrados.

Em 1981, o professor Euclides Robert Filho começou a projetar e construir microcomputadores para uso no ensino de computação. O modelo foi batizado de ProEn – Processador de Ensino e o Departamento conseguiu construir dez modelos. No ano de 1986, os professores de Estatística e de Computação foram divididos em dois departamentos. Surgiu, então, o Departamento de Computação - DC, com a denominação atual.

Em 1988, foi criado o Mestrado em Ciência da Computação. Um dos grandes desafios do departamento nos anos 1990 era a titulação dos professores. Para desenvolver e consolidar o Mestrado e a atuação em pesquisa, o DC estabeleceu o seguinte plano estratégico: afastar 25% do seu quadro de docentes, para que estes pudessem se titular. A estratégia deu resultado: no final dos anos 1990, a grande maioria dos professores já possuía o título de doutor.

Em 1992 foi criado o curso de Engenharia de Computação. Foi em 2003 que as primeiras turmas de Pós-Graduação Lato Sensu na área de Computação começaram a se constituir na UFSCar – São Carlos. Antes disso, estas especializações eram oferecidas pelo DC em parceria com outras instituições.

Em 2007, o DC criou o Bacharelado em Sistemas de Informação, na modalidade à distância. No mesmo ano, ocorreu a mudança para o prédio atual, que hoje possui 3.600 metros quadrados de área construída. Já em 2009 foi possível realizar um antigo sonho: a criação do curso de Doutorado.
`

const Historico = (
    <React.Fragment>
        <ReactMarkdown source={content}/>
    </React.Fragment>
);

export default Historico;
