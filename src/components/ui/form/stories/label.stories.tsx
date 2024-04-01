import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent } from "components/ui/card/card";
import { Label, LabelProps } from "components/ui/form/label";

const meta: Meta<typeof Label> = {
  component: Label,
  title: "Forms/Label",
  tags: ["autodocs"],
  decorators: [
    (story) => <Card><CardContent>{story()}</CardContent></Card>,
  ],
  args: { children: "button", htmlFor: "userName" },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;



const labelDefaultArgs = {
  fullWidth: true
} as LabelProps


export const Default: Story = {
  args: {
    ...labelDefaultArgs,
  },
};