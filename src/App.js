import { useState } from "react";
import Counter from './components/Counter'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './Styles/App.css';
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import { type } from "@testing-library/user-event/dist/type";

function App() {
// если много нужно отобразить постов то через массив создаю состояние конректно массивов постов
const[posts, setPosts]= useState([
  {id:1, title:'Javascript',body:'description'},
{id:2, title:'Javascript 2',body:'description'},
{id:3, title:'Javascript 3',body:'description'},

])

const [title, setTitle] = useState('')
const [body, setBody]= useState('') // для очищения инпута после создания поста


const addNewPost=(e)=>{
  e.preventDefault()
  const newPost = {
    id:Date.now(),// получим айдишник из текущей даты
    title,
    body
  }
setPosts([...posts,newPost])// добавить созданный объект в массив постов [...posts,newPost] добавляем старый массив и в конец новый 
}


  return (
    <div className="App">
    <form>
    {/*управляемый компонент */}
    <MyInput
    value={body} //двухсторонее связывание value input с состоянием body
    onChange = {e=>setBody(e.target.value)}//отлеживать когда пользователь что то вводит
    type = 'text' 
    placeholder='Название поста'
    />
    
    <MyInput 
    type = 'text' placeholder = 'Описание поста'/>
    <MyButton onClick={addNewPost}>Создать пост </MyButton> 
    </form>
   <PostList posts={posts} title='Посты про JS'/> 
    </div>
  );
}


export default App;





//неуправляемый 
// <MyInput 
// ref={bodyInputRef}
// type = 'text' placeholder = 'Описание поста'/>
// <MyButton onClick={addNewPost}>Создать пост </MyButton> 
// </form>
// <PostList posts={posts} title='Посты про JS'/> 
// </div>
// );
// } 




// <MyInput 
// type = 'text' placeholder = 'Описание поста'/>
// <MyButton onClick={addNewPost}>Создать пост </MyButton> 
// </form>
// <PostList posts={posts} title='Посты про JS'/> 
// </div>
// );
// }



//e.preventDefault()// предотвращает дэфолтное поведение браузера страница не обновлчяется