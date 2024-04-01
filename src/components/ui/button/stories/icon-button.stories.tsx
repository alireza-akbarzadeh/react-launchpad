import type { Meta, StoryObj } from "@storybook/react";
import { IconButton, IconButtonProps } from "components/ui/button/icon-button";
import { Card, CardContent } from "components/ui/card/card";

const meta: Meta<IconButtonProps> = {
  component: IconButton,
  title: "Buttons/IconButton",
  tags: ["autodocs"],
  decorators: [
    (story) => <Card><CardContent>{story()}</CardContent></Card>,
  ],
  args: {
    variant: "default",
    children: "Button",
    size: "sm",
    iconName: "ZoomIn",
  },
  argTypes: {
    onClick: { action: "clicked" },
    disabled: { control: "boolean" },
    variant: {
      options: ["primary", "secondary", "link", "ghost", "link", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["default", "xs", "sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

type Story = StoryObj<typeof IconButton>;

const defaultArgs = {
  className: "text-white",
} as IconButtonProps;

export const Default: Story = {
  render: (args) => <IconButton {...args} />,
  args: {
    ...defaultArgs,
  },
};
export const Destructive: Story = {
  render: (args) => <IconButton {...args} />,
  args: {
    ...defaultArgs,
    variant: "destructive",
  },
};

export const Secondary: Story = {
  render: (args) => <IconButton {...args} />,
  args: {
    ...defaultArgs,
    className: "text-black",
    variant: "secondary",
  },
};
export const Ghost: Story = {
  render: (args) => <IconButton {...args} />,
  args: {
    ...defaultArgs,
    className: "text-black",
    variant: "ghost",
  },
};
export const Outline: Story = {
  render: (args) => <IconButton {...args} />,
  args: {
    ...defaultArgs,
    className: "text-black",
    variant: "outline",
  },
};
export const Info: Story = {
  render: (args) => <IconButton {...args} />,
  args: {
    ...defaultArgs,
    variant: "info",
  },
};

export default meta;
