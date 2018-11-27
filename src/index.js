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

ReactDOM.render(<App />, document.getElementById("root"));
