import React from 'react';
import { Meta, Story } from '@storybook/react';
import Switch, { Props } from './Switch';

const meta: Meta = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    active: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'value has changed',
    },
  },
  parameters: {
    controls: { expanded: true, onClick: { action: 'active' } },
  },
};
export default meta;

const Template: Story<Props> = (args) => <Switch {...args}></Switch>;

export const Default = Template.bind({});

Default.args = {
  active: false,
};
