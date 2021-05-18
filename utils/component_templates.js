// component.tsx
const component = (name) => `import React from 'react';

export interface ${name}Props {}

export const ${name}Component = ({}: ${name}Props) => (
  <div>${name}Component</div>
);
`;

// component.stories.tsx
const story = (name) => `import { Meta, Story } from '@storybook/react';

import { ${name}Component, ${name}Props } from './index';

export default {
  title: '${name} Component',
  component: ${name}Component,
  argTypes: {},
} as Meta;

const Template: Story<${name}Props> = (args) => (
  <${name}Component {...args} />
);

// Define stories and bind args
export const __STORY__ = Template.bind({});
__STORY__.args = {};
`;

// component.test.tsx
const test = (name) => `import { render } from '@testing-library/react';

import { ${name}Component } from './index';

describe('${name} Component', () => {
  test('it should match the snapshot', () => {
  const { asFragment } = render(<${name}Component />);

  expect(asFragment()).toMatchSnapshot();
  });
});
`;

// index.ts
const barrel = (name) => `export { ${name}Component } from './${name}';\n`;

module.exports = { barrel, component, story, test };
