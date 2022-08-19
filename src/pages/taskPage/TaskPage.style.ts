import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 7px auto;
  width: 30%;
  color: var(--color-text-light);
`;

export const Task_block = styled.div`
  background-color: var(--color-background-dark);
  padding: 5px;
  min-height: 60px;
  border-radius: 5px;
  box-shadow: 0 1px 0 var(--color-background-dark-60);
  position: relative;
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

export const Btn_block = styled.div`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 10px;
`;
