import { Theme } from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    size: {
      maxWidth: number;
    };
    color: {
      primary: string;
    };
    app: {
      backgroundColor: string;
    };
    button: {
      textColor: string;
      backgroundColor: string;
      borderColor: string;
    };
    memo: {
      color: [string, string, string, string, string];
    };
  }
}

export const defaultTheme: Theme = {
  size: { maxWidth: 1024 },
  color: {
    primary: "#e6b1b1",
  },
  app: {
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#fff",
    borderColor: "#888",
    textColor: "#000",
  },
  memo: {
    color: ["#E0BBE4", "#957DAD", "#D291BC", "#FEC8D8", "#FFDFD3"],
  },
};

export const darkTheme: Theme = {
  ...defaultTheme,
  app: {
    backgroundColor: "#000",
  },
};
