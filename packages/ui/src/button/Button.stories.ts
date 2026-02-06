import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";

const meta = {
  component: Button,
  title: "Components/Button",
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    children: {
      control: "text",
      description: "Button content",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    focusableWhenDisabled: {
      control: "boolean",
      description: "Whether the button can be focused when disabled",
      table: {
        category: "Base UI",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const FocusableWhenDisabled: Story = {
  args: {
    children: "Focusable When Disabled",
    disabled: true,
    focusableWhenDisabled: true,
  },
};
