import React from "react";
// eslint-disable-next-line import/no-unresolved
import { Meta, Story } from "@storybook/react/types-6-0";
import MemoList, { MemoListProps } from "./MemoList";

export default {
  component: MemoList,
  title: "components/MemoList",
} as Meta;

const Template: Story<MemoListProps> = (props) => {
  return <MemoList {...props} />;
};

export const Default: Story<MemoListProps> = Template.bind({});
Default.args = {
  items: [
    { id: 0, title: "Memo 1", body: "첫번째 메모", color: 0 },
    { id: 1, title: "Memo 2", body: "두번째 메모", color: 1 },
    {
      id: 2,
      title:
        "Memo 3 제목 아주 긴거~~러몬아ㅓㅣ로넘러ㅏfsafsafsaffsafsddst bre gdsgd",
      body:
        "세번째 메모\n내용 긴거~~~~~ㅇㄹㄴㅁㄹㄴgdsagdsagdsagdfsadfsaf\nfsafklsjafsalks",
      color: 2,
    },
    { id: 3, title: "Memo 4", body: "네번째 메모", color: 3 },
    { id: 4, title: "Memo 5", body: "다섯번째 메모", color: 4 },
  ],
  selectedItemId: 0,
};
Default.argTypes = {
  selectedItemId: {
    control: {
      type: "select",
      options: [-1, ...Default.args.items.map((item) => item.id)],
    },
  },
};

export const Empty: Story<MemoListProps> = Template.bind({});
Empty.args = {
  items: [],
};
