import React from 'react';
import ReactMarkdown from 'react-markdown';
import Certificado from './Certificado';
import logoEADis from '../../../images/logos/logoEADis.png'

const content = (<>
    <center>			
        <img src={logoEADis}/>
    </center>

    <p class="text-center"><b>FAQ da Prograd:</b> <a href="http://www.prograd.ufscar.br/covid-19-faq-prograd-atualizada" target="_blank">http://www.prograd.ufscar.br/covid-19-faq-prograd-atualizada</a></p> 
    <p>
        Pedimos a gentileza de antes de entrar em contato com a secretaria do DC para o esclarecimento de dúvidas, veja se a mesma já não se encontra respondida nesta FAQ ou na FAQ da Prograd ! Obrigado ! 
    </p>
    <p>
        Caso possua dúvidas mais específicas que não são respondidas neste FAQ, existem duas maneiras de entrar em contato conosco. A primeira é por meio do endereço de e-mail secretaria.graduacao.dc@ufscar.br. A segunda forma é por chamada de voz;  a EADis (Equipe de Apoio aos Discentes) realiza rodas de conversa semanal todas às quartas-feiras, entre 10:00 e 11:00 da manhã. 
    </p>

    <p>Última atualização: 05/08/2020</p></>);

const certficados = [
	{
		titulo: 'Existem planejamentos para recuperar esse primeiro semestre "perdido"?',
		desc: <div><p>O Conselho de Graduação tomou a decisão de cancelar o semestre 2020/1. Haverá então nova distribuição de
        disciplinas aos docentes e novo período de inscrição aos alunos, mas nada impede que disciplinas que haviam sido
        ofertadas em 2020/1 não sejam novamente. Tiveram, porém, duas exceções à esta decisão:
        </p>
        <p>
        As atividades de estágio já lançadas no SiGA em 2020/1 não serão canceladas para que não sejam prejudicados os
        alunos com termos de compromisso vigentes atuando em home-office.
        </p>
        <p>
        As atividades do Campus Lagoa do Sino também não serão canceladas em função das especificidades dos projetos
        pedagógicos dos seus cursos, e da difícil logística envolvida nos procedimentos anuais de oferta. Em respeito a
        decisão do próprio Campus Lagoa do Sino, as adequações na execução das atividades serão feitas de acordo com as
        demais decisões dos Conselhos, mas sem alterar o que consta atualmente no Sistema SiGA.
        </p></div>,
		id: 'semestre-perdido',
	},
	{
		titulo: 'Haverá alguma pesquisa do departamento para identificar as disciplinas de maior interesse dos alunos?',
		desc:
            <p>
                Sim, o departamento realizou uma consulta por meio de um forms para saber quais seriam as matérias do DC que os alunos teriam interesse em se inscrever no próximo semestre. O forms ficou disponível dos dias 08/07/2020 até 12/07/2020. Essa consulta visou apoiar a chefia e não garante que uma dada disciplina será oferecida, independentemente do número de alunos que a selecionaram.
                O mesmo foi feito para as disciplinas do DM, sendo que esse outro forms ficou disponível dos dias 10/07/2020 até
                13/07/2020.
            </p>,    
        id: 'pesquisa-interesse',
    },
    {
		titulo: 'Qual é a data prevista para o início das atividades e como será o calendário do semestre de Ensino Remoto? ',
        desc:
        <div>
            <p>
                Segundo o calendário aprovado pela ConsUni em 29/07/2020, o início das atividades ocorrerá no dia 31 de agosto de 2020. A oferta do semestre será dividido em 3 blocos: A, B e C: 
            </p>
            <ul>
                <li>O Bloco A, compreendido entre 31/08/2020 e 26/10/2020 contendo atividades condensadas em 8 semanas; </li>
                <li>O Bloco B,  compreendido entre 09/11/2020 e 16/01/2021, também contendo atividades condensadas em 8 semanas, com previsão de recesso; </li>
                <li>O Bloco C, compreendido entre 31/08/2020 e 16/01/2021, ou seja, ocorrendo ao mesmo tempo que os blocos A e B, contendo atividades estendidas ao longo de 16 semanas, com previsão de recessos. </li>
            </ul>
            <p>O calendário completo está disponível <a href="http://www.prograd.ufscar.br/estudantes-de-graduacao/arquivos-estudantes/calendarios/2020/ENPE20201.pdf" target="_blank">aqui</a>.</p>
        </div>,    
        id: 'calendario-remoto',
	},
	{
		titulo:'Existe alguma movimentação para que os semestres oferecidos através do Ensino Remoto não contem no tempo que o aluno tem para concluir o curso?',
        desc:
        <div>   
            <p>
                Segundo a Resolução CoG n°332 de 27/07/2020 todos os discentes com matrícula ativa ou ingressantes durante o período de ensino remoto excepcional  terão seus prazos para integralização dos cursos estendidos por 2 anos. Além disso, poderão solicitar um pedido de trancamento de matrícula excepcional e adicional ao previsto no Regimento Geral dos Cursos de Graduação a qualquer momento durante a vigência do ENPE, com prazo de até 1 ano para cursos anuais e até 6 meses para cursos semestrais, prorrogáveis.  
            </p>
            <p>    
                A resolução mencionada acima se encontra neste <a href="http://www.prograd.ufscar.br/conselho-de-graduacao-1/arquivos-conselho-de-graduacao/reunioes/2020/resolucoes_2020/ResoluoCoG332.pdf" target="_blank">Link</a>.
            </p>
        </div>,
		id: 'tempo-de-conclusao'
	},

	{
		titulo: 'Haverá algum limite de matérias/créditos que os alunos poderão cursar?',
		desc: 
            <p>
                O limite provavelmente continuará o mesmo, contudo, considerando a especificidade de 3 blocos do novo calendário acadêmico 2020/1, a recomendação geral é que os estudantes não se inscrevam em mais de 3 atividades concomitantemente, independentemente de serem atividades ofertadas nos blocos A e C ou B e C.
            </p>,
		id: 'limite-creditos',
	},
	{
		titulo: 'As disciplinas seguirão os mesmos requisitos que existem na normalidade?',
		desc: 
            <div>
                <p>
                    Segundo a Resolução CoG n°332 de 27/07/2020 a quebra de pré-requisitos poderá ser autorizada por conselhos de curso em primeira instância mediante recurso, ouvindo-se os departamentos responsáveis pelas atividades.  
                </p>
                <p>
                    A resolução mencionada acima se encontra neste <a href="http://www.prograd.ufscar.br/conselho-de-graduacao-1/arquivos-conselho-de-graduacao/reunioes/2020/resolucoes_2020/ResoluoCoG332.pdf" target="_blank">Link</a>. 
                </p>
            </div>,
		id: 'requisitos',
	},
	{
		titulo: 'Como será o controle de frequência na modalidade de Ensino Remoto?',
		desc: 
        <div>
            <p>
                Segundo a Resolução CoG n°331 de 27/07/2020 o controle de frequência e os critérios de avaliação são de responsabilidade dos docentes, devendo ser obedecidas as seguintes diretrizes:  
            </p>
            <ol type='I'>
                <li>Todas as exigências estabelecidas do art. 18 ao 28 do Regimento Geral da Graduação da UFSCar deverão ser seguidas para o processo de avaliação da aprendizagem e frequência; </li>
                <li>A frequência dos estudantes poderá ser computada por meio das atividades assíncronas, avaliativas ou não, previamente indicadas pelo docente, que comprovem a efetiva participação do aluno. A contabilização de atividades síncronas é possível, desde que seja garantida ao estudante a realização de atividades assíncronas que substituam o momento síncrono.</li>
                <li>Os critérios e pesos das atividades avaliativas que compõem a nota final serão definidos pelo docente em seu plano de ensino em conformidade com art. 18 ao 28 do Regimento Geral da Graduação da UFSCar, limitado o peso do último instrumento avaliativo a 30% (trinta por cento) do conceito final. </li>
                <li>As atividades avaliativas ao longo do período de ensino não presencial emergencial poderão ocorrer em formato síncrono ou assíncrono. </li>
                <li>Os critérios de validação da frequência das atividades curriculares deverão ser descritos juntamente com os critérios de avaliação em campo especificado nos planos de ensino. </li>
            </ol>
            <p>
                A resolução mencionada acima se encontra neste <a href="http://www.prograd.ufscar.br/conselho-de-graduacao-1/arquivos-conselho-de-graduacao/reunioes/2020/resolucoes_2020/ResoluoCoG331.pdf" target="_blank">link</a>.  
            </p>
        </div>,
		id: 'controle-frequencia',
	},
	{
		titulo: 'Está sendo pensado algo que possa minimizar o conflito de horários de disciplinas?',
		desc:
        <p>
            A proposta do GT do CCET é que as disciplinas sejam assíncronas, ou seja, não tenham horários fixos, justamente 
            para dificultar a ocorrência desses conflitos.
        </p>,
		id: 'conflito-horario',
	},
	{
		titulo: 'Se houver Ensino Remoto no segundo semestre de 2020, será eletivo ou obrigatório?',
        desc: 
        <div>   
            <p>
                Será eletivo. Para minimizar possíveis dificuldades que os estudantes viriam a ter no ensino remoto a inscrição em atividades se tornou facultativa. Apenas os estudantes ingressantes em 2020 serão pré inscritos em atividades, contudo, os mesmos poderão realizar o cancelamento de tais atividades caso queiram.  
            </p>
            <p>
                Algumas soluções que amparam essa decisão se encontram na <b>Resolução CoG n°332</b> de 27/07/2020, sendo elas: 
            </p>
            <p>
                <b>Art.2º</b> O trancamento de matrícula poderá ser feito a qualquer momento por qualquer aluno,sendo retroativo ao início do período e bloco vigente no qual o aluno estiver inscrito. Durante o período de excepcionalidade, qualquer discente poderá solicitar um pedido de trancamento excepcional e adicional ao previsto no Regimento Geral dos Cursos de Graduação, com prazo de até 1 ano para cursos anuais e até 6 meses para cursos semestrais, prorrogáveis. 
            </p>
            <p>
                <b>Art.3º</b> Durante o período de excepcionalidade os estudantes não perderão vaga por falta de desempenho mínimo. 
            </p>
            <p>
                <b>Art.4º</b> O cancelamento da inscrição em atividades curriculares poderá ser feito a qualquer momento, com prazo limite até uma semana antes do encerramento das atividades sem prejuízo do IDID. 
            </p>
            <p>
                <b>Art.5º</b> Todas e todos os discentes que se encontram neste momento com matrícula ativa ou venham a ingressar na UFSCar ao longo do período de excepcionalidade terão seus prazos para integralização dos cursos estendidos por 2 anos. 
            </p>
            <p>
            A resolução mencionada acima se encontra neste <a href="http://www.prograd.ufscar.br/conselho-de-graduacao-1/arquivos-conselho-de-graduacao/reunioes/2020/resolucoes_2020/ResoluoCoG332.pdf">link</a>. 
            </p>
        </div>,
		id: 'eletivo-ou-obrigatorio',
    },
    {
		titulo: 'Quando serão as férias e quanto tempo irão durar?',
        desc: 
        <div>
            <p>
                Segundo o novo calendário acadêmico 2020/1 haverá um período de recesso entre os dias 27/10/2020 e 8/11/2020, contudo nada foi decidido sobre as férias após o final do semestre (16/01/2021). 
            </p>
            <p>
                O calendário completo está disponível <a href="http://www.prograd.ufscar.br/estudantes-de-graduacao/arquivos-estudantes/calendarios/2020/ENPE20201.pdf" target="_blank">aqui</a>
            </p>
        </div>,
		id: 'ferias',
    },
    {
		titulo: 'O Ensino Remoto em conjunto com o isolamento estão tendo um impacto negativo em meu estado psicológico. Existe algum canal da universidade para conseguir ajuda?',
        desc: 
        <div>
            <p>
                Sim! Todas as terças-feiras das 10h às 19h uma equipe da Psicologia estará disponível em uma plataforma online para acolher alunos, técnicos administrativos e professores que fazem parte do Departamento de Computação e que sintam necessidade de uma conversa terapêutica. Lembrando que não é um acompanhamento psicológico, é a escuta do que ocorre no aqui e agora, onde os atendimentos acontecem a partir dos princípios éticos psicológicos, respeitando de forma sigilosa a individualidade de cada um.  
            </p>
            <p>
                Para participar, envie um e-mail para <a href="mailto:plantaopsicanalitico@ufscar.br">plantaopsicanalitico@ufscar.br</a> durante o horário de atendimento. Em seguida você receberá uma resposta contendo um link para atendimento ou orientações sobre a lista de espera.   
            </p>
        </div>,
		id: 'plantao-psico',
    },
    {
		titulo: 'Vou ter dificuldades em cursar o semestre de forma remota, como posso informar isso ao departamento?',
        desc: 
        <p>Há duas formas indicadas para isso, a primeira é pelo <a href="https://forms.gle/XXSbfRAM78y9DnEH6" target="_blank">forms</a>. A segunda é por meio do <a href="mailto:secretaria.graduacao.dc@ufscar.br">email</a> da secretaria, porém recomendamos que use a primeira forma. 
        </p>
        ,
		id: 'sem-remota',
    },
    {
		titulo: 'A quantidade de disciplinas que poderão ser pegas juntamente com o estágio obrigatório será mantida?',
        desc: 
        <p>
            Provavelmente. Como as disciplinas devem continuar contando o mesmo número de créditos, a contagem deverá ser a mesma. Por exemplo, uma disciplina de 4 créditos (4 horas semanais), continuará sendo de 4 créditos mesmo no formato remoto, então, ela continuará contando 4 horas semanais. 
        </p>
        ,
		id: 'creditos',
    },
    {
		titulo: 'Como a universidade pretende incluir os alunos com pouco ou nenhum acesso à dispositivos eletrônicos ou internet durante o Ensino Remoto? ',
        desc: 
        <div>
            <p>
                A proposta de retomada das atividades regulares em formato ENPE, publicada pelo GT - Planejamento no dia 16/07/2020 contém planos para a concessão de chips com acesso a pacote de dados de internet, bem como empréstimo de notebooks, ou concessão de recurso financeiro para a aquisição destes (a critério da Pró-Reitoria de Administração). Alunos interessados serão avaliados através de um processo seletivo onde serão priorizados discentes de menor renda familiar. Tenha em mente que <b>este planejamento ainda não foi aprovado pelo CoG e, portanto, está sujeito a mudanças </b>.  
            </p>
            <p>
                Mais informações sobre a proposta do processo estão contidas <a href="http://www.prograd.ufscar.br/conselho-de-graduacao-1/arquivos-conselho-de-graduacao/Anexo5.Minuta_Processo_Seletivo_para_apoio_a_Inclusao_Digital.pdf">aqui</a>
            </p>       
        </div>,
		id: 'psicologico',
    },
];
const Certificados = (
	<>
		{content}
		<div class="accordion" id="accordion">
			{certficados.map(certficado => (
				<Certificado {...certficado} />
			))}
		</div>
	</>
);

export default Certificados;
