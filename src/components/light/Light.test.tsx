import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Light } from './Light.stories';

describe('Light', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Light on={false} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
