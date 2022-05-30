import { useState } from "react";
import Counter from './components/Counter'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './Styles/App.css';
import { type } from "@testing-library/user-event/dist/type";
import PostForm from "./components/PostForm";

function App() {
// если много нужно отобразить постов то через массив создаю состояние конректно массивов постов
const[posts, setPosts]= useState([
  {id:1, title:'Javascript',body:'description'},
{id:2, title:'Javascript 2',body:'description'},
{id:3, title:'Javascript 3',body:'description'},

])


const createPost=(newPost)=>{ // на входе будет ожидать (newPost) его буду передавать в компоненте postform
setPosts(...posts, newPost)// изменяю состояние разворачиваю старый массив и в конец добавляю новый пост
}

//чтобы удалять пост получаем post из дочернего компонента
const removePost=(post)=> {
setPosts(posts.filter(p=>p.id !==post.id))// из массива постов необходимо удалить тот пост который передали аргументом, фильт возвращает новый массив отфлиртованый по условию сдесь проверили id если  айдишник какого то элемента из массива  равен тому айдишнику который передали постом то тогда этот элемент удаляем 
}

  return (
    <div className="App">
  <PostForm create ={createPost}/> {/*props create */}
  <hr style={{margin: '15px 0'}}/>
  <div> 
   <select>
   <option value='value'>'По названию</option>
   <option value='value'>'По описанию'</option>
   </select>
   </div>

  
  {posts.length !==0 
 ?  <PostList remove={removePost} posts={posts} title='Посты про JS'/> 
 : <h1 style={{textAlign:'center'}}>
 Посты не найдены!
 </h1>
  }
  </div>
  );
}


export default App;









{/* условная отрисовка если посты не найдены чтобы отображалась какая то запись проверила что длинна массива не равна 0 */}
// {posts.length !==0 
//   ?  <PostList remove={removePost} posts={posts} title='Посты про JS'/> 
//   :<div> Посты не найдены!</div>
//    }


//const newPost = {
  //   id:Date.now(),// получим айдишник из текущей даты ниже сокращённый пример
  //   title,
  //   body
  // }