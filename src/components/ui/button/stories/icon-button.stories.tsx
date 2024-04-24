import type { Meta, StoryObj } from '@storybook/react';
import { IconButton, IconButtonProps } from 'components/ui/button/icon-button';
import { SIZES, VARIANT } from 'constant/themes';

const meta: Meta<IconButtonProps> = {
  component: IconButton,
  title: 'Buttons/IconButton',
  tags: ['autodocs'],
  args: {
    iconName: 'User',
    iconSize: 'lg',
    sizes: 'lg',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
    variant: {
      options: Object.keys(VARIANT),
      control: { type: 'select' },
    },
    roundedFull: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'text' },
    },
    sizes: {
      options: Object.keys(SIZES),
      control: { type: 'radio' },
    },
    iconSize: {
      options: Object.keys(SIZES),
      control: { type: 'radio' },
    },
  },
};

type Story = StoryObj<typeof IconButton>;

export const Outline: Story = {
  args: {
    variant: 'outline',
    iconClassName: 'text-black',
  },
};
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    roundedFull: true,
  },
};

export default meta;
