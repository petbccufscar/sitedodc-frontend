import React from "react";
import { TabList } from "react-web-tabs";

const SideMenu = props => {
  const { children, tabSelected } = props;

  return (
    <div className="col-md-3 mb-5" id="menu_area">
      <div className="border-right pr-2" id="side-menu">
        <TabList className="nav nav-pills flex-column pr-2">
          {React.Children.map(children, child => {
            return React.cloneElement(child, { tabSelected: tabSelected });
          })}
        </TabList>
      </div>
    </div>
  );
};

export default SideMenu;
