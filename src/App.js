import { useState } from "react";
import Counter from './components/Counter'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './Styles/App.css';
import { type } from "@testing-library/user-event/dist/type";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
// если много нужно отобразить постов то через массив создаю состояние конректно массивов постов
const[posts, setPosts]= useState([
  {id:1, title:'Ja',body:'bb'},
{id:2, title:'va 2',body:'aa'},
{id:3, title:'Javascript 3',body:'xx'},

])

//реализую двухсторонне связывание для этого создаю новое состояние
const[selectedSort, setSelectedSort]=useState('')
const[searchQuery, setsearchQuery]= useState('')// состояние для  <MyInput placeholder='Поиск...'/>
const sortedPosts=[...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))//передаю отсортированный массив sort () не возвращает новый отсортированный массив а муттирует тот массив к которому эта функция была применена развернём старый массив в новый массив и отсортирую этот массив )

// для поиска нужна фильтрация чтобы удалять некоторые элементы массива но если с массива удалить вернуть их нельзя


const createPost=(newPost)=>{ // на входе будет ожидать (newPost) его буду передавать в компоненте postform
setPosts(...posts, newPost)// изменяю состояние разворачиваю старый массив и в конец добавляю новый пост
}

//чтобы удалять пост получаем post из дочернего компонента
const removePost=(post)=> {
setPosts(posts.filter(p=>p.id !==post.id))// из массива постов необходимо удалить тот пост который передали аргументом, фильт возвращает новый массив отфлиртованый по условию сдесь проверили id если  айдишник какого то элемента из массива  равен тому айдишнику который передали постом то тогда этот элемент удаляем 
}

// после того как пользователь выбрал сортировку алгоритм нужно массив отсортировать
const sortPosts = (sort)=>{
  setSelectedSort(sort)// перезаписала состояние


}

  return (
    <div className="App">
  <PostForm create ={createPost}/> {/*props create */}
  <hr style={{margin: '15px 0'}}/>
  <div> 
  <MyInput 
  value={setsearchQuery}
  onChange={e=> setsearchQuery(e.target.value)}//управляемый инпут
  placeholder='Поиск...'
  />
  <MySelect 
  value={selectedSort}
  onChange={sortPosts}//вызываю функцию setSelectedSort и передаю то что приходит из селекта т,е та опция что выбрал пользователь
  defaultValue='Сортировка '
  options={[
    {value: 'title', name:'По названию'},// объект содержит 2поля это value в нашем случае с велью тайтол а второе с велью бади сортировка по заголовку и по телу и name сам текст который находится внутри опций
  {value: 'body', name: 'По описанию'},
  ]}// передать массив опций
  />
   </div>

  
  {posts.length !==0 
 ?  <PostList remove={removePost} posts={sortedPosts} title='Посты про JS'/> // буду передавать отсортированный массив posts={sortedPosts}
 : <h1 style={{textAlign:'center'}}>
 Посты не найдены!
 </h1>
  }
  </div>
  );
}


export default App;






//<MyInput placeholder='Поиск...'/> механизм поиска в инпут вводим название поста и все исчезают и мы видим только тот который нужен 



//<MySelect 
//defaultValue='Сортировка '
//options={[]}// передать массив опций
 // передаю пропсы

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