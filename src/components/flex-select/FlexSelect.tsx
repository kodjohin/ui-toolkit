import React, { MouseEvent, FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface StyledProps {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;
}
export interface Props extends HTMLAttributes<HTMLDivElement> {
  data: Array<string>;
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;
}
const StyledSelect = styled.div<StyledProps>`
  --w: ${(props) => props.width}px;
  --h: ${(props) => props.height}px;
  --br: ${(props) => props.borderRadius}px;
  --bgc: ${(props) => props.backgroundColor};
  --tColor: white;

  width: var(--w);
  height: var(--h);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  user-select: none;
  font-size: 0.8rem;
  color: var(--tColor);
  font-family: 'Roboto', sans-serif;

  .selectopt {
    :first-child {
      margin-bottom: 1px;
    }
    input {
      opacity: 0;
      position: absolute;
      left: -99999px;

      :checked + label {
        order: 1;
        z-index: 2;
        background: var(--bgc);
        border-top: none;
        position: relative;
        color: var(--tColor);
      }
      :checked + label:before {
        height: var(--h);
        position: absolute;
        right: 0;
        width: 40px;
        content: '';
        color: var(--tColor);
      }
      :checked + label:after {
        content: '';
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid white;
        position: absolute;
        right: 10px;
        top: calc(50% - 2.5px);
        pointer-events: none;
        z-index: 3;
        color: var(--tColor);
      }
    }
    label {
      padding: 0 30px 0 10px;
      min-height: var(--h);
      border-radius: var(--br);
      background: var(--bgc);
      display: flex;
      align-items: center;
      border-top: rgba(100, 100, 100, 0.2) solid 1px;
      position: absolute;
      top: 0;
      width: 100%;
      pointer-events: none;
      order: 2;
      z-index: 1;
      transition: background 0.3s ease;
      box-sizing: border-box;
      overflow: hidden;
      white-space: nowrap;

      :hover {
        background: #666;
      }
    }
  }
  :focus label {
    position: relative;
    pointer-events: all;
  }
`;

const FlexSelect: FC<Props> = ({
  data,
  width = 100,
  height = 30,
  borderRadius = 0,
  backgroundColor = 'hsl(229, 57%, 11%)',
}) => {
  const onClick = (e: MouseEvent) => {
    console.log(e.target);
  };
  return (
    <StyledSelect
      className="select"
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      tabIndex={1}
    >
      {data.map((item) => (
        <div className="selectopt" key={item}>
          <input
            name="regions"
            type="radio"
            id={item}
            onClick={(e: MouseEvent) => onClick(e)}
            defaultChecked={item === 'Region'}
          />
          <label htmlFor={item} className="option">
            {item}
          </label>
        </div>
      ))}
    </StyledSelect>
  );
};

export default FlexSelect;
