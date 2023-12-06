import "./styles.css";

export default function App() {
  const handleAlert =()=>{
    alert('clicked....')
  }
  return (
    <div className="App">
      <h1 onClick={handleAlert}>Hello CodeSandbox Test....1234</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
