import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const [form, setForm] = useState({ name: "jack" });
  const changeForm = () =>
    // form.name='amy'错误写法
    setForm({
      ...form,
      name: "amy",
    });

  return (
    <div>
      <button onClick={handleClick}>{count}</button>
      <button onClick={handleClick}>{form.name}</button>
    </div>
  );
}
export default App;
