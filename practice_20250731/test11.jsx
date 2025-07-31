function Son(props) {
  return <div>this is son,{props.children}</div>;
}

function App() {
  return (
    <div>
      <Son>
        {/*自动将span标签内的东西放在children属性里面，可以传递给子组件 */}
        <span>this is span</span>
      </Son>
    </div>
  );
}
export default App;
