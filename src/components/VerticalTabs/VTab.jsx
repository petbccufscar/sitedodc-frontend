import React from "react";
import { Tab } from "react-web-tabs";

class VTab extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.panelId === nextProps.tabSelected) {
      return true;
    } else if (this.props.panelId === this.props.tabSelected) {
      return true;
    }
    return false;
  }

  render() {
    const { panelId, tabSelected, children, showHeader, header } = this.props;
    const selected = panelId === tabSelected;

    return (
      <React.Fragment>
        {showHeader && <h6 className="p-2 mt-4">{header}</h6>}
        <Tab
          className={"nav-link" + (selected ? " show active" : "")}
          tabFor={panelId}
        >
          {children}
        </Tab>
      </React.Fragment>
    );
  }
}

export default VTab;
