import styled from 'styled-components';

export const Task_block = styled.div`
  background-color: var(--color-background-dark);
  margin: 7px 0;
  padding: 5px;
  min-height: 60px;
  width: calc(100%-20px);
  border-radius: 5px;
  box-shadow: 0 1px 0 var(--color-background-dark-60);
  position: relative;
  a {
    color: var(--color-text-light);
    text-decoration: none;
  }
`;

export const Title = styled.h4`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
`;
export const Descr = styled.div`
  font-size: 16px;
  margin-bottom: 15px;
`;
export const User = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Delete_main_board = styled.div`
  position: absolute;
  right: 5px;
  bottom: 3px;
  font-size: 24px;
  transition: 0.5s ease-in;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;
