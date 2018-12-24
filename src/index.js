import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "./styles/scss/custom.scss";
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
  faPhone
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
  link: new HttpLink({ uri: "http://159.89.232.182:1337/graphql" }),
  cache: new InMemoryCache()
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
  faPhone
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
