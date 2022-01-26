import React from 'react';
import { Meta, Story } from '@storybook/react';
import FlexSelect, { Props } from './FlexSelect';

const meta: Meta = {
  title: 'Components/FlexSelect',
  component: FlexSelect,
  argTypes: {
    backgroundColor: {
      control: {
        type: 'color',
      },
    },
    borderRadius: {
      control: {
        type: 'select',
      },
      options: [0, 5, 10],
    },
    onClick: {
      action: 'value has changed',
    },
  },
  parameters: {
    controls: { expanded: false },
    actions: { argTypesRegex: '^on.*' },
  },
};
export default meta;

const Template: Story<Props> = (args) => <FlexSelect {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: ['Region', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
  width: 150,
  height: 30,
  backgroundColor: 'hsl(229, 57%, 11%)',
  borderRadius: 0,
};
