import { Decorator, Meta, StoryObj } from '@storybook/react';
import { Form } from 'components/ui/form/form';
import { useForm } from 'react-hook-form';
import { InputController } from '../input-controller';

const withFormDecorator: Decorator = (story) => {
  const form = useForm();
  const onSubmit = () => {};
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>{story()}</div>
      </form>
    </Form>
  );
};

const InputControllerStories: Meta<typeof InputController> = {
  title: 'Forms/InputConroller',
  component: InputController,
  decorators: [withFormDecorator],
  args: {
    label: 'Enter somthing..',
  },
  argTypes: {
    label: { control: 'string' },
  },
  parameters: {
    layout: 'centered',
  },
};

export default InputControllerStories;

type Story = StoryObj<typeof InputController>;

export const TextField: Story = {
  args: {
    inputControll: {
      name: 'email',
    },
    inputProps: {
      type: 'email',
    },
  },
};

type TextFieldStory = StoryObj<typeof InputController>;

// export const TextFieldController: TextFieldStory = {
//   args: {
//     description: "You should enter your username here",
//   },
// };
