import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Board = styled.div`
  width: 100%;
  height: calc(100vh - 250px);
  display: flex;
  overflow-x: auto;
  padding: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const Title = styled.h3`
  margin: 30px auto;
  font-size: 36px;
`;

export const Link = styled(NavLink)`
  width: 90%;
  height: 95%;
  text-decoration: none;
  color: white;
`;
