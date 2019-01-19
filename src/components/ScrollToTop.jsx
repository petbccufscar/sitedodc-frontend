import { Component } from "react";
import { withRouter } from "react-router";

class ScrollToTop extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
    var menu = document.getElementById("navbarSupportedContent");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  }

  render() {
    return this.props.children;
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.location !== nextProps.location) {
      return true;
    }
    return false;
  }
}

export default withRouter(ScrollToTop);
