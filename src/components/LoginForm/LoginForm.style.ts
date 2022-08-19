import styled from 'styled-components';

export const Login_Form_main = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--color-background-light);
`;
export const Login_Form_container = styled.div`
  width: 300px;
  height: auto;
  margin-top: 100px;
  display: grid;
  grid-template-columns: 200px 450px;
`;
export const Login_Form = styled.form`
  width: 300px;
  height: auto;
  padding: 20px;
  border-radius: 5px;
  border: 0.5px solid grey;
  background-color: var(--color-background-white);
  &:hover {
    box-shadow: 10px 5px 5px rgba(0, 0, 150, 0.2);
  }
`;
export const Login_Form_input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 3px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const Login_Form_input_submit = styled.input`
  width: 100%;
  height: 45px;
  background-color: var(--color-button-regular);
  color: white;
  border: none;
  border-radius: 4px;
  color: var(--color-text-light);
  cursor: pointer;
  &:active {
    background-color: var(--color-button-active);
  }
`;
export const errors = styled.div`
  height: 20px;
  color: red;
`;
