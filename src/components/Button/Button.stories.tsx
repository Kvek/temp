import { Meta, Story } from '@storybook/react';

import React from 'react';

import { GreenButton } from './index';

export default {
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
  component: GreenButton,
  title: 'Example/Button',
} as Meta;

const Template: Story = (args) => <GreenButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'primary',
  primary: true,
};

Primary.parameters = {
  backgrounds: {
    values: [
      { name: 'reed', value: '#f00' },
      { name: 'green', value: '#0f0' },
    ],
  },
};
