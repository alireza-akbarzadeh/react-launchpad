import type { Meta, StoryObj } from '@storybook/react';

import { expect, userEvent, within } from '@storybook/test';

import { SignUp } from '../sign-up';

const meta: Meta<typeof SignUp> = {
  title: 'Auth/SignUp',
  component: SignUp,
};

export default meta;
type Story = StoryObj<typeof SignUp>;

/* @see https://storybook.js.org/docs/writing-stories/play-function */

export const SignForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');
    await userEvent.type(canvas.getByTestId('username'), 'alireza');

    await userEvent.type(canvas.getByTestId('password'), 'a-random-password');
    await userEvent.type(
      canvas.getByTestId('confirmPassword'),
      'a-random-password'
    );
    await userEvent.click(canvas.getByRole('checkbox'));
    await userEvent.click(canvas.getByRole('button'));

    // 👇 Assert DOM structure
    await expect(
      canvas.getByText(/Everything is perfect/i)
    ).toBeInTheDocument();
  },
};

export const ErrorForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');
    await userEvent.type(canvas.getByTestId('username'), 'alireza');

    await userEvent.type(canvas.getByTestId('password'), 'a-random-password');
    await userEvent.type(
      canvas.getByTestId('confirmPassword'),
      'a-random-password sad'
    );
    await userEvent.click(canvas.getByRole('checkbox'));

    // 👇 Assert DOM structure
    await expect(canvas.getByRole('button')).toBeDisabled();
  },
};
