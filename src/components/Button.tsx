import React, { FC } from "react";

export type ButtonProps = {
  /** 버튼 클릭시 이벤트 콜백 */
  onClick?: () => void;
  /** 버튼을 둥글게 할지 여부 */
  rounded?: boolean;
  /** 버튼의 크기를 설정 */
  size?: "small" | "medium" | "big";
  /** 버튼의 색상을 설정 */
  color?: string;
};

/**
 * 버튼 컴포넌트
 */
const Button: FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
