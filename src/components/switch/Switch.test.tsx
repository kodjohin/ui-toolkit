import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Switch } from './Switch.stories';

describe('Switch', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Switch active={false} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
