import type { Meta, StoryObj } from "@storybook/angular";

import { fn } from "@storybook/test";

import TaskComponent from "./task.component";

export const ActionsData = {
  onArchiveTask: fn(), // provide functionalities for the tests that simulate the actuall application.
  onPinTask: fn(),
};

// tell Storybook about the component we are documenting
const meta: Meta<TaskComponent> = {
  title: "Task",
  component: TaskComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ["autodocs"],
  args: {
    // allow us to live-edit our components
    ...ActionsData,
  },
};

export default meta;
type Story = StoryObj<TaskComponent>;

export const Default: Story = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};

export const Pinned: Story = {
  args: {
    task: {
      ...Default.args?.task,
      state: "TASK_PINNED",
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      ...Default.args?.task,
      state: "TASK_ARCHIVED",
    },
  },
};
