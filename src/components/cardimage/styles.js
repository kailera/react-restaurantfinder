import styled from 'styled-components';

export const CardImage = styled.div`
  width: 90px;
  height: 90px;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 6px;
  display: flex;
  flex-direction:column;
  justify-content:flex-end;
`;

export const CardTitle = styled.span`
  font-family: ${props => props.theme.fonts.regular};
  font-size: 1rem;
  color: #fff;
  padding: 5px;
`;
