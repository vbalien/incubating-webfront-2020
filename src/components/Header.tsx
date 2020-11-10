import React, { FC } from "react";

export type HeaderProps = {
  /** 사이드바 토글 이벤트 콜백 */
  onToggleSidebar?: () => void;
  /** 다크모드 토글 이벤트 콜백 */
  onToggleDarkMode?: () => void;
};

/**
 * 상단바 컴포넌트
 */
const Header: FC<HeaderProps> = () => {
  return <div>내용을 작성해주세요.</div>;
};

export default Header;
