import React, { FC } from "react";

/** 메모 데이터 구조 정의 (수정가능) */
export interface MemoItem {
  /** 고유 ID */
  id: number;
  /** 제목 */
  title: string;
  /** 내용 */
  body: string;
  /** 메모 색상 */
  color: number;
}

export type MemoListItemProps = {
  /** 제목 */
  title: string;
  /** 내용 */
  body: string;
  /** 메모 색상 */
  color: number;
};
/**
 * 메모 리스트 아이템 컴포넌트
 */
const MemoListItem: FC<MemoListItemProps> = () => {
  return <div>내용을 작성해주세요.</div>;
};

export type MemoListProps = {
  items: MemoItem[];
};
/**
 * 메모 리스트 컴포넌트
 */
const MemoList: FC<MemoListProps> = ({ items }) => {
  return (
    <div>
      {items.map(({ title, body, color, id }) => (
        <MemoListItem key={id} title={title} body={body} color={color} />
      ))}
    </div>
  );
};

export default MemoList;
