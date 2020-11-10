import React, { FC } from "react";

export type MemoProps = {
  /** 제목 변경 이벤트 콜백 */
  onChangeTitle?: (title: string) => void;
  /** 내용 변경 이벤트 콜백 */
  onChangeBody?: (body: string) => void;
  /** 배경색 변경 이벤트 콜백 */
  onChangeBgColor?: (color: string) => void;
  /** 배경색 설정 */
  backgroundColor?: string;
  /** 제목 설정 */
  title?: string;
  /** 내용 설정 */
  body?: string;
};

/**
 * 상단바 컴포넌트
 */
const Memo: FC<MemoProps> = () => {
  return <div>내용을 작성해주세요.</div>;
};

export default Memo;
