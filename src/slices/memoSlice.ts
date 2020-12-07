import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { push } from "connected-react-router";
import { deleteMemo, getAllMemo, MemoItem, setMemo } from "repo/memo";
import { AppThunk } from "store";

export interface MemoState {
  items: MemoItem[];
  error: string;
  ready: boolean;
  filter: string;
}
const initialState: MemoState = {
  items: [],
  error: null,
  ready: false,
  filter: "",
};

function memoStart(state: MemoState) {
  state.error = null;
}
function memoFailure(
  state: MemoState,
  { payload: err }: PayloadAction<string>
) {
  state.error = err;
  console.log(err);
}

const memoSlice = createSlice({
  name: "memo",
  initialState,
  reducers: {
    setFilter(state, { payload }: PayloadAction<string>) {
      state.filter = payload;
    },
    getMemosSuccess(state, { payload }: PayloadAction<MemoItem[]>) {
      state.error = null;
      state.ready = true;
      state.items = payload;
    },
    getMemosFailure(state, { payload: err }: PayloadAction<string>) {
      state.ready = false;
      state.error = err;
      console.log(err);
    },
    getMemosStart(state) {
      state.error = null;
      state.ready = false;
      state.items = [];
    },
    updateMemoStart: memoStart,
    updateMemoFailure: memoFailure,
    updateMemoSuccess(state, { payload }: PayloadAction<MemoItem>) {
      const found = state.items.find((el) => el.id === payload.id);
      if (found) {
        found.color = payload.color;
        found.title = payload.title;
        found.body = payload.body;
      }
      state.error = null;
    },
    addMemoStart: memoStart,
    addMemoFailure: memoFailure,
    addMemoSuccess(state, { payload }: PayloadAction<MemoItem>) {
      state.items.unshift(payload);
      state.error = null;
    },
    deleteMemoStart: memoStart,
    deleteMemoFailure: memoFailure,
    deleteMemoSuccess(state, { payload }: PayloadAction<number>) {
      const foundIdx = state.items.findIndex((el) => el.id === payload);
      if (foundIdx !== -1) state.items.splice(foundIdx, 1);
      state.error = null;
    },
  },
});

export const {
  setFilter,
  getMemosSuccess,
  getMemosFailure,
  getMemosStart,
  updateMemoStart,
  updateMemoFailure,
  updateMemoSuccess,
  addMemoStart,
  addMemoFailure,
  addMemoSuccess,
  deleteMemoFailure,
  deleteMemoStart,
  deleteMemoSuccess,
} = memoSlice.actions;
export default memoSlice.reducer;

export const fetchMemoList = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getMemosStart());
    const memos = await getAllMemo();
    dispatch(getMemosSuccess(memos));
  } catch (e) {
    dispatch(getMemosFailure(e.toString()));
  }
};

export const updateMemo = (memo: Partial<MemoItem>): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(updateMemoStart());
    const result = await setMemo(memo);
    dispatch(updateMemoSuccess(result));
  } catch (e) {
    dispatch(updateMemoFailure(e.toString()));
  }
};

export const addMemo = (): AppThunk => async (dispatch) => {
  try {
    dispatch(addMemoStart());
    const result = await setMemo({ color: 0, title: "", body: "" });
    dispatch(addMemoSuccess(result));
    dispatch(push(`/${result.id}`));
  } catch (e) {
    dispatch(addMemoFailure(e.toString()));
  }
};

export const delMemo = (id: number): AppThunk => async (dispatch, getState) => {
  try {
    const state = getState();
    const items = state.memo.items;
    const foundIdx = items.findIndex((el) => el.id === id);
    dispatch(deleteMemoStart());
    await deleteMemo(id);
    dispatch(deleteMemoSuccess(id));

    if (items.length === 1) {
      dispatch(push("/"));
    } else if (`/${id}` === state.router.location.pathname)
      if (foundIdx === -1) dispatch(push("/"));
      else if (foundIdx == 0) dispatch(push(`/${items[1].id}`));
      else if (foundIdx == items.length - 1)
        dispatch(push(`/${items[foundIdx - 1].id}`));
      else dispatch(push(`/${items[foundIdx + 1].id}`));
  } catch (e) {
    dispatch(deleteMemoFailure(e.toString()));
  }
};
