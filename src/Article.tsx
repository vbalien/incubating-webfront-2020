import { Memo } from "components";
import React, { FC } from "react";

const Article: FC = () => {
  return (
    <article
      css={{
        flexGrow: 1,
        marginLeft: 10,
      }}
    >
      <Memo />
    </article>
  );
};
export default Article;
