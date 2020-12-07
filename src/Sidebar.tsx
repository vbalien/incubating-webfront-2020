import { Button, Icon, MemoList } from "components";
import FilterInput from "components/FilterInput";
import React, { FC, useCallback, useMemo } from "react";
import { MemoItem } from "repo/memo";
import { useDispatch, useSelector } from "react-redux";
import { addMemo, delMemo, setFilter } from "slices/memoSlice";
import { useHistory } from "react-router-dom";
import { RootState } from "rootReducer";
import { push } from "connected-react-router";

const Sidebar: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const selected = useMemo(
    () => Number.parseInt(history.location.pathname.match(/\/(.*)/)[1]),
    [history.location.pathname]
  );

  const onDeleteMemo = useCallback(
    (_, item: MemoItem) => {
      dispatch(delMemo(item.id));
    },
    [history]
  );

  const onAddMemo = useCallback(() => {
    dispatch(addMemo());
  }, []);

  const onFilter = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value));
  }, []);

  const onSelected = useCallback(
    (_, item: MemoItem): void => {
      if (item.id !== selected) dispatch(push(`/${item.id}`));
    },
    [selected]
  );
  const visibleMemos = useSelector((state: RootState) =>
    state.memo.items.filter(
      (m) =>
        m.title.includes(state.memo.filter) ||
        m.body.includes(state.memo.filter)
    )
  );

  return (
    <aside
      css={{
        width: "auto",
        border: "1px solid #ccc",
        display: "flex",
        position: "relative",
        flexDirection: "column",
        marginRight: 10,
      }}
    >
      <FilterInput onChange={onFilter} />
      <MemoList
        css={{ flexGrow: 1, overflowY: "scroll", paddingBottom: 40 }}
        items={visibleMemos}
        onSelected={onSelected}
        onDelete={onDeleteMemo}
        selectedItemId={selected}
      ></MemoList>
      <Button
        primary
        rounded
        shadow
        width={45}
        height={45}
        css={{ position: "absolute", bottom: 10, right: 10 }}
        onClick={onAddMemo}
      >
        <Icon icon="plus" color="#000" />
      </Button>
    </aside>
  );
};
export default Sidebar;
