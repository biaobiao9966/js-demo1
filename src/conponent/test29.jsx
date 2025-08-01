import { useState, useMemo } from "react";
//计算斐波那契数列之和
function fib(n) {
  console.log("计算函数被执行了");
  if (n < 3) return 1;
  return fib(n - 2) + fib(n - 1);
}
function App() {
  const [count1, setCount1] = useState(0);
  const result = useMemo(() => {
    //返回计算得到的结果
    return fib(count1);
  }, [count1]);

  //只有当count1发生变化时，执行计算函数和组件重新渲染，Count2怎么变化都不会重新渲染
  const [count2, setCount2] = useState(0);
  console.log("组件被重新渲染了");
  return (
    <div className="App">
      this is app
      <button onClick={() => setCount1(count1 + 1)}>change count1</button>
      <button onClick={() => setCount2(count2 + 1)}>change count2</button>
      {result}
    </div>
  );
}
export default App;
