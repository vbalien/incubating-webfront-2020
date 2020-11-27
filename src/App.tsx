import { Button, Icon } from "components";
import "normalize.css";
import React from "react";
import { hot } from "react-hot-loader/root";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "themes";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button>
        <Icon icon="plus" />
        Hello Memo App
      </Button>
    </ThemeProvider>
  );
}

export default hot(App);
