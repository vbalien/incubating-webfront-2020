import React from "react";
// eslint-disable-next-line import/no-unresolved
import { Meta, Story } from "@storybook/react/types-6-0";
import Header, { HeaderProps } from "./Header";

export default {
  component: Header,
  title: "components/Header",
} as Meta;

export const Default: Story<HeaderProps> = () => {
  return <Header />;
};
