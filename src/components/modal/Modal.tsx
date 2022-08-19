import React from 'react';
import Button from '../button/Button';

import * as Styled from './Modal.styled';

interface IModal {
  handleClose: () => void;
  children: React.ReactNode;
  isOpen: boolean;
}

const Modal = ({ isOpen, children, handleClose }: IModal) => {
  return (
    <Styled.Modal isOpen={isOpen}>
      <Styled.Wrapper>
        <Styled.Body>
          {children}
          <Styled.Btn>
            <Button onClick={handleClose} textButton="✖" />
          </Styled.Btn>
        </Styled.Body>
      </Styled.Wrapper>
    </Styled.Modal>
  );
};

export default Modal;
