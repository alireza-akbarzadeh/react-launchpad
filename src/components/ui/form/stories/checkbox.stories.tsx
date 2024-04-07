import { useArgs } from "@storybook/preview-api";
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Forms/Checkbox",
  component: Checkbox,
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Example: Story = {
  args: {
    checked: true,
  },
  /**
   * 👇 To avoid linting issues, it is recommended to use a function with a capitalized name.
   * If you are not concerned with linting, you may use an arrow function.
   */
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();

    function onChange() {
      updateArgs({ checked: !checked });
    }

    return <Checkbox {...args} onChange={onChange} />;
  },
};
