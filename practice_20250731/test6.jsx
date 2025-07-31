import "./test7_classs";
function App() {
  return (
    <div>
      {/*行内样式控制 */}
      <span style={{ color: "red", fontSize: "50px " }}>this is span</span>
      <span className="foo">this is class foo</span>
      {/*class类名控制 */}
    </div>
  );
}
export default App;
