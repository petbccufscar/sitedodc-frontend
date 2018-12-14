import React from "react";

const MenuButton = props => {
  const { header, title, onClick } = props;

  return (
    <button
      className="btn btn-outline-primary btn-lg btn-block d-md-none"
      onClick={onClick}
    >
      <span
        className="d-inline-block mr-2 align-middle text-truncate font-weight-bold"
        style={{ width: "90%" }}
      >
        {(!(header === "") ? header + ": " : "") + title}
      </span>
      <span className="dropdown-toggle" />
    </button>
  );
};

export default MenuButton;
