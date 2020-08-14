import React from 'react';

import { DefaultImage, GatsbyImage } from './styles';

const Image = ({ image, ...properties }) => {
  
    const fluid = image?.childImageSharp?.fluid;
    const url = image?.publicURL;
    const alt = image?.alt;  

  return (
    <GatsbyImage fluid={fluid} alt={alt} loading="lazy" {...properties} />
  );
};

export default Image;
