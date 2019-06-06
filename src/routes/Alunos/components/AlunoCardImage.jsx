import React from 'react';
import PropTypes from 'prop-types';


import avatar from "../../../images/avatar.png";
import { ImageLoader } from "../../../components/image-loader";

const AlunoCardImage = ({ foto }) => {
  return (
    <ImageLoader
      classnames="card-img-top fit-image"
      src={foto}
      fallback={avatar}
      alt="Foto do aluno"
      loaderHeight="222px"
    />
  );
};

AlunoCardImage.propTypes = {
  foto: PropTypes.string.isRequired,
}

export default AlunoCardImage;