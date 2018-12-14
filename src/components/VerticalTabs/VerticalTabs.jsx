import React from "react";
import { TabProvider } from "react-web-tabs";
import "./tabStyle.css";

class VerticalTabs extends React.Component {
  constructor(props) {
    super(props);
    this.defaultTab = this.props.defaultTab;
    this.state = {
      tabSelected: this.props.defaultTab
    };
  }

  render() {
    const { tabSelected } = this.state;

    return (
      <TabProvider
        onChange={tabId => {
          this.setState({ tabSelected: tabId });
        }}
        defaultTab={this.defaultTab}
        vertical
      >
        <section>
          <div className="container">
            <div className="row mt-4">
              {React.Children.map(this.props.children, child => {
                return React.cloneElement(child, { tabSelected: tabSelected });
              })}
              ;
            </div>
          </div>
        </section>
      </TabProvider>
    );
  }
}

export default VerticalTabs;
