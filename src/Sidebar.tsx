import { MemoList } from "components";
import FilterInput from "components/FilterInput";
import React, { FC } from "react";

const Sidebar: FC = () => {
  return (
    <nav
      css={{
        width: "auto",
        border: "1px solid #ccc",
      }}
    >
      <FilterInput />
      <MemoList items={[]}></MemoList>
    </nav>
  );
};
export default Sidebar;
