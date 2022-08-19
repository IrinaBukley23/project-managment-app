import styled from 'styled-components';
import { device } from '../header/header.style';

export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--color-text-light);
  background-color: var(--color-background-dark);
`;

export const RsSchoolLink = styled.a`
  text-decoration: none;
  color: var(--color-text-light);
  margin: 0 10px;

  img {
    width: 100px;
    height: 40px;
  }
`;

export const GitLinksContainer = styled.div`
  @media ${device.desktop} {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 200px;
  }
  @media ${device.tablet} {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 200px;
  }
`;

export const GitImg = styled.img`
  margin: 0 5px;
`;

export const GitLink = styled.a`
  display: flex;
  justify-content: center;
  margin-right: 0 5px;
  text-decoration: none;
  color: var(--color-text-light);

  img {
    width: 20px;
  }
`;
