import React from "react";

const TabPanelContainer = props => {
  const { children } = props;
  return (
    <div className="col my-tabs-panel-wrapper">
      <div className="tab-content text-justify" id="conteudo_area">
        {children}
      </div>
    </div>
  );
};

export default TabPanelContainer;
