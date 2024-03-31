import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "components/ui/button/button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Ui/Button",
  tags: ["autodocs"],
  args: {
    variant: "default",
    children: "Button",
    size: "lg",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "link", "ghost", "link", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "select" },
    },
  },
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args} />,
};
export const Destructive: Story = {
  render: (args) => <Button {...args} variant="destructive" />,
};
export const Ghost: Story = {
  render: (args) => <Button {...args} variant="ghost" />,
};
export const Link: Story = {
  render: (args) => (
    <Button asChild {...args} variant="link">
      <a href="">link to some where</a>
    </Button>
  ),
};
export const Secondary: Story = {
  render: (args) => <Button {...args} variant="secondary" />,
};
export const Outline: Story = {
  render: (args) => <Button {...args} variant="outline" />,
};
export const Info: Story = {
  render: (args) => <Button {...args} variant="info" />,
};

export default meta;
