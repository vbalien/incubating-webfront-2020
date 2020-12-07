import { Theme } from "@emotion/react";
import MemoPage from "MemoPage";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { RootState } from "rootReducer";
import Sidebar from "Sidebar";

const Section: React.FC = () => {
  const isSideOpen = useSelector((state: RootState) => state.app.isSideOpen);

  return (
    <section
      css={(theme) => ({
        width: "100%",
        maxWidth: theme.size.maxWidth,
        margin: "auto",
        display: "flex",
        height: 600,
      })}
    >
      {isSideOpen && <Sidebar />}
      <article
        css={{
          flexGrow: 1,
          border: "1px solid #ccc",
        }}
      >
        <Switch>
          <Route path="/:id">
            <MemoPage />
          </Route>
          <Route path="*">
            <h3 css={(theme: Theme) => ({ color: theme.app.textColor })}>
              {"선택된 메모가 없습니다."}
            </h3>
          </Route>
        </Switch>
      </article>
    </section>
  );
};
export default Section;
