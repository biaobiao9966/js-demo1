// react中获取Dom
import { useRef } from "react";

// useRef生成引用对象，绑定到dom标签上
// dom可用时，ref.current获取dom
function App() {
  const inputRef = useRef(null);
  const showDom = () => {
    console.log(inputRef.current);
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={showDom}>获取dom</button>
    </div>
  );
}

export default App;
