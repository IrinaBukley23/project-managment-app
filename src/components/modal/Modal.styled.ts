import styled from 'styled-components';
import { device } from '../../containers/header/header.style';

export const Wrapper = styled.div`
  position: fixed;
  overflow: auto;
  left: 0;
  top: 50px;
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface IModal {
  isOpen: boolean;
}
export const Modal = styled.div<IModal>`
  height: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
`;
export const Btn = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;
export const Body = styled.div`
  @media ${device.desktop} {
    width: 500px;
  }
  @media ${device.tablet} {
    width: 320px;
  }

  height: auto;
  margin: auto;
  background-color: white;
  margin-top: 5%;
  border-radius: 10px;
  padding-bottom: 10px;
  position: relative;
`;
export const Close = `
  margin-right: 10px;
  font-size: 40px;
  color: var(--color-gray);
  cursor: pointer;
  margin-left: 93%;
`;
