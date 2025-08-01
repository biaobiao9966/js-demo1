//传递一个引用类型的prop，比较的事最新值和旧值的引用是否相等
//当父组件函数重新执行 实际上形成的是新的数组引用
import { memo, useState } from "react";

const MemoSon = memo(function Son({ list }) {
  console.log("我是子组件，我重新渲染了");
  return <div>this is son{list}</div>;
});

function App() {
  const [count, setCount] = useState(0);
  const list = [1, 2, 3];
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>change count</button>
      <MemoSon list={list}></MemoSon>
    </div>
  );
}

export default App;
