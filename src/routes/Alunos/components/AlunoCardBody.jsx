import React from 'react';
import PropTypes from 'prop-types';

const AlunoCardBody = ({ nome = ' '}) => {
  return (
    <div className="card-body text-center">
      <h5 className="card-title">{ nome }</h5>
    </div>
  );
};

AlunoCardBody.propTypes = {
  nome: PropTypes.string.isRequired,
}

export default AlunoCardBody;