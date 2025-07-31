import { useState } from "react";

// 在子组件中调用父组件中的函数并传递实参
function Son(onGetMsg) {
  const sonMsg = "this is son msg";

  return (
    <div>
      this is son
      <button onClick={() => onGetMsg(sonMsg)}>sendMsg</button>
    </div>
  );
}

function App() {
  const [msg, setMsg] = useState("");
  const getMsg = (msg) => {
    console.log(msg);
  };
  return (
    <div>
      this is app,{msg}
      <Son onGetMsg={getMsg}></Son>
    </div>
  );
}
export default App;
//这里面的msg作为形参接受sonMsg传来的数据
