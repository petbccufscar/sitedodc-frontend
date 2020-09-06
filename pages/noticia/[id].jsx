import React from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import NoticiaCompleta from "../../components/noticias/components/NoticiaCompleta";
import NoticiaCompletaLoader from "../../components/noticias/components/noticia_completa_loader";
import { useRouter } from 'next/router'
import { GraphQLClient } from "graphql-request";

import { Query } from "react-apollo";
import { GET_NOTICIA_COMPLETA, GET_NOTICIAS_ID } from "../../utils/queries";

const graphQlClient =  new GraphQLClient(`${process.env.REACT_APP_API_URL}/graphql`)


function Noticia({data}){
  const router = useRouter()
    
  if (!router.isFallback && !data) {
    return <NaoEncontrado />
  }
  
  if(router.isFallback){
    return <div>Carregando</div>
  }

  const { id } = router.query
  
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb endereco="/mais-noticias">Noticias</Breadcrumb>
          <Breadcrumb bold>Visualizando notícia</Breadcrumb>
        </Breadcrumbs>
        <div className="container">
          {data ? <NoticiaCompleta noticia={data.noticia} />: 
          <Query
            query={GET_NOTICIA_COMPLETA}
            variables={{ id }}
          >
            {({ loading, error, data }) => {
              if (loading) {
                return <NoticiaCompletaLoader />;
              }
              if (error) {
                return `Error! ${error.message}`;
              }
              return <NoticiaCompleta noticia={data.noticia} />;
            }}
          </Query>
        }
        </div>
      </React.Fragment>
    );

}

export async function getStaticProps({ params}) {
  const {id} = params
  
  const data = await graphQlClient.request(GET_NOTICIA_COMPLETA, {
    id,
  });

  const revalidate = 60 * 60 // 1h

  
  // Pass data to the page via props
  return { props: { data },revalidate }
}

export async function getStaticPaths(){
  let start = 0;
  let stop = false;
  const ids = []
  
  do {
    const data = await graphQlClient.request(GET_NOTICIAS_ID,{qnt:12,start});
    ids.concat(data.noticias.map(noticia => noticia._id))
    
    if (data.noticias.length !== 12) {
      stop=true
    } else {
      start += 12
    }
  } while(stop !== true)
  
  return {
    paths: ids.map(id => `/noticia/${id}`),
    fallback: true
  }
}

export default Noticia;
