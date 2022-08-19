import styled from 'styled-components';

export const Edit = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Delete_Button = styled.button`
  width: auto;
  height: 45px;
  margin: 10px;
  padding: 10px;
  border: none;
  background-color: var(--color-button-regular);
  color: var(--color-text-light);
  border-radius: 3px;
  transition: 0.5s ease-in;
  &:hover {
    box-shadow: 10px 5px 5px rgba(0, 0, 150, 0.2);
  }
`;
