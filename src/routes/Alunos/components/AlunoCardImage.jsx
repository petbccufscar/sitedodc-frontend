import React from 'react';
import PropTypes from 'prop-types';


import avatar from "../../../images/avatar.png";
import { ImageLoader } from "../../../components/image-loader";

const AlunoCardImage = ({ foto }) => {
  return (
    <ImageLoader
      classnames="card-img-top fit-image-aluno"
      src={foto}
      fallback={avatar}
      alt="Foto do aluno"
      loaderHeight="250px"
    />
  );
};

AlunoCardImage.propTypes = {
  foto: PropTypes.string.isRequired,
}

export default AlunoCardImage;