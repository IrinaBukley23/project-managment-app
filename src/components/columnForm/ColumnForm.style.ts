import styled from 'styled-components';

export const Form = styled.form`
  margin: auto;
  min-width: 300px;
  max-width: 450px;
  height: 330px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h4`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`;
export const Form_input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const Form_input_submit = styled.input`
  width: 100%;
  height: 45px;
  padding: 12px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
