import React from "react";
const Evento = ({ titulo, data }) => (
  <a
    key={titulo}
    href="www.algo.br"
    style={{ textDecoration: "none" }}
    className="d-flex flex-row align-items-start border-bottom"
  >
    {ConverterData(data)}
    <div className="p-2 align-self-center text-primary ml-2">
      <h5>{titulo}</h5>
    </div>
  </a>
);

const ConverterData = data => {
  var dataObj = new Date(data.substring(0, data.length - 1));
  // Tem um "Z" no final da string de tempo, por algum motivo ela buga completamente o parse
  return (
    <div className="p-2">
      <div>
        <h3 className="font-weight-bold text-primary mb-0">
          {String(dataObj.getDate()).padStart(2, "0")}/
          {String(dataObj.getMonth()).padStart(2, "0")}
        </h3>
      </div>
      <h3 className="text-secondary font-weight-light mb-0">
        {String(dataObj.getHours()).padStart(2, "0")}:
        {String(dataObj.getMinutes()).padStart(2, "0")}
      </h3>
    </div>
  );
};

export default Evento;
