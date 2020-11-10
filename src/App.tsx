import { Button, Icon } from "components";
import "normalize.css";
import React from "react";
import { hot } from "react-hot-loader/root";

function App() {
  return (
    <div>
      <Button>
        <Icon icon="plus" />
        Hello Memo App
      </Button>
    </div>
  );
}

export default hot(App);
