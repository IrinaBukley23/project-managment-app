import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled.div`
  width: auto;
  height: 45px;
  margin: 10px;
  padding: 10px;
  border: none;
  background-color: var(--color-button-regular);
  border-radius: 3px;
  transition: 0.5s ease-in;
  &:hover {
    box-shadow: 10px 5px 5px rgba(0, 0, 150, 0.2);
  }
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: var(--color-text-light);
`;
