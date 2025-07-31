import { useEffect, useState } from "react";

function App() {
  //传入空数组依赖 只会在初始渲染时执行一次
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("副作用被执行了");
  }, []);
  return (
    <div>
      this is app
      <button onClick={() => setCount(count + 1)}>{count}次</button>
    </div>
  );
}
export default App;
