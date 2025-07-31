// 子传父A=>App

import { useState } from "react";

// 父传子App=>B
function A(onGetName) {
  const name = "this is name";
  return (
    <div>
      this is A componet
      <button onClick={() => onGetName(name)}>send</button>
    </div>
  );
}

function B(name) {
  return (
    <div>
      this is B componet,
      {name}
    </div>
  );
}

function App() {
  const [name, setName] = useState("");
  const getName = (name) => {
    console.log(name);
    setName(name);
  };
  return (
    <div>
      this is App
      <A onGetName={getName}></A>
      <B name={name}></B>
    </div>
  );
}
export default App;
