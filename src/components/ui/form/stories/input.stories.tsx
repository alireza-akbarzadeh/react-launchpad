import { Meta, StoryObj } from "@storybook/react";
import { VARIANT } from "constant/themes";
import { Input } from "../input";

const InputStories: Meta<typeof Input> = {
  title: "Forms/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    name: "somthing",
    disabled: false,
    required: false,
    label: "Field",
    variant: "primary",
    placeholder: "Enter Somthing....",
  },
  argTypes: {
    name: { control: "text" },
    value: { control: "text" },
    label: { control: "text" },
    disabled: { control: "boolean" },
    variant: { control: "select", options: Object.keys(VARIANT) },
    required: { control: "boolean" },
    type: { control: "select", options: ["text", "email"] },
  },
  parameters: {
    layout: "centered",
  },
};

export default InputStories;

type Story = StoryObj<typeof Input>;

export const TextField: Story = {
  args: {
    name: "email",
    id: "email",
  },
};

export const Primary: Story = {
  args: {
    name: "userName",
    type: "text",
    id: "email",
    fullWidth: true,
  },
};
