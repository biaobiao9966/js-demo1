//保证引用稳定->useMemo 组件渲染过程中缓存一个值
import { memo, useState, useMemo } from "react";

const MemoSon = memo(function Son({ list }) {
  console.log("我是子组件，我重新渲染了");
  return <div>this is son{list}</div>;
});

function App() {
  const [count, setCount] = useState(0);
  const list = useMemo(() => {
    return [1, 2, 3];
  }, []);
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>change count</button>
      <MemoSon list={list}></MemoSon>
    </div>
  );
}

export default App;
