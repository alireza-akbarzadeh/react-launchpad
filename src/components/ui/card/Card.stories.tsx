import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "components/ui/card/card";
import { Button } from "../button/button";

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
  args: {
    children: "Card",
  },
  argTypes: {},
};

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>title</CardTitle>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        asperiores numquam facere!
      </CardContent>
      <CardFooter>
        <Button>click</Button>
      </CardFooter>
    </Card>
  ),
};

export default meta;
