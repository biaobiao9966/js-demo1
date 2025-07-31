import { useEffect, useState } from "react";

function App() {
  //传入特定依赖项，初始+依赖项变化时执行
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("副作用被执行了");
  }, [count]);
  return (
    <div>
      this is app
      <button onClick={() => setCount(count + 1)}>{count}次</button>
    </div>
  );
}
export default App;
