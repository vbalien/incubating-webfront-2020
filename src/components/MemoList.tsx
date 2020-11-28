import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React, { FC } from "react";

/** 메모 데이터 구조 정의 (수정가능) */
export type MemoColor = null | 0 | 1 | 2 | 3 | 4;

export interface MemoItem {
  /** 고유 ID */
  id: number;
  /** 제목 */
  title: string;
  /** 내용 */
  body: string;
  /** 메모 색상 */
  color: MemoColor;
}
const MemoListContainer = styled.ul({
  width: 250,
  height: "100%",
  margin: 0,
  padding: 0,
});
type MemoListItemContainerProps = {
  memocolor: string;
  selected?: boolean;
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
    backgroundColor: "#fff",
    filter: props.selected && "brightness(95%)",
    "&:hover": {
      filter: "brightness(95%)",
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
};
/**
 * 메모 리스트 아이템 컴포넌트
 */
const MemoListItem: FC<MemoListItemProps> = ({
  title,
  body,
  color,
  onClick,
  selected,
}) => {
  const theme = useTheme();
  return (
    <MemoListItemContainer
      selected={selected}
      memocolor={color !== null ? theme.memo.color[color] : "transparent"}
      onClick={onClick}
    >
      <div css={{ padding: 10 }}>
        <H4>{title}</H4>
        <H5>{body}</H5>
      </div>
    </MemoListItemContainer>
  );
};

export type MemoListProps = {
  /** 메모 목록 */
  items: MemoItem[];
  /** 선택 이벤트 */
  onSelected?: (idx: number, item: MemoItem) => void;
  /** 선택된 항목 ID 설정 */
  selectedItemId?: number;
};
/**
 * 메모 리스트 컴포넌트
 */
const MemoList: FC<MemoListProps> = ({
  items,
  onSelected,
  selectedItemId = -1,
}) => {
  return (
    <MemoListContainer>
      {items.length != 0 ? (
        items.map((item, idx) => (
          <MemoListItem
            key={item.id}
            {...item}
            selected={selectedItemId === item.id}
            onClick={() => onSelected(idx, item)}
          />
        ))
      ) : (
        <MemoListItem
          title="메모가 비어있습니다."
          body="메모를 추가해주세요."
          color={null}
          onClick={undefined}
        />
      )}
    </MemoListContainer>
  );
};

export default MemoList;
