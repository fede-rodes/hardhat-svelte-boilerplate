import type { Meta, StoryObj } from "@storybook/svelte";
import { DarkMode } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: "components/DarkMode",
  component: DarkMode,
  tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: { control: "color" },
  //   size: {
  //     control: { type: "select" },
  //     options: ["small", "medium", "large"],
  //   },
  // },
} satisfies Meta<DarkMode>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Default: Story = {
  render: (args) => ({
    Component: DarkMode,
    props: args,
  }),
  args: {},
};
