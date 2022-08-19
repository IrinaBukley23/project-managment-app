import styled from 'styled-components';

export const Profile_Form_main = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--color-background-white);
`;
export const Profile_Form_container = styled.div`
  min-width: 650px;
  height: 330px;
  margin-top: 100px;
  display: grid;
  grid-template-columns: 200px 450px;
  border: 0.5px solid grey;
`;
export const User_info = styled.div`
  width: 200px;
  height: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 0.5px solid grey;
`;
export const Profile_Form = styled.form`
  width: 450px;
  height: 330px;
  padding: 20px;
`;
export const Profile_Form_input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const Profile_Form_input_submit = styled.input`
  width: 100%;
  height: 45px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
export const Profile_Form_btns_wrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
