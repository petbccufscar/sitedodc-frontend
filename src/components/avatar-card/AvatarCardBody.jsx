import React from 'react';
import PropTypes from 'prop-types';

const AvatarCardBody = ({ nome = ' '}) => {
  return (
    <div className="card-body text-center">
      <h5 className="card-title">{ nome }</h5>
    </div>
  );
};

AvatarCardBody.propTypes = {
  nome: PropTypes.string.isRequired,
}

export default AvatarCardBody;