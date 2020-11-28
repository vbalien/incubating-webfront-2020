/* eslint-disable @typescript-eslint/no-empty-function */
import { Header } from "components";
import "normalize.css";
import React from "react";
import { hot } from "react-hot-loader/root";
import Sidebar from "Sidebar";
import Article from "Article";
import { Global } from "@emotion/react";

function App(): JSX.Element {
  return (
    <>
      <Global
        styles={{
          "*": {
            boxSizing: "border-box",
          },
        }}
      />
      <Header onToggleDarkMode={() => {}} onToggleSidebar={() => {}} />
      <section
        css={(theme) => ({
          width: "100%",
          maxWidth: theme.size.maxWidth,
          margin: "auto",
          display: "flex",
          minHeight: 600,
        })}
      >
        <Sidebar />
        <Article />
      </section>
    </>
  );
}

export default hot(App);
