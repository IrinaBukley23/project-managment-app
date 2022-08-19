import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 500px;
  height: auto;
  margin: auto;
  background-color: white;
  margin-top: 5%;
  border-radius: 10px;
  padding: 10px 40px 20px;
  position: relative;
`;
export const Icon = styled.div`
  color: red;
  font-size: 22px;
  padding: 8px 18px 12px;
  border: 3px solid red;
  border-radius: 50%;
  width: 60px;
  margin: 0 auto 20px;
`;
export const Title = styled.h3`
  font-size: 26px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
`;
export const Info = styled.p`
  font-size: 22px;
  text-align: justify;
  margin-bottom: 20px;
`;

export const Action = styled.div`
  display: flex;
  justify-content: space-around;
`;
