import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "../src/themes";
import "normalize.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

addDecorator((story) => (
  <>
    <ThemeProvider theme={defaultTheme}>
      <div style={{ padding: "3rem" }}>{story()}</div>
    </ThemeProvider>
  </>
));
