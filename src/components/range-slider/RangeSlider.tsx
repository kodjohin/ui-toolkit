import React, { ChangeEvent, FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { useState } from 'react';

interface StyledProps {
  width: number;
  bgcolor: string;
}

const StyledRangeSlider = styled.div<StyledProps>`
  --w: ${(props) => props.width}px;
  --bgc: ${(props) => props.bgcolor};
  --thumb-size: 15px;

  /* border: 1px solid pink; */
  width: var(--w);
  height: 100px;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  gap: 10px;

  input {
    cursor: pointer;
    appearance: none;
    width: var(--w);
    height: var(--thumb-size);
    border-radius: 50px;
    overflow: hidden;

    //** Create a border around the slider inner */
    box-shadow: 0 0 0 0.2em var(--bgc);
    background: var(--bgc);

    ::-webkit-slider-thumb {
      appearance: none;
      width: var(--thumb-size);
      height: var(--thumb-size);
      border-radius: 50%;
      border: 2px solid hsl(335, 100%, 65%);

      //** Create a gradient on box-shadow */
      box-shadow: calc(var(--w) * -1 - 100px) 0 50px var(--w) hsl(6, 100%, 80%),
        calc(var(--w) * -1 - 5px) 10px 10px var(--w) hsl(335, 100%, 65%);
      /* box-shadow: calc(var(--w) * -1 - 5px) 10px 10px var(--w)
				hsl(335, 100%, 65%); */
    }
    ::-moz-range-thumb {
      appearance: none;
      width: calc(var(--thumb-size) - 5px);
      height: calc(var(--thumb-size) - 5px);
      border-radius: 50%;
      border: 2px solid hsl(335, 100%, 65%);
      box-shadow: calc(var(--w) * -1 - 100px) 0 50px var(--w) hsl(6, 100%, 80%),
        calc(var(--w) * -1 - 5px) 0 0 var(--w) hsl(335, 100%, 65%);
    }
    :active::-webkit-slider-thumb {
      background: #fff;
    }

    :focus {
      /* outline: none;
			box-shadow: 0 0 0 0.1em #fff; */
    }
  }
  > div {
    display: flex;
    justify-content: space-between;
    font-size: 0.7rem;
  }
`;
export interface Props extends HTMLAttributes<HTMLInputElement> {
  label: string;
  width: number;
  bgcolor: string;
}

const RangeSlider: FC<Props> = ({ label, ...props }) => {
  const [value, setValue] = useState(20);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(parseInt(e.target.value));

  return (
    <StyledRangeSlider {...props}>
      <label htmlFor="range-slider">{label}</label>
      <input
        type="range"
        min="0"
        max="100"
        defaultValue={value}
        step="any"
        onChange={(e) => handleChange(e)}
      />
      <div>
        <span>0</span>
        <span>{Number(value).toFixed(5)}</span>
        <span>100</span>
      </div>
    </StyledRangeSlider>
  );
};

export default RangeSlider;
