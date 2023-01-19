import type { Meta, StoryObj } from "@storybook/svelte";
import { Header } from ".";

const meta = {
  title: "common/Header",
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/svelte/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    account: `0x${new Array(40).fill(0).join("")}`,
  },
};

export const LoggedOut: Story = {
  args: {
    account: undefined,
  },
};
