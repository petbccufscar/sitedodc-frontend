import React from "react";
import ReactMarkdown from "react-markdown";

const content = `
Localizada no centro geográfico do Estado de São Paulo, a cidade de São Carlos possui características especiais que a tornam um local de destaque sob vários aspectos. O clima ameno, somado às altitudes médias entre 800 e 1.000 metros, faz de São Carlos um local muito agradável, com belíssimas paisagens. Há áreas de cerrado e fragmentos de mata preservada, incluindo vários exemplares de araucária de grande porte, árvore-símbolo da cidade.

O vigor acadêmico, tecnológico e industrial conferiu à cidade o título de Capital da Tecnologia. Suas universidades e centros de pesquisa são reconhecidos pela excelência e diversidade. A Universidade de São Paulo (USP) e a Universidade Federal de São Carlos (UFSCar) oferecem ensino gratuito e de qualidade e já incorporaram à história de São Carlos suas contribuições à ciência e à capacitação profissional de milhares de alunos.

Diante da concentração de universidades e centros de pesquisas, São Carlos apresenta grande número de cientistas e pesquisadores: um pesquisador doutor (PhD) para cada 100 habitantes. 

Já a atividade industrial é marcada pela presença de grandes indústrias: Volkswagen (motores), Tecumseh (compressores), Faber Castell (lápis), Electrolux (geladeiras e fogões), além de empresas têxteis, de embalagens, de máquinas, tintas, lavadoras, equipamentos ópticos e uma grande quantidade de indústrias médias e pequenas dos mais diversos setores de produção.

O comércio atende às necessidades da cidade e da região, oferecendo produtos e serviços de qualidade. E o setor agropecuário é importante na produção de leite, cana, laranja, frango, carne bovina e milho. São Carlos também é servida por excelentes estradas, que permitem o deslocamento com segurança e rapidez a São Paulo (cerca de 228 Km) e às principais cidades do Estado.
`;

const SobreSaoCarlos = (
  <React.Fragment>
    <ReactMarkdown source={content} />
  </React.Fragment>
);

export default SobreSaoCarlos;
