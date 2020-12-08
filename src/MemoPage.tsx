import { Memo } from "components";
import { useEditableMemo } from "hooks/useEditableMemo";
import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateMemo } from "slices/memoSlice";

const MemoPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [memoItem, setMemoItem] = useEditableMemo(Number.parseInt(id));
  useEffect(() => {
    dispatch(updateMemo({ ...memoItem }));
  }, [id]);
  return (
    <>
      {
        <Memo
          title={memoItem.title}
          body={memoItem.body}
          bgColor={memoItem.color}
          onChangeBgColor={(color) =>
            dispatch(updateMemo({ ...memoItem, color }))
          }
          onChangeBody={(body) => setMemoItem({ ...memoItem, body })}
          onChangeTitle={(title) => setMemoItem({ ...memoItem, title })}
          onBlur={() => dispatch(updateMemo(memoItem))}
        />
      }
    </>
  );
};
export default MemoPage;
