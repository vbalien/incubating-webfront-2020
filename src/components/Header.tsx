import styled from "@emotion/styled";
import { Button, Icon } from "components";
import React, { FC } from "react";

const Container = styled.div({
  display: "flex",
  justifyContent: "space-between",
  height: 45,
  borderBottom: "1px solid #ccc",
});
const Title = styled.h2({ marginTop: 10 });

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
  return (
    <Container>
      <Button
        rounded
        flat
        width={40}
        height={40}
        onClick={() => onToggleSidebar()}
      >
        <Icon icon="menu" size="auto" />
      </Button>
      <Title>Memo App</Title>
      <Button
        rounded
        flat
        width={40}
        height={40}
        onClick={() => onToggleDarkMode()}
      >
        <Icon icon="darkmode" size="auto" />
      </Button>
    </Container>
  );
};

export default Header;
