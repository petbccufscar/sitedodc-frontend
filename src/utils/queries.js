import gql from "graphql-tag";

export const GET_PIES = gql`
  query {
    pies(where: {em_andamento_ne: true}) {
      titulo
      coordenador
      alunos_envolvidos2
      descricao
      documento {
        url
      }
    }
  }
`;

export const GET_PROJETOS_ANDAMENTO = gql`
  query {
    pies(where: {em_andamento: true}) {
      titulo
      coordenador
      alunos_envolvidos
      descricao
      data_inicio
      data_termino
      proex_num
    }
  }
`;

export const GET_INTERVALO = gql`
  query {
    inicio: anos(where: { Nome: "inicio" }) {
      Ano
    }
    mais_recente: anos(where: { Nome: "mais_recente" }) {
      Ano
    }
  }
`;

export const GET_CHEFIA = gql`
  query {
    galeriachefias(sort: "Ano_inicio:DESC") {
      Nome
      Cargo
      Ano_inicio,
      Ano_fim
      Foto {
        url
      }
    }
  }
`;

export const GET_INICIO = gql`
  query {
    eventos(limit: 5, sort: "Data:DESC") {
      Titulo
      Data
      Local
    }

    links(limit: 8) {
      Link
      Texto_alternativo
      Imagem {
        url
      }
    }

    noticias(limit: 4, sort: "_id:desc") {
      _id
      Imagem {
        url
      }
      Imagem_texto_alternativo
      Titulo
      Descricao
      createdAt
    }

    banners(limit: 5, sort: "Order:ASC", where: { Ativo: true }) {
      Imagem {
        url
      }
      Texto_alternativo
    }
  }
`;

export const GET_EVENTOS = gql`
  query {
    eventos(limit: 3, sort: "Publicacao:DESC") {
      Titulo
      Data
      Local
    }
  }
`;

export const GET_LINKS_RAPIDOS = gql`
  query {
    links(limit: 8) {
      Link
      Imagem {
        url
      }
    }
  }
`;

export const GET_ALUNOS = gql`
  query Alunos($ano: Int, $curso: String) {
    alunos(where: { Ano: $ano, Curso: $curso }, sort: "Nome:asc") {
      Nome
      Foto {
        url
      }
    }
  }
`;

export const GET_GRUPOS = gql`
  query {
    grupos(sort: "Nome:asc") {
      Nome
      Descricao
      Site
      Imagem {
        url
      }
    }
  }
`;

export const GET_FUNCIONARIOS = gql`
  query {
    funcionarios(sort: "Nome:asc") {
      Nome
      Area
      Foto {
        url
      }
      Telefone
      Email
    }
  }
`;

export const GET_NOTICIAS = gql`
  query Noticias($qnt: Int!) {
    noticias(limit: $qnt, sort: "_id:desc") {
      _id
      Imagem {
        url
      }
      Imagem_texto_alternativo
      Titulo
      Descricao
      createdAt
    }
  }
`;

export const GET_NOTICIA_COMPLETA = gql`
  query Noticia($id: ID!) {
    noticia(id: $id) {
      _id
      Titulo
      createdAt
      Tags {
        Nome
      }
      Descricao
      Conteudo
      Imagem {
        url
      }
      Imagem_texto_alternativo
    }
  }
`;

export const GET_DOCENTE = gql`
  query Docente($id: ID!) {
    docente(id: $id) {
      _id
      Nome
      Areas {
        Nome
      }
      Descricao
      Horas
      Lattes
      Tipo
      Nivel
      Telefone
      Email
      Site
      Nome
      Foto {
        url
      }
    }
  }
`;

export const GET_DOCENTES = gql`
  query {
    docentes(sort: "Nome:asc") {
      _id
      Nome
      Tipo
      Areas {
        Nome
      }
      Horas
      Email
      Telefone
      Nivel
      Foto {
        url
      }
    }
  }
`;

export const GET_LABORATORIOS = gql`
  query {
    laboratorios(sort: "Nome:asc") {
      Nome
      NomeExpandido
      Descricao
      Logo {
        url
      }
      Docentes {
        Nome
        Tipo
        Email
        Site
        Lattes
        Foto {
          url
        }
      }
    }
  }
`;

export const GET_BANNERS = gql`
  query {
    banners(sort: "Order:ASC", where: { Ativo: true }) {
      Imagem {
        url
      }
      Texto_alternativo
    }
  }
`;
