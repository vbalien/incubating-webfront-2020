import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MemoItem } from "repo/memo";
import { RootState } from "rootReducer";

export function useEditableMemo(
  id: number
): [MemoItem, Dispatch<SetStateAction<MemoItem>>] {
  const initMemo = useSelector((state: RootState) =>
    state.memo.items.find((m) => m.id === id)
  );
  const [memoItem, setMemoItem] = useState(initMemo);
  useEffect(() => {
    if (initMemo) setMemoItem({ ...initMemo });
  }, [initMemo]);

  return [memoItem, setMemoItem];
}
