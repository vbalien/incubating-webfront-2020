import { useTheme, css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { FC, useEffect } from "react";
import { MemoColor } from "repo/memo";
import Button from "./Button";
import Icon from "./Icon/Icon";

type MemoContainerProps = {
  bgColor: string;
};
const MemoContainer = styled.div<MemoContainerProps>((props) => ({
  backgroundColor: props.bgColor,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
}));
const inputBase = css({
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  width: "100%",
  padding: 10,
  boxSizing: "border-box",
});
const MemoTitleInput = styled.input(
  {
    fontSize: "1.8em",
    flexGrow: 1,
  },
  inputBase
);
const MemoBodyEditor = styled.textarea(
  {
    fontSize: "1.2em",
    resize: "none",
    height: "100%",
    minHeight: "400px",
  },
  inputBase
);

type ColorSelectProps = {
  onSelected: (color: MemoColor) => void;
  selected: MemoColor;
};
const ColorSelect: FC<ColorSelectProps> = ({ onSelected, selected }) => {
  const theme = useTheme();
  return (
    <ul
      css={{
        display: "flex",
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}
    >
      {theme.memo.color.map((color, id: MemoColor) => (
        <li key={id}>
          <Button
            onClick={() => onSelected(id)}
            css={{
              backgroundColor: color,
              margin: 10,
              "&:hover": { backgroundColor: color, filter: theme.filter.hover },
            }}
            rounded
            shadow
            width={40}
            height={40}
          >
            {id === selected && <Icon icon="check" size={19} color="#000" />}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export type MemoProps = {
  /** 제목 변경 이벤트 콜백 */
  onChangeTitle?: (title: string) => void;
  /** 내용 변경 이벤트 콜백 */
  onChangeBody?: (body: string) => void;
  /** 배경색 변경 이벤트 콜백 */
  onChangeBgColor?: (color: MemoColor) => void;
  /** 블러 이벤트 */
  onBlur?: () => void;
  /** 배경색 설정 */
  bgColor?: MemoColor;
  /** 제목 설정 */
  title?: string;
  /** 내용 설정 */
  body?: string;
};

/**
 * 상단바 컴포넌트
 */
const Memo: FC<MemoProps> = ({
  bgColor = 0,
  title,
  body,
  onChangeBgColor,
  onChangeBody,
  onChangeTitle,
  onBlur,
}) => {
  const theme = useTheme();
  const onBlurRef = React.useRef<() => void>();
  useEffect(() => {
    onBlurRef.current = onBlur;
  }, [onBlur]);
  useEffect(() => () => onBlurRef.current(), []);
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <ColorSelect onSelected={onChangeBgColor} selected={bgColor} />
      <MemoContainer bgColor={theme.memo.color[bgColor]}>
        <MemoTitleInput
          placeholder="제목을 입력해주세요..."
          value={title}
          onChange={({ target }) => onChangeTitle(target.value)}
          onBlur={onBlur}
        />
        <MemoBodyEditor
          placeholder="내용을 입력해주세요..."
          value={body}
          onChange={({ target }) => onChangeBody(target.value)}
          onBlur={onBlur}
        />
      </MemoContainer>
    </div>
  );
};

export default Memo;
