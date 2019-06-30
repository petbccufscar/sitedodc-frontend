import React from "react";
import PropTypes from "prop-types";

const AvatarCardBody = ({ nome = " ", children }) => {
  return (
    <div className="card-body text-center">
      <h5 className="card-title">{nome}</h5>
      {children}
    </div>
  );
};

AvatarCardBody.propTypes = {
  nome: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default AvatarCardBody;