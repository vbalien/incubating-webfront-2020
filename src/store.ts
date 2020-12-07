import { ThunkAction } from "redux-thunk";
import createRootReducer, { RootState } from "rootReducer";
import { configureStore, Action } from "@reduxjs/toolkit";
import { createHashHistory } from "history";
import { routerMiddleware } from "connected-react-router";

export const history = createHashHistory();

const store = configureStore({
  reducer: createRootReducer(history),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware(history)),
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
