import React, { FC } from 'react';
import styled from 'styled-components';

const StyledLight = styled.div`
  box-shadow: 0 1px 2px 0 #858282;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
  height: 18vmin;
  width: 18vmin;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #858282;

  .inner {
    height: 17vmin;
    width: 17vmin;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a1818;
  }

  &.on {
    background-color: #f44336;
    .inner {
      background-color: #b71c1c;
      transition: background-color 0.3s ease;
    }
  }
`;

export interface Props {
  on: boolean;
}

const Light: FC<Props> = ({ on }) => {
  return (
    <StyledLight className={`light ${on && 'on'}`}>
      <div className="inner"></div>
    </StyledLight>
  );
};

export default Light;
