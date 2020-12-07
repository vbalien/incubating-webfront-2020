import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getInitialAppState, setAppState } from "repo/app";
import { initRepo } from "repo/memo";
import { AppThunk } from "store";

export interface AppState {
  isDarkmode: boolean;
  isSideOpen: boolean;
  DBReady: boolean;
}

const appSlice = createSlice({
  name: "app",
  initialState: getInitialAppState(),
  reducers: {
    toggleDarkmode(state: AppState) {
      state.isDarkmode = !state.isDarkmode;
      setAppState(state);
    },
    toggleSidebar(state: AppState) {
      state.isSideOpen = !state.isSideOpen;
      setAppState(state);
    },
    initDBStart(state) {
      state.DBReady = false;
    },
    initDBFailure(state, { payload: err }: PayloadAction<string>) {
      state.DBReady = false;
      console.log(err);
    },
    initDBSuccess(state) {
      state.DBReady = true;
    },
  },
});

export const {
  toggleDarkmode,
  toggleSidebar,
  initDBStart,
  initDBSuccess,
  initDBFailure,
} = appSlice.actions;

export default appSlice.reducer;

export const initDB = (): AppThunk => async (dispatch) => {
  try {
    dispatch(initDBStart());
    await initRepo();
    dispatch(initDBSuccess());
  } catch (err) {
    dispatch(initDBFailure(err.toString()));
  }
};
