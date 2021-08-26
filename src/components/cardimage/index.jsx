import React from 'react';

import { CardImage, CardTitle } from './styles.js';

const CardCarousel = ({photo, title}) => 
  <CardImage>
   <CardTitle>{title}</CardTitle>
  </CardImage>;


export default CardCarousel;