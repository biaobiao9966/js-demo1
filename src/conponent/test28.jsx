import { useReducer } from "react";

// 1. 定义reducer函数（可以放在组件外部或内部）
//2.组件中调用useReducer(reducer,0)=>[state,dispatch]
//3.调用dispatch({type:"INC})=>通知reducer产生一个新的状态 使用这个新状态更新UI
function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "SET":
      return action.payload;
    default:
      return state;
  }
}

function App() {
  // 2. 使用useReducer
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div className="App">
      this is App
      {state}
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
      <button onClick={() => dispatch({ type: "SET", payload: 100 })}>
        update
      </button>
    </div>
  );
}

export default App;
