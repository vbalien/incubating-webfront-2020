import { AppState } from "slices/appSlice";

export function getInitialAppState(): AppState {
  const isDarkmode = localStorage.getItem("isDarkmode");
  const isSideOpen = localStorage.getItem("isSideOpen");
  return {
    isDarkmode: isDarkmode === null ? false : JSON.parse(isDarkmode),
    isSideOpen: isSideOpen === null ? true : JSON.parse(isSideOpen),
    DBReady: false,
  };
}

export function setAppState(data: AppState): void {
  localStorage.setItem("isDarkmode", Boolean(data.isDarkmode).toString());
  localStorage.setItem("isSideOpen", Boolean(data.isSideOpen).toString());
}
