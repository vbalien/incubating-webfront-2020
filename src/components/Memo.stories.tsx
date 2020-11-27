import React from "react";
// eslint-disable-next-line import/no-unresolved
import { Meta, Story } from "@storybook/react/types-6-0";
import Memo, { MemoProps } from "./Memo";

export default {
  component: Memo,
  title: "components/Memo",
} as Meta;

const Template: Story<MemoProps> = (props) => {
  return <Memo {...props} />;
};

export const Default: Story<MemoProps> = Template.bind({});
Default.argTypes = {
  bgColor: {
    control: {
      type: "select",
      options: [0, 1, 2, 3, 4],
      defaultValue: 0,
    },
  },
  title: { control: "text" },
  body: { control: "text" },
};
Default.args = {
  bgColor: 0,
};
