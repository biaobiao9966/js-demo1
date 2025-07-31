import { useEffect, useState } from "react";

function App() {
  //没有依赖项 初始+组件更新
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("副作用函数被执行了");
  });
  return (
    <div>
      this is app
      <button onClick={() => setCount(count + 1)}>{count}次</button>
    </div>
  );
}
export default App;
