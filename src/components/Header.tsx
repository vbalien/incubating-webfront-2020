import { Theme, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Button, Icon } from "components";
import React, { FC } from "react";

const Container = styled.header({
  height: 45,
  borderBottom: "1px solid #ccc",
  padding: 2,
  boxSizing: "border-box",
  marginBottom: 10,
});
const Title = styled.h2({ margin: 0, lineHeight: "1.8em" });

/**
 * 상단바 컴포넌트
 */
export type HeaderProps = {
  /** 사이드바 토글 이벤트 콜백 */
  onToggleSidebar: () => void;
  /** 다크모드 토글 이벤트 콜백 */
  onToggleDarkMode: () => void;
};
const Header: FC<HeaderProps> = ({ onToggleSidebar, onToggleDarkMode }) => {
  const theme = useTheme();

  return (
    <Container>
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: theme.size.maxWidth,
          width: "100%",
          margin: "auto",
        }}
      >
        <Button
          rounded
          flat
          width={40}
          height={40}
          onClick={() => onToggleSidebar()}
        >
          <Icon icon="menu" size="auto" />
        </Button>
        <Title css={(theme: Theme) => ({ color: theme.app.textColor })}>
          Memo App
        </Title>
        <Button
          rounded
          flat
          width={40}
          height={40}
          onClick={() => onToggleDarkMode()}
        >
          <Icon icon="darkmode" size="auto" />
        </Button>
      </div>
    </Container>
  );
};

export default Header;
