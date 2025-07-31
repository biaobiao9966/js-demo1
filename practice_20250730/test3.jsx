//function App(){
//const handleClick = (e) =>{
//console.log("被电击了",e)
//}
//return(
//  <div>
//  <button onClick={handleClick}>click me</button>
//</div>
//  )
//}
//传递自定义参数
function App() {
  const handleClick = (name) => {
    console.log("被电击了", name);
  };
  return (
    <div>
      <button onClick={() => handleClick("jack")}>click me</button>
    </div>
  );
}
export default App();
