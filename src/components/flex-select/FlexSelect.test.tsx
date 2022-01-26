import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as FlexSelect } from './FlexSelect.stories';

describe('FlexSelect', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <FlexSelect
        data={[]}
        width={0}
        height={0}
        borderRadius={0}
        backgroundColor={''}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
