import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGraduationCap,
  faBook,
  faHome,
  faUser,
  faWrench,
  faUniversity,
  faEnvelope,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faGraduationCap,
  faBook,
  faHome,
  faUser,
  faUniversity,
  faWrench,
  faEnvelope,
  faPhone
);

ReactDOM.render(<App />, document.getElementById("root"));
