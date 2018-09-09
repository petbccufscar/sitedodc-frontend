import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "./styles/css/custom.css";
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
  faGlobe,
  faAdjust,
  faUniversalAccess
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faGraduationCap,
  faBook,
  faHome,
  faUser,
  faUniversity,
  faWrench,
  faGlobe,
  faAdjust,
  faUniversalAccess
);

ReactDOM.render(<App />, document.getElementById("root"));
