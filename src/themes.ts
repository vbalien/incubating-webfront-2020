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
      hoverBackgroundColor: string;
      textColor: string;
    };
    button: {
      backgroundColor: string;
      borderColor: string;
    };
    filter: {
      hover: string;
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
    hoverBackgroundColor: "#eee",
    textColor: "#000",
  },
  button: {
    backgroundColor: "#fff",
    borderColor: "#888",
  },
  filter: {
    hover: "brightness(90%)",
  },
  memo: {
    color: ["#E0BBE4", "#957DAD", "#D291BC", "#FEC8D8", "#FFDFD3"],
  },
};

export const darkTheme: Theme = {
  ...defaultTheme,
  app: {
    backgroundColor: "#000",
    textColor: "#888",
    hoverBackgroundColor: "#333",
  },
  filter: {
    hover: "brightness(120%)",
  },
  button: {
    backgroundColor: "#000",
    borderColor: "#888",
  },
};
