function Son(props) {
  // props: 对象里包含了父组件传递过来的所有数据
  return (
    <div>
      this is son {props.name}
      {props.children}
    </div>
  );
}

function App() {
  const name = "this is app name";

  return (
    <div>
      <Son name={name} cb={() => console.log(123)}></Son>
    </div>
  );
}

export default App;
