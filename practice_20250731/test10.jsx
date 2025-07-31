//父传子props
//父组件传递数据 子组件标签身上绑定属性
//子组件接受数据 props的参数
function Son(props) {
  return <div>this is son{props.name}</div>;
}

function App() {
  const name = "this is app name";
  return (
    <div>
      <Son name={name}></Son>
    </div>
  );
}
export default App;
