import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Main_Board = styled.div`
  position: relative;
  min-width: 200px;
  height: 100px;
  margin: 10px;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 20px;
  color: var(--color-background-white);
  border-radius: 3px;
  background-color: var(--color-button-regular);
  transition: 0.5s ease-in;
  &:hover {
    background-color: #008b8b;
    box-shadow: 10px 5px 5px rgba(0, 0, 150, 0.2);
  }
`;
export const Delete_main_board = styled.div`
  position: absolute;
  right: 5px;
  bottom: 3px;
  transition: 0.5s ease-in;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;
export const Link = styled(NavLink)`
  width: 90%;
  height: 95%;
  text-decoration: none;
  color: white;
`;
export const Title = styled.div`
  font-size: 20px;
`;
export const Description = styled.div`
  font-size: 15px;
`;
