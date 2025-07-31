const list = [
  { id: 1001, name: "vue" },
  { id: 1002, name: "react" },
  { id: 1003, name: "abc" },
];
function App() {
  return (
    <div>
      this app
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
//map函数遍历数组，item获取数组所有的值
