import React from "react";
import { TabList } from "react-web-tabs";
import MenuButton from "./MenuButton";

const SideMenu = props => {
  const { children, showMenu, onClick } = props;
  const { panelId, header, title } = props.tabSelected;

  return (
    <div className="col-md-3 mb-5" id="menu_area">
      <MenuButton header={header} title={title} onClick={onClick} />
      <div
        className={"border-right pr-2" + (!showMenu ? " d-none d-md-block" : "")}
        id="side-menu"
      >
        <TabList className={"nav nav-pills flex-column pr-2"}>
          {React.Children.map(children, child => {
            return React.cloneElement(child, { tabSelected: panelId });
          })}
        </TabList>
      </div>
    </div>
  );
};

export default SideMenu;
