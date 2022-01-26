import React, { MouseEvent, FC } from 'react';
import styled from 'styled-components';

const StyledSwitch = styled.button<Props>`
  --c-background-top: #75757d;
  --c-background-bottom: #45454c;
  --c-background-top-shadow: rgba(255, 255, 255, 0.45);
  --c-background-bottom-shadow: rgba(0, 0, 0, 0.3);
  --c-stroke-top: #262626;
  --c-stroke-bottom: #3d3d43;
  --c-inner: #6d6d6d;
  --c-inner-top-shadow: rgba(0, 0, 0, 0.3);
  --c-inner-bottom-shadow: rgba(255, 255, 255, 0.18);
  --c-inner-inset-shadow: rgba(0, 0, 0, 0.14);
  --c-knob-stroke-top: #515151;
  --c-knob-stroke-bottom: #acacac;
  --c-knob-inner-top: #8a8a8a;
  --c-knob-inner-middle-top: #a1a1a1;
  --c-knob-inner-middle-bottom: #b4b4b4;
  --c-knob-inner-bottom: #bababa;
  --c-knob-inner-shadow-top: rgba(255, 255, 255, 0.25);
  --c-knob-inner-shadow-bottom: rgba(0, 0, 0, 0.3);
  --c-knob-shadow-1: rgba(7, 7, 37, 0.16);
  --knob-inner-shadow-top-y: 2.5px;
  --knob-inner-shadow-bottom-y: -5.5px;
  --knob-shadow-1-y: 20px;
  --knob-shadow-1-blur: 20px;
  --knob-shadow-1-spread: 0;
  --knob-shadow-2-y: 12.5px;
  --knob-shadow-2-blur: 8.5px;
  --knob-shadow-3-y: 6.5px;
  --knob-shadow-3-blur: 4.5px;
  --knob-shadow-4-y: 4px;
  --knob-shadow-4-blur: 2.5px;
  --knob-shadow-7-y: 15px;
  --top-shadow-blur: 5px;
  --inner-bottom-shadow-blur: 1.25px;
  --shine-top-opacity: 0;
  --shine-top-y: -5px;
  --shine-bottom-opacity: 1;
  --shine-bottom-y: 0px;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  background: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;

  &.active {
    --c-background-top: #f0f0f0;
    --c-background-bottom: #e9e9e9;
    --c-background-top-shadow: #fff;
    --c-background-bottom-shadow: rgba(0, 0, 0, 0.18);
    --c-stroke-top: #e7e7e7;
    --c-stroke-bottom: #d0d0d0;
    --c-inner: #eaeaea;
    --c-inner-top-shadow: rgba(156, 56, 0, 0.42);
    --c-inner-bottom-shadow: #fff3e5;
    --c-inner-inset-shadow: rgba(0, 0, 0, 0.2);
    --c-knob-stroke-top: #cc4528;
    --c-knob-stroke-bottom: #f05f21;
    --c-knob-inner-top: #e94714;
    --c-knob-inner-middle-top: #e85617;
    --c-knob-inner-middle-bottom: #ff7324;
    --c-knob-inner-bottom: #ff844f;
    --c-knob-inner-shadow-top: rgba(255, 170, 109, 0.45);
    --c-knob-inner-shadow-bottom: rgba(244, 44, 0, 0.9);
    --c-knob-shadow-1: rgba(255, 180, 175, 0.7);
    --knob-inner-shadow-top-y: 5.5px;
    --knob-inner-shadow-bottom-y: -1.5px;
    --knob-shadow-1-y: 0;
    --knob-shadow-1-blur: 2px;
    --knob-shadow-1-spread: 5px;
    --knob-shadow-2-y: 6.5px;
    --knob-shadow-2-blur: 4.5px;
    --knob-shadow-3-y: 3.5px;
    --knob-shadow-3-blur: 2.5px;
    --knob-shadow-4-y: 2px;
    --knob-shadow-4-blur: 1.5px;
    --knob-shadow-7-y: 5px;
    --top-shadow-blur: 3px;
    --inner-bottom-shadow-blur: 1px;
    --shine-top-opacity: 1;
    --shine-top-y: 0px;
    --shine-bottom-opacity: 0;
    --shine-bottom-y: 5px;
  }

  .inner {
    width: 30px;
    height: 50px;
    padding: 5px;
    border-radius: 5px;
    position: absolute;
    z-index: 1;
    background: var(--c-inner);
    box-shadow: 0 -1.5px 1.5px var(--c-inner-top-shadow),
      0 1.5px var(--inner-bottom-shadow-blur) var(--c-inner-bottom-shadow),
      inset 0 5px 14px var(--c-inner-inset-shadow);
  }
  .inner:before,
  .inner:after {
    content: '';
    display: block;
  }
  .inner:before {
    width: 20px;
    height: 40px;
    border-radius: 8px;
    position: absolute;
    left: 10px;
    top: 6px;
    background: linear-gradient(
      var(--c-knob-stroke-top),
      var(--c-knob-stroke-bottom)
    );
    box-shadow: 0 var(--knob-shadow-1-y) var(--knob-shadow-1-blur)
        var(--knob-shadow-1-spread) var(--c-knob-shadow-1),
      0 var(--knob-shadow-2-y) var(--knob-shadow-2-blur) rgba(7, 7, 37, 0.07),
      0 var(--knob-shadow-3-y) var(--knob-shadow-3-blur) rgba(7, 7, 37, 0.13),
      0 var(--knob-shadow-4-y) var(--knob-shadow-4-blur) rgba(7, 7, 37, 0.11),
      0 2px 1.5px rgba(7, 7, 37, 0.09), 0 0.85px 0.5px rgba(7, 7, 37, 0.05),
      0 var(--knob-shadow-7-y) 15px rgba(0, 0, 0, 0.25);
  }
  .inner:after {
    width: 18px;
    height: 38px;
    border-radius: 8px;
    position: absolute;
    left: 11px;
    top: 6px;
    background: linear-gradient(
      var(--c-knob-inner-top),
      var(--c-knob-inner-middle-top),
      var(--c-knob-inner-middle-bottom),
      var(--c-knob-inner-bottom)
    );
    box-shadow: inset 0 var(--knob-inner-shadow-top-y) 1.5px
        var(--c-knob-inner-shadow-top),
      inset 0 var(--knob-inner-shadow-bottom-y) 1.25px
        var(--c-knob-inner-shadow-bottom);
  }
  .inner .shine {
    position: absolute;
    left: 6px;
    right: 6px;
    top: 0;
    bottom: 0;
    z-index: 1;
    border-left: 1px solid;
    border-right: 1px solid;
    -o-border-image: linear-gradient(
        rgba(0, 0, 0, 0) 30%,
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0) 70%
      )
      1 100%;
    border-image: linear-gradient(
        rgba(0, 0, 0, 0) 30%,
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0) 70%
      )
      1 100%;
  }
  .inner .shine:before,
  .inner .shine:after {
    content: '';
    position: absolute;
    left: -1px;
    right: -1px;
    height: 9px;
    -webkit-mask-image: linear-gradient(
      to left,
      transparent 0%,
      black 14px,
      black 50%,
      black calc(100% - 14px),
      transparent 100%
    );
    mask-image: linear-gradient(
      to left,
      transparent 0%,
      black 14px,
      black 50%,
      black calc(100% - 14px),
      transparent 100%
    );
  }
  .inner .shine:before {
    border-radius: 11px 11px 0 0;
    border-top: 1px solid #fff;
    top: 11px;
    opacity: var(--shine-top-opacity);
    transform: translateY(var(--shine-top-y));
  }
  .inner .shine:after {
    border-radius: 0 0 11px 11px;
    border-bottom: 1px solid #fff;
    bottom: 11px;
    opacity: var(--shine-bottom-opacity);
    transform: translateY(var(--shine-bottom-y));
  }
`;
export interface Props {
  active: false;
}

const Switch: FC<Props> = ({ active }) => {
  const interrupt = (e: MouseEvent) => {
    const elem = e.currentTarget;
    elem.classList.toggle('active');
    // elem.parent.classList.toggle('active');
  };
  return (
    <StyledSwitch
      active={active}
      className="switch"
      onClick={(e: MouseEvent) => interrupt(e)}
    >
      <div className="inner">
        <div className="shine"></div>
      </div>
    </StyledSwitch>
  );
};

export default Switch;
