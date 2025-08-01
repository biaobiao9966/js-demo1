//memo函数进行缓存
//只有props发生变化的时候才会重新渲染
import { memo, useState } from "react";

const MemoSon = memo(function Son() {
  console.log("我是子组件，我重新渲染了");
  return <div>this is son</div>;
});

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>

      <MemoSon></MemoSon>
    </div>
  );
}

export default App;
