import React from "react";

const LinksRapidosContainer = ({children}) => {
    return (
      <div className=" pt-5 pt-md-4">
        <h4 className="mb-3">Links rápidos</h4>
        <div className="d-flex flex-wrap">
          {children}
        </div>
      </div>
    );
}

export default LinksRapidosContainer;
