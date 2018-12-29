import React from 'react';
import { ImageLoader } from "../../../components/image-loader";

import { imageContainer, groupImage } from './style';

const TeamImage = ({ src, title, alt }) => (
  <div className={imageContainer}>
    <ImageLoader
      classnames={`rounded ${groupImage}`}
      src={src}
      alt={alt}
      title={title}
    />
  </div>
);

export default TeamImage;