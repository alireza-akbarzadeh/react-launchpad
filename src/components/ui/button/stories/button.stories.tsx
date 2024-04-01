import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "components/ui/button/button";
import { Card, CardContent } from "components/ui/card/card";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Buttons/Button",
  tags: ["autodocs"],
  decorators: [
        (story) => <Card><CardContent>{story()}</CardContent></Card>,
  ],
  args: { children: "button" },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', "destructive", "link", "ghost", " outline", "secondary"],
      control: { type: 'radio' },
    },
    children: { control: "text" },
    onClick: { action: "clicked" },
    fullWidth: { active: { control: "boolean" } },
    disabled: { control: "boolean" },
    asChild: { table: { disable: true } },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "radio" },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;



export const buttonDefaultArgs = {
  fullWidth: true
} as ButtonProps


export const Default: Story = {
  args: {
    ...buttonDefaultArgs,
    variant: "default",
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

