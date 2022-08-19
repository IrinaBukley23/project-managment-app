import styled from 'styled-components';

export const Welcome = styled.div`
  height: 85vh;
`;

export const Container = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Layout = styled.div`
  max-width: 1170px;
  margin: auto;
  height: 100vh;
  background-color: var(--color-background-light);
`;

export const H1 = styled.h1`
  margin-bottom: 30px;
  padding-top: 30px;
  font-size: 60px;
  color: rgb(12, 97, 97);
  display: flex;
  justify-content: center;
`;

export const SingBtnWrapper = styled.div`
  max-width: 1170px;
  margin: auto;
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Ul = styled.ul`
  margin-left: 25px;
  a {
    width: auto;
    height: auto;
    font-size: 24px;
    padding: 10px;
    border-radius: 3px;
    border: none;
    text-decoration: none;
    color: var(--color-text-light);
    background-color: var(--color-background-dark);
    cursor: pointer;
    transition: 0.5s ease-in;
    &:hover {
      box-shadow: 10px 5px 5px rgba(0, 0, 150, 0.2);
    }
  }
`;
export const main_Page_Link_wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;
