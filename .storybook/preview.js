import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider, Global } from "@emotion/react";
import { defaultTheme } from "../src/themes";
import "normalize.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

addDecorator((story) => (
  <>
    <ThemeProvider theme={defaultTheme}>
      <Global
        styles={{
          "*": {
            boxSizing: "border-box",
          },
        }}
      />
      <div style={{ padding: "3rem" }}>{story()}</div>
    </ThemeProvider>
  </>
));
