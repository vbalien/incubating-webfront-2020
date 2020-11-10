import React from "react";
// eslint-disable-next-line import/no-unresolved
import { Meta, Story } from "@storybook/react/types-6-0";
import Button, { ButtonProps } from "./Button";
import Icon from "./Icon/Icon";

export default {
  component: Button,
  title: "components/Button",
} as Meta;

export const Default: Story<ButtonProps> = (props) => {
  return <Button {...props}>일반 버튼</Button>;
};

export const RoundedButton: Story<unknown> = () => {
  return <Button rounded>둥근 버튼</Button>;
};

export const ButtonWithIcon: Story<unknown> = () => {
  return (
    <>
      <Button>
        <Icon icon="pen" />
        {"아이콘과 텍스트"}
      </Button>
      <br />
      <Button rounded>
        {/** 둥근 아이콘 버튼 */}
        <Icon icon="plus" />
      </Button>
    </>
  );
};
