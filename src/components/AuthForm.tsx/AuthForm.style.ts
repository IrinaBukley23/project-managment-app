import styled from 'styled-components';
import Button from '../button/Button';

export const Auth_Form_main = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--color-background-light);
`;
export const Auth_Form_container = styled.div`
  min-width: 300px;
  height: auto;
  margin-top: 100px;
  border: 0.5px solid grey;
  border-radius: 5px;
  background-color: var(--color-background-white);
  transition: 0.5s ease-in;
  &:hover {
    box-shadow: 10px 5px 5px rgba(0, 0, 150, 0.2);
  }
`;
export const Auth_Form = styled.form`
  min-width: 300px;
  height: auto;
  padding: 20px;
`;
export const Auth_Form_input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const Auth_Form_input_submit = styled.input`
  width: 100%;
  height: 45px;
  margin-top: 15px;
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
export const Auth_Form_redirect_button = styled(Button)`
  width: 100%;
  height: 45px;
  margin-top: 15px;
  margin-left: 0;
  text-align: center;
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
