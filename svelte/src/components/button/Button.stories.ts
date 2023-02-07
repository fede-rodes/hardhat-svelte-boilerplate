import type { Meta, StoryObj } from "@storybook/svelte";
import { Button } from ".";
import ButtonStory from "./Button.story.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: { control: "color" },
  //   size: {
  //     control: { type: "select" },
  //     options: ["small", "medium", "large"],
  //   },
  // },
} satisfies Meta<Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Primary: Story = {
  render: (args) => ({
    Component: ButtonStory,
    props: args,
  }),
  args: {
    intent: "primary",
  },
};

export const Secondary: Story = {
  render: (args) => ({
    Component: ButtonStory,
    props: args,
  }),
  args: {},
};

export const Danger: Story = {
  render: (args) => ({
    Component: ButtonStory,
    props: args,
  }),
  args: {
    intent: "danger",
  },
};

export const Small: Story = {
  render: (args) => ({
    Component: ButtonStory,
    props: args,
  }),
  args: {
    size: "small",
  },
};

export const FullWidth: Story = {
  render: (args) => ({
    Component: ButtonStory,
    props: args,
  }),
  args: {
    fullWidth: true,
  },
};

export const Disabled: Story = {
  render: (args) => ({
    Component: ButtonStory,
    props: args,
  }),
  args: {
    disabled: true,
  },
};
