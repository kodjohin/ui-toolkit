import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as RangeSlider } from './RangeSlider.stories';

describe('RangeSlider', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <RangeSlider label={'Range Slider'} width={100} bgcolor={'#fff'} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
