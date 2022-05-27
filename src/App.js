import { useState } from "react";
import Counter from './components/Counter'
import './Styles/App.css';


function App() {
  const [value, setValue] = useState("текст в инпуте"); // будем его менять в инпуте
  return (
    <div className="App">
    <div className="post">
    <div className="post_content">
    <strong>1. JavaScript</strong>
    <div>
    JavaScript - язык программирования
    </div>
    </div>
    < div className="post_btns">
    <button>Удалить</button>
    </div>
    </div>

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



// добавляю ещё одно состояние
//const [value, setValue] = useState("текст в инпуте"); // будем его менять в инпуте
// return (
//   <div className="App">
//     <h1>{likes}</h1>
//     <h1>{value}</h1>
//     <input type="text" value={value}
//     onChange={event=> setValue(event.target.value)}//onChange первым параметром принимют эвент  у которого есть поле таргет  сам домэлемент вэлью значение которое в нём находится теперь что пишу в инпут отображается
//     /> 
//   </div>
// );