import React from 'react';
import ReactMarkdown from 'react-markdown';
import Certificado from './Certificado';
import logoEADis from '../../../images/logos/logoEADis.png'

const content = (<>
    <center>			
        <img src={logoEADis}/>
    </center>

    <p>Perguntas Frequentes Relacionadas ao Ensino Remoto no DC/UFSCar</p>
    <p>Tenha em mente que várias discussões ainda estão ocorrendo entre os coordenadores tanto do DC quanto da Universidade, portanto é possível que algumas de suas dúvidas ainda não tenham uma resposta definitiva.</p>

    <p>Última atualização: 13/07/2020</p></>);

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
		titulo:'Os semestres oferecidos contarão no tempo que o aluno tem para concluir o curso?',
		desc:  
            <p>
                Existe essa discussão em instâncias superiores, e a tendência é que os alunos ganhem mais tempo para se formar,
                para que essa pandemia não acabe sendo motivo de jubilamento. Nada está definido ainda, como por exemplo quanto
                tempo será “dado” a mais para se formar, está tudo sendo discutido.
            </p>,
		id: 'tempo-de-conclusao'
	},

	{
		titulo: 'Haverá algum limite de matérias/créditos que os alunos poderão cursar?',
		desc: 
            <p>
                A tendência é que exista sim um limite, porém não se sabe ainda qual será. Está também em discussão na ProGrad.
            </p>,
		id: 'limite-creditos',
	},
	{
		titulo: 'As disciplinas seguirão os mesmos requisitos que existem na normalidade?',
		desc: 
            <p>
                Cada Centro está discutindo isso e enviando sugestões ao GT da ProGrad. Mas novamente, ainda está sendo discutido.
            </p>,
		id: 'requisitos',
	},
	{
		titulo: 'Como será o controle de frequência na modalidade de Ensino Remoto?',
		desc: <p>
            A Universidade terá normas para isso, porém o docente tem liberdade de definir como será o controle de 
            frequência da sua disciplina, desde que não desrespeite as normas. De qualquer forma, a SEaD UFSCar tem 
            normativas para o controle de frequência de cursos totalmente à distância. Nessas normativas, o controle de 
            frequência deve ser feito pela entrega de produtos, ou seja, pela entrega de atividades, questionários, etc. A 
            Universidade pode adotar essas normativas caso tenhamos de fato ensino remoto temporário, porém ainda não há 
            como saber ao certo.
        </p>,
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
        <p>
            Isso está sendo bastante discutido e a tendência é que, se um(a) estudante tiver algum impedimento para realizar 
            o semestre na modalidade remota (seja por questões de saúde, psicológicas, de acesso ou de qualquer outra 
            natureza) ele(a) não será prejudicado de nenhuma forma por isso. Assim como já existe essa opção na modalidade 
            presencial.
        </p>
        ,
		id: 'eletivo-ou-obrigatorio',
    },
    {
		titulo: 'Quando serão as férias e quanto tempo irão durar?',
        desc: 
        <p>
            Ainda não há como saber quando serão as férias, são muitas coisas a se considerar e a normalidade está muito 
            distante. O que se sabe é que as férias não serão nas épocas comuns (Dezembro, Janeiro e Fevereiro), e que muito 
            provavelmente terão uma duração menor.
        </p>
        ,
		id: 'ferias',
    },
    {
		titulo: 'Vou ter dificuldades em cursar o semestre de forma remota, como posso informar isso ao departamento?',
        desc: 
        <p>Há duas formas indicadas para isso, a primeira é pelo <a href="https://forms.gle/XXSbfRAM78y9DnEH6" target="_blank">Forms</a>. A segunda é por meio do <a href="mailto:secretaria.graduacao.dc@ufscar.br">EMAIL</a> da secretaria, porém recomendamos que use a primeira forma. 
        </p>
        ,
		id: 'sem-remota',
    },
    {
		titulo: 'A quantidade de disciplinas que poderão ser pegas juntamente com o estágio obrigatório será mantida?',
        desc: 
        <p>Provavelmente. Como as disciplinas devem continuar contando o mesmo número de créditos, a contagem deverá ser a mesma. Por exemplo, uma disciplina de 4 créditos (4 horas semanais), continuará sendo de 4 créditos mesmo no formato remoto, então, ela continuará contando 4 horas semanais. 
                    </p>
        ,
		id: 'creditos',
    },
    {
		titulo: 'O Ensino Remoto em conjunto com o isolamento estão tendo um impacto negativo em meu estado psicológico. Existe algum canal da faculdade para conseguir ajuda?',
        desc: 
            <div>
            <p>
                Sim! Todas as terças-feiras das 10h às 19h a equipe da Psicologia estará disponível em uma plataforma online 
                para acolher alunos, técnicos administrativos e professores que fazem parte do Departamento de Computação que 
                sintam necessidade de uma conversa terapêutica. Lembrando que não é um acompanhamento psicológico, é a escuta do 
                que ocorre no aqui e agora, onde os atendimentos acontecem a partir dos princípios éticos psicológicos, 
                respeitando de forma sigilosa a individualidade de cada um. 
            </p>       
            <p>Para participar, envie um e-mail para plantaopsicanalitico@ufscar.br durante o horário de atendimento. Em 
            seguida você receberá uma resposta contendo um link para atendimento ou orientações sobre a lista de espera.
            </p></div>,
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
