import styled from 'styled-components';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  min-width: 270px;
  margin-right: 30px;
  padding: 10px 10px 30px 10px;
  border-radius: 5px;
  background-color: #008b8b;
  color: var(--color-background-white);
  border: 1px solid var(--color-background-dark);
  align-self: flex-start;
  position: relative;
  transition: 0.5s ease-in;
  &:hover {
    box-shadow: 10px 5px 5px rgba(0, 0, 150, 0.2);
  }
`;

export const Title = styled.div`
  font-weight: 600;
`;

export const Task_list = styled.div`
  overflow-x: auto;
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

export const Btn_block = styled.div`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 10px;
`;
