import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "./styles/scss/custom.scss";
import "react-tippy/dist/tippy.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faGraduationCap,
  faBook,
  faHome,
  faUser,
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
} from "@fortawesome/free-solid-svg-icons";

import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

import "./styles/css/contrast.css";

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host
  link: new HttpLink({ uri: `${process.env.REACT_APP_API_URL}/graphql` }),
  cache: new InMemoryCache(),
});

library.add(
  faGraduationCap,
  faBook,
  faHome,
  faUser,
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
  faChalkboardTeacher
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
