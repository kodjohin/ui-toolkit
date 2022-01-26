import React from 'react';
import { Meta, Story } from '@storybook/react';
import RangeSlider, { Props } from './RangeSlider';

const meta: Meta = {
  title: 'Components/RangeSlider',
  component: RangeSlider,
  argTypes: {
    bgcolor: {
      control: {
        type: 'color',
      },
    },
    onChange: {
      action: 'value has changed',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

const Template: Story<Props> = (args) => <RangeSlider {...args}></RangeSlider>;

export const Default = Template.bind({});

Default.args = {
  label: 'Range Slider',
  width: 150,
  bgcolor: 'hsl(229, 57%, 11%)',
};
