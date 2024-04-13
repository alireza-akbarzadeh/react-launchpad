import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'components/ui/card/card';
import { BellRing, Check } from 'lucide-react';
import { Button } from '../button/button';

const meta: Meta<typeof Card> = {
  title: 'Ui/Card',
  tags: ['autodocs'],
  component: Card,
  args: {
    children: 'Card',
  },
  argTypes: {},
};

const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
];

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <>
      <Card className="w-[380px]" {...args}>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <BellRing />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Push Notifications
              </p>
              <p className="text-sm text-muted-foreground">
                Send notifications to device.
              </p>
            </div>
          </div>
          <div>
            {notifications.map((notification, index) => (
              <div
                key={notification.description}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Check className="mr-2 h-4 w-4" /> Mark all as read
          </Button>
        </CardFooter>
      </Card>
      <Button variant="link" className="text-blue">
        <a
          className="capitalize"
          target="_blank"
          href="https://ui.shadcn.com/docs/components/card"
          rel="noreferrer"
        >
          Not enough Go read the docs
        </a>
      </Button>
    </>
  ),
};

export default meta;
