import { useTheme } from "@emotion/react";
import React, { FC } from "react";

export type ButtonProps = {
  /** 버튼 클릭시 이벤트 콜백 */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** 버튼을 둥글게 할지 여부 */
  rounded?: boolean;
  /** 버튼의 크기를 설정 */
  size?: "small" | "medium" | "big";
  /** 버튼의 색상을 설정 */
  primary?: boolean;
  /** 너비 */
  width?: string | number;
  /** 높이 */
  height?: string | number;
  /** 평면버튼 */
  flat?: boolean;
  /** 클래스네임 */
  className?: string;
  /** 그림자 */
  shadow?: boolean;
};

/**
 * 버튼 컴포넌트
 */
const Button: FC<ButtonProps> = ({
  children,
  primary = false,
  rounded = false,
  size = "medium",
  width = "auto",
  height = "auto",
  flat = false,
  shadow = false,
  onClick,
  className,
}) => {
  const theme = useTheme();
  return (
    <button
      className={className}
      onClick={onClick}
      css={{
        backgroundColor: primary
          ? theme.color.primary
          : theme.app.backgroundColor,
        color: primary ? "#fff" : theme.app.textColor,
        borderColor: flat ? "transparent" : theme.button.borderColor,
        borderWidth: 1,
        borderStyle: "solid",
        boxShadow: shadow && "0 0 10px rgba(0, 0, 0, 0.3)",
        outline: "none",
        padding: 10,
        borderRadius: rounded ? "100%" : 10,
        cursor: "pointer",
        transition: "all 0.3s",
        width: width,
        height: height,
        "&:hover": {
          backgroundColor: primary
            ? theme.color.primary
            : theme.app.hoverBackgroundColor,
          filter: primary ? theme.filter.hover : "none",
        },
        fontSize: (() => {
          switch (size) {
            case "big":
              return "1.5em";
            case "medium":
              return "1em";
            case "small":
              return "0.8em";
          }
        })(),
      }}
    >
      {children}
    </button>
  );
};

export default Button;
