import React from "react";
import ReactMarkdown from "react-markdown";

const content = `
O Departamento de Computação possui seis laboratórios de ensino, sendo 
que em cada um deles há as seguintes máquinas:

**LE1**
- 13 COMPUTADORES  
- Intel core i7, 8 GbRam, HD 1Tb, monitor de 19";

**LE2**
- 21 COMPUTADORES
- Intel core I5, 8GB, HD 1TB, monitor 21,5";

**LE3**
- 20 COMPUTADORES
- Intel core I5, 8GB, HD 1TB, monitor 19";

**LE4**
- 21 COMPUTADORES 
- Intel core i7, 8GB, HD 1TB, monitor 19";

**LE5**
- 9 COMPUTADORES
- Intel core i7, 8 GbRam, HD 1Tb, monitor de 19";

**LE6**
- 19 COMPUTADORES 
- Intel core 2 Quad, 4GB, HD 320 e HD 250GB, monitor 17".
`;

const Infraestrutura = (
  <React.Fragment>
    <ReactMarkdown source={content} />
  </React.Fragment>
);

export default Infraestrutura;
