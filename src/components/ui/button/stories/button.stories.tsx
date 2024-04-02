import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "components/ui/button/button";
import  { fn } from "@storybook/test";
import { SIZES, VARIANT } from "constant/themes";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Buttons/Button",
  tags: ["autodocs"],
  // decorators: [
  //       (story) => <Card><CardContent>{story()}</CardContent></Card>,
  // ],
  args: { children: "button" },
  argTypes: {
    variant: {
      options:Object.keys(VARIANT),
      control: { type: 'radio' },
    },
    children: { control: "text" },
    onClick: { action: fn() },
    fullWidth: { active: { control: "boolean" } },
    disabled: { control: "boolean" },
    asChild: { table: { disable: true } },
    size: {
      options:Object.keys(SIZES),
      control: { type: "radio" },
    },
  },
  parameters: {
    controls: { expanded: true },
    layout:"centered"
  },
};

export default meta;

type Story = StoryObj<typeof Button>;



export const buttonDefaultArgs = {
  disabled:false,
} as ButtonProps


export const Default: Story = {
  args: {
    ...buttonDefaultArgs,
  },
};
export const Destructive: Story = {
  args: {
    ...buttonDefaultArgs,
    variant: "destructive"
  }
};
export const Ghost: Story = {
  args: {
    ...buttonDefaultArgs,
    variant: "ghost"
  }
};
export const Link: Story = {
  render: (args) => (
    <Button asChild {...args} variant="link">
      <a href="">link to some where</a>
    </Button>
  ),
  args: {
    ...buttonDefaultArgs,
    variant: "link"
  }
};
export const Secondary: Story = {
  args: {
    ...buttonDefaultArgs,
    variant: "secondary"
  }
};
export const Outline: Story = {
  args: {
    ...buttonDefaultArgs,
    variant: "outline"
  }
};
export const Info: Story = {
  args: {
    ...buttonDefaultArgs,
    variant: "info"
  }
};

