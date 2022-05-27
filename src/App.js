import { useState } from "react";
import Counter from './components/Counter'
import PostItem from "./components/PostItem";
import './Styles/App.css';


function App() {
// если много нужно отобразить постов то через массив создаю состояние конректно массивов постов
const[post, setPosts]= useState([
  {id:1, title:'Javascript',body:'description'},
{id:2, title:'Javascript 2',body:'description'},
{id:3, title:'Javascript 3',body:'description'},

])


  return (
    <div className="App">
    
    {postMessage.map(post=>
      <div>Post</div>
      )} 

    </div>
  );
}


export default App;





// {postMessage.map(post=>
//   <div>Post</div>
//   )}  обращаюсь к списков постов вызываю map в неё передаю колбэк где каждый элемент переобразовываю в jsx




 // передала значие для пропс в компоненте этой смотри как выглядит props.post.id и дальше
//  <PostItem post={{id:1, title:'Javascript',body:'description'}}/> 






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