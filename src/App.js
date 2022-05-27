import { useState } from "react";

function App() {
const [count, setCount]= useState(0) // деструктуризация


  return (
    <div className="App">
    <h1>{likes}</h1>
    <button onClick={increment}>increment</button>
    <button onClick={()=> likes -=1}>decrement</button>
     
    </div>
  );
}

export default App;
