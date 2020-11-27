import React from "react";
// eslint-disable-next-line import/no-unresolved
import { Meta, Story } from "@storybook/react/types-6-0";
import Button, { ButtonProps } from "./Button";
import Icon from "./Icon/Icon";

export default {
  component: Button,
  title: "components/Button",
} as Meta;

const Template: Story<ButtonProps> = (props) => {
  return <Button {...props}>버튼</Button>;
};

export const Default = Template.bind({});

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  primary: true,
};
export const RoundedButton = Template.bind({});
RoundedButton.args = {
  rounded: true,
};
export const FlatButton = Template.bind({});
FlatButton.args = {
  flat: true,
};
export const ShadowButton = Template.bind({});
ShadowButton.args = {
  shadow: true,
};

export const ButtonWithIcon: Story<unknown> = () => {
  return (
    <>
      <Button>
        <Icon icon="pen" />
        {"아이콘과 텍스트"}
      </Button>
      <br />
      <Button rounded width={45} height={45}>
        {/** 둥근 아이콘 버튼 */}
        <Icon icon="plus" />
      </Button>
    </>
  );
};
