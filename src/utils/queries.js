import gql from "graphql-tag";

export const GET_INICIO = gql`
  query {
    eventos(limit: 3, sort: "Publicacao:DESC") {
      Titulo
      Data
      Local
    }

    links(limit: 8) {
      Link
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

export const GET_FUNCIONARIOS = gql`
  query {
    funcionarios(sort: "Nome:desc") {
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
