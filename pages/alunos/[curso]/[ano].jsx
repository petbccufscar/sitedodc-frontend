import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../../components/Breadcrumbs";
import {
  AvatarCardImage,
  AvatarCardBody,
} from "../../../components/avatar-card/avatar_card";
import { CardContainer, FourCards } from "../../../components/cards";

import { Query } from "react-apollo";
import { GraphQLClient } from "graphql-request";
import { useRouter } from 'next/router'
import { GET_ALUNOS } from "../../../utils/queries";
import NaoEncontrado from "../../404";

const graphQlClient =  new GraphQLClient(`${process.env.REACT_APP_API_URL}/graphql`)

function Alunos ({data}){
  const router = useRouter()

  if (!router.isFallback && (!data?.curso || !data?.ano)) {
    return <NaoEncontrado />
  }

  if(router.isFallback){
    return <div>Carregando</div>
  }

  const { curso, ano } = data!==undefined ? data : router.query

    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb endereco="/alunos">Alunos</Breadcrumb>
          <Breadcrumb bold>
            {curso} {ano}
          </Breadcrumb>
        </Breadcrumbs>

        <div className="container">
          <CardContainer>
          {data ? data.alunos.map((aluno, index) => (
                  <FourCards>
                    <AvatarCardImage foto={aluno.Foto ? `${process.env.REACT_APP_API_URL}/${aluno.Foto.url}` : null} />
                    <AvatarCardBody nome={aluno.Nome} />
                  </FourCards>
                )) : 
            <Query query={GET_ALUNOS(ano,curso.toUpperCase())}>
              {({ loading, error, data }) => {
                if (loading) {
                  return <div />;
                }
                if (error) {
                  return `Error! ${error.message}`;
                }

                return data.alunos.map((aluno, index) => (
                  <FourCards>
                    <AvatarCardImage foto={aluno.Foto ? `${process.env.REACT_APP_API_URL}/${aluno.Foto.url}` : null} />
                    <AvatarCardBody nome={aluno.Nome} />
                  </FourCards>
                ));
              }}
            </Query>
}
          </CardContainer>
        </div>
      </React.Fragment>
    );
}

export default Alunos;

export async function getStaticProps({ params}) {
    const {ano, curso} = params
    const data = await graphQlClient.request(GET_ALUNOS(ano,curso.toUpperCase()));
  
    // Pass data to the page via props
    return { props: { data } }
}

export async function getStaticPaths(){
  const range = n => Array.from(Array(n).keys())

  const currentYear = new Date().getFullYear();
  const startYearBCC = 1975;
  const startYearENC = 1992;
  const yearsBCC = currentYear - startYearBCC + 1;
  const yearsENC = currentYear - startYearENC + 1;

  const bccRange = range(yearsBCC)
  const encRange = range(yearsENC)

  return {
    paths: bccRange.map(year => `/alunos/bcc/${year+startYearBCC}`).concat(encRange.map(year=> `/alunos/enc/${year+startYearENC}`)),
    fallback: true
  }
}
