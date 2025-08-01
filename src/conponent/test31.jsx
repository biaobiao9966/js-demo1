//react.memo比较机制
// 传递一个简单类型的prop prop变化时组件重新渲染
import { memo, useState } from "react";

const MemoSon = memo(function Son(count) {
  console.log("我是子组件，我重新渲染了");
  return <div>this is son{count}</div>;
});

function App() {
  const [count, setCount] = useState(0);
  const num = 100;
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>change count</button>
      <MemoSon count={num}></MemoSon>
    </div>
  );
}

export default App;
