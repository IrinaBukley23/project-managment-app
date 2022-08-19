import React from 'react';
import * as Styled from './Button.style';

interface ButtonProps {
  className?: string;
  textButton: string;
  linkPath?: string;
  onClick?: (() => void) | ((e: React.MouseEvent<HTMLDivElement>) => void);
  id?: string;
}
const Button = ({ className, linkPath, textButton, onClick, id }: ButtonProps) => {
  return (
    <Styled.Button onClick={onClick} className={className} id={id}>
      <Styled.Link role="button" to={linkPath || ''}>
        {textButton}
      </Styled.Link>
    </Styled.Button>
  );
};

export default Button;
