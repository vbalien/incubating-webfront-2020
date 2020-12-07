/* eslint-disable @typescript-eslint/no-empty-function */
import { Header } from "components";
import "normalize.css";
import React, { useCallback } from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "rootReducer";
import { toggleDarkmode, toggleSidebar } from "slices/appSlice";
import { useDB } from "hooks/useDB";
import { ConnectedRouter as Router } from "connected-react-router";
import { history } from "store";
import { darkTheme, defaultTheme } from "themes";
import Section from "Section";

function App(): JSX.Element {
  const dispatch = useDispatch();
  const onToggleSidebar = useCallback(() => {
    dispatch(toggleSidebar());
  }, []);
  const onToggleDarkMode = useCallback(() => {
    dispatch(toggleDarkmode());
  }, []);
  const isDarkmode = useSelector((state: RootState) => state.app.isDarkmode);
  const [dbReady, memoReady] = useDB();

  return (
    <ThemeProvider theme={isDarkmode ? darkTheme : defaultTheme}>
      <Router history={history}>
        <Global
          styles={(theme) => ({
            body: {
              transition: "background-color 0.3s",
              backgroundColor: theme.app.backgroundColor,
            },
            "*": {
              boxSizing: "border-box",
            },
          })}
        />
        <Header
          onToggleDarkMode={onToggleDarkMode}
          onToggleSidebar={onToggleSidebar}
        />
        {dbReady && memoReady && <Section />}
      </Router>
    </ThemeProvider>
  );
}

export default App;
