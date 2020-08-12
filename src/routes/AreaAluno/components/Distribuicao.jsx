import React from "react";

const Distribuicao = (
  <React.Fragment>
    <div className="d-lg-none">
        <a target="blank" href="distrib_grad.pdf"><p>Distribuição das disciplinas para 2020 - Remoto</p></a>
    </div>
    <div className="d-none d-lg-block">
        <center><p>Distribuição das disciplinas para 2020 - Remoto</p></center>
        <embed src="/distrib_grad.pdf" type="application/pdf" width="100%" height="600px"></embed>
        <a target="blank" href="distrib_grad.pdf"><p>Distribuição das disciplinas para 2020 - Remoto</p></a>

    </div>
  </React.Fragment>
);

export default Distribuicao;
