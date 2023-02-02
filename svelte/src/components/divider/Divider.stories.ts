import type { Meta, StoryObj } from "@storybook/svelte";
import { Divider } from ".";
import DividerDecorator from "./Divider.decorator.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: "components/Divider",
  component: Divider,
  tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: { control: "color" },
  //   size: {
  //     control: { type: "select" },
  //     options: ["small", "medium", "large"],
  //   },
  // },
} satisfies Meta<Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Default: Story = {
  render: (args) => ({
    Component: Divider,
    props: args,
  }),
  args: {},
  decorators: [() => DividerDecorator],
};
