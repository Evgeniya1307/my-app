import { useState } from "react";

// добавляю ещё одно состояние

function App() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState("текст в инпуте"); // будем его менять в инпуте

  function increment() {
    setLikes(likes + 1);
  }

  function decrement() {
    setLikes(likes - 1);
  }
  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input type="text" value={value}
      onChange={event=>event.target}//onChange первым параметром принимют эвент  у которого есть поле таргет  сам домэлемент вэлью значение которое в нём находится
      /> 
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}


export default App;

// счётчик с 2мя кнопками
// function App() {
// const [likes, setLikes]= useState(0) // деструктуризация

// function increment(){
// setLikes(likes+1) //напрямую не меняем передаём в функцию
// }

// function decrement(){
// setLikes(likes-1)
// }

// return (
//     <div className="App">
//     <h1>{likes}</h1>
//     <button onClick={increment}>increment</button>
//     <button onClick={decrement}>decrement</button>

//     </div>
//   );
// }

// export default App;
