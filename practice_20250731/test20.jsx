import { useEffect, useState } from "react";

function Son() {
  //渲染的时候开启一个定时器
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("定时器执行中...");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <div>this is son</div>;
}

function App() {
  //通过条件渲染模拟组件卸载
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && <Son></Son>}
      <button onClick={() => setShow(false)}>卸载son组件</button>
    </div>
  );
}

export default App;
