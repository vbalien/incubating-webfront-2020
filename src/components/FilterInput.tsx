import React, { FC } from "react";
import Icon from "./Icon/Icon";

/**
 * 상단바 컴포넌트
 */
export type FilterInputProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const FilterInput: FC<FilterInputProps> = ({ onChange }) => {
  return (
    <div
      css={{
        display: "flex",
        width: "100%",
        height: 60,
        margin: "auto",
        padding: "0 10px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <input
        css={{
          height: "100%",
          fontsize: "1.8em",
          flexGrow: 1,
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
        }}
        onChange={onChange}
        placeholder="필터링..."
      />
      <Icon icon="search" />
    </div>
  );
};

export default FilterInput;
