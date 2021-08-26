import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { CardCarousel, CardRestaurant } from '../../components';

import {
  Container,
  Search,
  Logo,
  Map,
  Wrapper,
  CarouselTitle,
  Carousel
} from './styles.js';
import Slider from 'react-slick';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <TextField
            label="Pesquisar"
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
          </TextField>
          <CarouselTitle>Na sua area</CarouselTitle>
          <Carousel {...settings}>
            <CardCarousel title="Restaurante" />
            <CardCarousel title="Restaurante" />
            <CardCarousel title="Restaurante" />
            <CardCarousel title="Restaurante" />
          </Carousel>
        </Search>
        <CardRestaurant title="tonhao" address="monty hall 111" rating="4"/>
      </Container>
      <Map />
    </Wrapper>
  );
};
export default Home;
