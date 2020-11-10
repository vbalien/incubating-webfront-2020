import React from "react";
// eslint-disable-next-line import/no-unresolved
import { Meta, Story } from "@storybook/react/types-6-0";
import Icon, { IconProps, iconTypes } from "./Icon";

export default {
  component: Icon,
  title: "components/Icon",
} as Meta;

const Template: Story<IconProps> = (props) => {
  return <Icon {...props} />;
};

export const Default: Story<IconProps> = Template.bind({});
Default.args = {
  icon: "pen",
};
Default.argTypes = {
  color: { control: "color" },
  icon: { control: "select", options: iconTypes, defaultValue: "pen" },
  size: { control: "number" },
};

export const AllIcons: Story<unknown> = () => {
  return (
    <>
      {iconTypes.map((key) => (
        <div key={key}>
          <Icon icon={key} />
        </div>
      ))}
    </>
  );
};
