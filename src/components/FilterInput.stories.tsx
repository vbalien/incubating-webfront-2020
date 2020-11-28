import React from "react";
// eslint-disable-next-line import/no-unresolved
import { Meta, Story } from "@storybook/react/types-6-0";
import FilterInput, { FilterInputProps } from "./FilterInput";

export default {
  component: FilterInput,
  title: "components/FilterInput",
} as Meta;

const Template: Story<FilterInputProps> = (props) => {
  return <FilterInput {...props} />;
};

export const Default = Template.bind({});
