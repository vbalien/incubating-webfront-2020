import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import appReducer, { AppState } from "slices/appSlice";
import memoReducer, { MemoState } from "slices/memoSlice";

export type RootState = {
  router: RouterState;
  app: AppState;
  memo: MemoState;
};
const createRootReducer = (history: History): Reducer<RootState> =>
  combineReducers({
    router: connectRouter(history),
    app: appReducer,
    memo: memoReducer,
  });

export default createRootReducer;
