import React from "react";
import { TabProvider } from "react-web-tabs";
import "./tabStyle.css";

class VerticalTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabSelected: {
        panelId: null,
        header: null,
        title: null
      },
      showMenu: false
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleButtonClick(e) {
    e.preventDefault();
    this.setState({ showMenu: !this.state.showMenu });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behaviour: "smooth"
    });
  }

  handleChange(tabId) {
    const children = this.props.children[0].props.children;
    const tab = children.find(tab => tab.props.panelId === tabId);
    this.setState({
      tabSelected: {
        panelId: tab.props.panelId,
        title: tab.props.title,
        header: tab.props.header
      },
      showMenu: false
    });
    if (window.innerWidth < 768) {
      this.scrollToTop();
    }
  }

  render() {
    const { tabSelected, showMenu } = this.state;

    return (
      <TabProvider
        onChange={tabId => this.handleChange(tabId)}
        defaultTab={this.defaultTab}
        vertical
      >
        <section>
          <div className="container">
            <div className="row mt-4">
              {React.cloneElement(this.props.children[0], {
                tabSelected: tabSelected,
                showMenu: showMenu,
                onClick: this.handleButtonClick
              })}
              {this.props.children[1]}
            </div>
          </div>
        </section>
      </TabProvider>
    );
  }
}

export default VerticalTabs;
