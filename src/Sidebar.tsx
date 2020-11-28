import { Button, Icon, MemoList } from "components";
import FilterInput from "components/FilterInput";
import React, { FC } from "react";

const Sidebar: FC = () => {
  return (
    <nav
      css={{
        width: "auto",
        border: "1px solid #ccc",
        display: "flex",
        position: "relative",
        flexDirection: "column",
      }}
    >
      <FilterInput />
      <MemoList css={{ flexGrow: 1 }} items={[]}></MemoList>
      <Button
        primary
        rounded
        width={45}
        height={45}
        css={{ position: "absolute", bottom: 10, right: 10 }}
      >
        <Icon icon="plus" />
      </Button>
    </nav>
  );
};
export default Sidebar;
