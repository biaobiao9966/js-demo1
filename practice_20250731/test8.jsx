//1.声明react状态--useState
//2.value属性绑定react状态

import { useState } from "react";

//3.onChang事件 通过e参数拿到输入框最新的值，反向修改到react中
function App() {
  const [value, setValue] = useState(" ");
  return (
    <div>
      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
export default App;
