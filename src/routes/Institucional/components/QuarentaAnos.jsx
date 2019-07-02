import React from "react";
import ReactMarkdown from "react-markdown";

const QuarentaAnos = (
  <React.Fragment>
    <p>Em 2012 o DC fez 40 anos. O marco foi celebrado com 
        uma <a href="revista.pdf" target="blank">edição comemorativa de Relatório Anual produzido pela Revista Kappa</a>.
        Parte dessa história também foi registrada em vídeos.
        </p>
    <h3>Vídeos</h3>	
    <div className=" mt-3">	
    <div className="flex-fill">	
        <iframe	
        frameBorder="0"	
        title="Departamento de Computação UFSCar - Vídeo Institucional"	
        width="515"	
        height="290"	
        src="https://www.youtube.com/embed/65ErgsOfEtE"	
        />	
    </div>	
    <div className="flex-fill">	
        <iframe	
        frameBorder="0"	
        title="Departamento de Computação da UFSCar - 40 Anos"	
        width="515"	
        height="290"	
        src="https://www.youtube.com/embed/UEklyABA7uc"	
        />	
    </div>	
    </div>
  </React.Fragment>
);

export default QuarentaAnos;
