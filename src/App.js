import { useState } from "react";

function App() {
const [likes, setLikes]= useState(0) // деструктуризация

function increment(){
setLikes(likes+1) //напрямую не меняем передаём в функцию
}
  
function decrement(){
setLikes(likes-1)
}

return (
    <div className="App">
    <h1>{likes}</h1>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
     
    </div>
  );
}

export default App;
