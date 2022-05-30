import { useState } from "react";
import Counter from './components/Counter'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './Styles/App.css';
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
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
setPosts()
}



  return (
    <div className="App">
    <PostForm create ={createPost}/>
   <PostList posts={posts} title='Посты про JS'/> 
    </div>
  );
}


export default App;





//const newPost = {
  //   id:Date.now(),// получим айдишник из текущей даты ниже сокращённый пример
  //   title,
  //   body
  // }