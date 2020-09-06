import { useEffect, useState } from 'react';
import withApollo from 'next-with-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import Head from 'next/head'

import "react-tippy/dist/tippy.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGraduationCap,
  faBook,
  faHome,
  faUser,
  faUserGraduate,
  faWrench,
  faUniversity,
  faGlobe,
  faAdjust,
  faMicroscope,
  faEnvelope,
  faUniversalAccess,
  faAngleRight,
  faExclamationTriangle,
  faPlus,
  faGlobeAmericas,
  faLink,
  faPhone,
  faChalkboardTeacher,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/scss/custom.scss";
import "../components/noticias/components/noticia.css";
import "../styles/css/contrast.css";
import "../components/vertical-tabs/tabStyle.css";

import TopBar from "../components/TopBar";

library.add(
  faGraduationCap,
  faBook,
  faHome,
  faUser,
  faUserGraduate,
  faWrench,
  faUniversity,
  faGlobe,
  faAdjust,
  faMicroscope,
  faEnvelope,
  faUniversalAccess,
  faAngleRight,
  faExclamationTriangle,
  faPlus,
  faGlobeAmericas,
  faLink,
  faPhone,
  faGraduationCap,
  faChalkboardTeacher,
  faFileDownload
);



function MyApp({ Component, pageProps, apollo }) {
  const [contrast,setContrast] = useState(false)
  
  const handleHighContrastClick = (e) => {
    e.preventDefault();
    localStorage.setItem("contrastState", "" + !contrast);
    setContrast(!contrast)
    document.body.classList = contrast ? ["contrast"] : [""];
  }

  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>DC - UFSCar</title>
      </Head>
      <TopBar onClick={handleHighContrastClick} />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: `${process.env.REACT_APP_API_URL}/graphql`,
    cache: new InMemoryCache().restore(initialState || {})
  });
})(MyApp);
