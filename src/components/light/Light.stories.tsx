import React from 'react';
import { Meta, Story } from '@storybook/react';
import Light, { Props } from './Light';

const meta: Meta = {
  title: 'Components/Light',
  component: Light,
};
export default meta;

const Template: Story<Props> = (args) => <Light {...args}></Light>;

export const Default = Template.bind({});

Default.args = {
  on: false,
};
