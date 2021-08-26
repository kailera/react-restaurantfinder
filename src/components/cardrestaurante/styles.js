import styled from 'styled-components';

export const Restaurante = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 16px;
  background-color: ${props => props.theme.colors.background};
  border-left: 5px solid transparent;
  transition: 100ms ease;
  :hover {
    background-color: #fff;
    border-left: 5px solid ${props => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-flow: column;
`;

export const RestaurantInfoTitle = styled.span`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text_dark};
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 29px;
`;

export const RestaurantInfoAddress = styled.span`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text_dark};
  font-size: 0.8rem;
  font-weight: normal;
  line-height: 15px;
`;

export const MockPhoto = styled.div`
  margin-left: 5px;
  width: 70px;
  height: 70px;
  border-radius: 5px;
  object-fit: cover;
  background-color: ${props => props.theme.colors.primary};
`;

