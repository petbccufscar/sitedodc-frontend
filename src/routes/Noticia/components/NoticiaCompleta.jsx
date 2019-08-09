import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import './noticia.css';

const teste =
	' ![](https://api.dc.ufscar.br//uploads/24f610e2fafc43afbcc3419a3baec111.jpeg) Na última semana de Julho, o BIPG (Biomedical Image Processing Group - BIPG) recebeu a visita da TV UFSCar para uma reportagem sobre a pesquisa que desenvolvem. O trabalho do grupo, coordenado pelo professor Ricardo José Ferrari, contribui muito para a área da saúde ao fazer o processamento de imagens biomédicas. De acordo com o professor Ricardo J. Ferrari, por meio de imagens mais precisas, o médico tem mais suporte para embasar o diagnóstico de doenças ou até mesmo escolher qual o melhor tratamento. \r\n\r\nAlém disso, os pesquisadores do laboratório trabalham na criação de ferramentas que permitam diagnósticos mais precisos e no desenvolvimento de softwares para suporte a decisões médicas, com o consequente apoio ao surgimento de novas drogas. \r\n\r\nO BIPG atua nas seguintes linhas de pesquisa: esclerose múltipla, Alzheimer e doenças inflamatórias. O trabalho é contínuo, não há pausa no período de férias, pois os pesquisadores possuem prazos para cumprir. Para o professor Ricardo J. Ferrari, as pesquisas desenvolvidas são uma forma de aproximar a universidade e a sociedade, além de gerar pessoas capacitadas para encarar o mercado de trabalho.\r\n\r\nAlém do BIPG, o Departamento de Computação possui vários outros grupos de pesquisa. No BioMal (Grupo de Bioinformática e Aprendizado de Máquina), coordenado pelo professor Ricardo Cerri, o foco de pesquisa é o desenvolvimento e aplicação de métodos de Aprendizado de Máquina em tarefas complexas. Em uma das frentes de pesquisa, a doutoranda Elaine Cecília Gatto atua refinando a classificação de dados para um melhor desempenho de aplicativos como o Spotify.\r\n\r\nPara conferir a reportagem completa da TV UFSCar, acesse: https://www.facebook.com/tvufscar/videos/402284040424046/ ou https://www.youtube.com/watch?v=_IOyXi88Nek.\r\n\r\nPor: Marcella Salomão\r\n';

const Noticia = ({ noticia }) => (
	<React.Fragment>
		<div className="mb-4 pb-4 border-bottom">
			<h4>
				<Data data={noticia.createdAt} />
				{noticia.Titulo}
			</h4>
			<small>{noticia.Descricao}</small>
		</div>
		<div className="noticia-container">
			{noticia.Imagem && (
				<img
					src={`${process.env.REACT_APP_API_URL}/${noticia.Imagem.url}`}
					alt="Responsive"
					id="img-noticia"
				/>
			)}
			<ReactMarkdown className="text-justify mt-4" source={noticia.Conteudo} />
		</div>

		{/* <div className="row">
			<div className="col-lg-4 text-center img-noticia">
				{noticia.Imagem && (
					<img
						src={`${process.env.REACT_APP_API_URL}/${noticia.Imagem.url}`}
						className="img-fluid img-cover"
						alt="Responsive"
						id="img-noticia"
					/>
				)}
			</div>
			<div className="col-lg-8">
				<ReactMarkdown className="text-justify mt-4" source={noticia.Conteudo} />
			</div>
		</div> */}
	</React.Fragment>
);
const Data = ({ data = '01/01/2018' }) => (
	<span className="mr-2 badge badge-primary">
		{format(new Date(data), 'DD/MM/YYYY', {
			locale: pt,
		})}
	</span>
);
export default Noticia;
