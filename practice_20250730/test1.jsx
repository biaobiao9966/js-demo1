import React, { useState } from "react";
//useState是一个react提供的状态管理工具，用来记住和更新数据
function Test1() {
  const [state, setA] = useState({
    a: 123, //数据
  });

  //useState创造了一个记忆盒子，里面存放数据a：123，把这个盒子命名为state
  // setA就作为更新状态的函数名
  setTimeout(() => {
    setA({
      a: 1000,
    });
  }, 1000);
  //不是修改state.a而是创建新对象
  return (
    <div>
      {/* 正确渲染状态变量 */}
      <p>{state.a}</p>
    </div>
  );
}

// 正确导出组件函数本身（而非执行结果）
export default Test1;
