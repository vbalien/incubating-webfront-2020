import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "rootReducer";
import { initDB } from "slices/appSlice";
import { fetchMemoList } from "slices/memoSlice";

export function useDB(): [boolean, boolean] {
  const dispatch = useDispatch();
  const dbReady = useSelector((state: RootState) => state.app.DBReady);
  const memoReady = useSelector((state: RootState) => state.memo.ready);
  useEffect(() => {
    if (!dbReady) dispatch(initDB());
  }, [dbReady]);

  useEffect(() => {
    if (!memoReady) if (dbReady) dispatch(fetchMemoList());
  }, [dbReady, memoReady]);
  return [dbReady, memoReady];
}
