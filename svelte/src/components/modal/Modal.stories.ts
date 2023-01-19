import type { Meta, StoryObj } from "@storybook/svelte";
import { Modal } from ".";
import ModalStory from "./Modal.story.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: "common/Modal",
  component: Modal,
  tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: { control: "color" },
  //   size: {
  //     control: { type: "select" },
  //     options: ["small", "medium", "large"],
  //   },
  // },
} satisfies Meta<Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Primary: Story = {
  render: (args) => ({
    Component: ModalStory,
    props: args,
  }),
  args: {},
};
