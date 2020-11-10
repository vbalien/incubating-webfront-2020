import React, { FC } from "react";
import * as icons from "./svg";

type IconType = keyof typeof icons;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const iconTypes: IconType[] = Object.keys(icons) as any[];

export type IconProps = {
  /** 사용할 아이콘 */
  icon: IconType;
  /** 색상 */
  color?: string;
  /** 크기 */
  size?: string | number;
};

/**
 * 아이콘 컴포넌트
 */
const Icon: FC<IconProps> = ({ icon, color = "#000", size = 24 }) => {
  const SVGElement = icons[icon];
  return (
    <SVGElement
      css={{
        fill: color,
        width: size,
        height: "auto",
      }}
    />
  );
};

export default Icon;
