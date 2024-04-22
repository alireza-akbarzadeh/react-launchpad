import type { Meta, StoryObj } from '@storybook/react';

import fetch from 'node-fetch';

import { UserITem } from '../userItem';

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
const meta: Meta<typeof UserITem> = {
  component: UserITem,
  render: (args, { loaded: { user } }) => <UserITem {...args} {...user} />,
};

export default meta;
type Story = StoryObj<typeof UserITem>;

export const Primary: Story = {
  loaders: [
    async () => ({
      todo: await (
        await fetch('https://jsonplaceholder.typicode.com/todos/1')
      ).json(),
    }),
  ],
};
