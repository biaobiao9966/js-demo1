import React from "react";
//createContext方法创建一个上下文对象
import { createContext, useContext } from "react";
const MsgContext = createContext();
// 在顶层组件 通过Provider组件提供数据
// 在底层组件 通过useContext钩子函数使用数据

function A() {
  return (
    <div>
      this is A componet
      <B></B>
    </div>
  );
}

function B() {
  const msg = useContext(MsgContext);
  return <div>this is B componet,{msg}</div>;
}
function App() {
  const msg = "this is msg";
  return (
    <div>
      <MsgContext.Provider value={msg}>
        this is App
        <A />
      </MsgContext.Provider>
    </div>
  );
}
export default App;
