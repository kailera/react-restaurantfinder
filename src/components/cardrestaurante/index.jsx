import React from 'react';
import ReactStars from 'react-rating-stars-component';
import {
  Restaurant,
  RestaurantInfo,
  RestaurantInfoTitle,
  RestaurantInfoAddress,
  MockPhoto
} from './styles.js';

const CardRestaurant = ({ photo, title, address, rating }) => (
  <Restaurant>
    <RestaurantInfo>
      <RestaurantInfoTitle>{title}</RestaurantInfoTitle>
      <ReactStars
        count={5}
        value={rating}
        edit={false}
        isHalf
        activeColor="#e7711c"
      />
      <RestaurantInfoAddress>{address}</RestaurantInfoAddress>
    </RestaurantInfo>
    <MockPhoto />
  </Restaurant>
);

export default CardRestaurant;
