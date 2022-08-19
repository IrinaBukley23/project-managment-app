import React from 'react';
import * as Styled from './Select.style';

interface SelectProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { text: string; value: string }[];
}
const Select = ({ onChange, options }: SelectProps) => {
  return (
    <Styled.Select onChange={onChange}>
      {options.map((el, idx) => (
        <option key={idx} value={el.value}>
          {el.text}
        </option>
      ))}
    </Styled.Select>
  );
};

export default Select;
