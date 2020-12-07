import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React, { FC } from "react";
import { MemoColor, MemoItem } from "repo/memo";
import Button from "./Button";
import Icon from "./Icon/Icon";

const MemoListContainer = styled.ul({
  width: 250,
  height: "100%",
  margin: 0,
  padding: 0,
});
type MemoListItemContainerProps = {
  memocolor: string;
};
const MemoListItemContainer = styled.li<MemoListItemContainerProps>(
  (props) => ({
    borderBottom: "1px solid #ccc",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    whiteSpace: "nowrap",
    listStyle: "none",
    position: "relative",
    userSelect: "none",
    transition: "all 0.3s",
    "&:hover": {
      button: {
        display: "block",
      },
    },
    "&::before": {
      display: "block",
      float: "left",
      content: '" "',
      width: 7,
      top: 0,
      bottom: 0,
      position: "absolute",
      backgroundColor: props.memocolor,
    },
  })
);
const H4 = styled.h4({
  margin: 0,
  marginBottom: 5,
  textOverflow: "ellipsis",
  overflow: "hidden",
});
const H5 = styled.h5({
  margin: 0,
  textOverflow: "ellipsis",
  overflow: "hidden",
  fontWeight: "normal",
});

export type MemoListItemProps = {
  /** 제목 */
  title: string;
  /** 내용 */
  body: string;
  /** 메모 색상 */
  color: MemoColor;
  /** 선택됨 */
  selected?: boolean;
  /** 클릭 이벤트 */
  onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  /** 삭제클릭 이벤트 */
  onDelete: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
/**
 * 메모 리스트 아이템 컴포넌트
 */
const MemoListItem: FC<MemoListItemProps> = ({
  title,
  body,
  color,
  onClick,
  onDelete,
  selected,
}) => {
  const theme = useTheme();
  return (
    <MemoListItemContainer
      memocolor={color !== null ? theme.memo.color[color] : "transparent"}
      onClick={onClick}
      css={{
        backgroundColor: selected
          ? theme.app.hoverBackgroundColor
          : theme.app.backgroundColor,
        color: theme.app.textColor,
        "&:hover": {
          backgroundColor: theme.app.hoverBackgroundColor,
        },
      }}
    >
      <div css={{ padding: 10 }}>
        <H4>{title || "빈 메모"}</H4>
        <H5>{body || "빈 내용"}</H5>
      </div>
      {onDelete && (
        <Button
          flat
          rounded
          onClick={(e) => {
            onDelete(e);
            e.stopPropagation();
          }}
          width={25}
          height={25}
          css={{
            padding: 3,
            position: "absolute",
            right: 5,
            top: 5,
            display: "none",
            backgroundColor: "transparent",
          }}
        >
          <Icon icon="xmark" size={16} color="#888" />
        </Button>
      )}
    </MemoListItemContainer>
  );
};

export type MemoListProps = {
  /** 메모 목록 */
  items: MemoItem[];
  /** 선택 이벤트 */
  onSelected?: (idx: number, item: MemoItem) => void;
  /** 삭제 이벤트 */
  onDelete?: (idx: number, item: MemoItem) => void;
  /** 선택된 항목 ID 설정 */
  selectedItemId?: number;
  /** className */
  className?: string;
};
/**
 * 메모 리스트 컴포넌트
 */
const MemoList: FC<MemoListProps> = ({
  items,
  onSelected,
  onDelete,
  selectedItemId = -1,
  className,
}) => {
  return (
    <MemoListContainer className={className}>
      {items.length != 0 ? (
        items.map((item, idx) => (
          <MemoListItem
            key={item.id}
            {...item}
            selected={selectedItemId === item.id}
            onClick={() => onSelected(idx, item)}
            onDelete={() => onDelete(idx, item)}
          />
        ))
      ) : (
        <MemoListItem
          title="메모가 비어있습니다."
          body="메모를 추가해주세요."
          color={null}
          onClick={undefined}
          onDelete={undefined}
        />
      )}
    </MemoListContainer>
  );
};

export default MemoList;
