import { useState, useMemo } from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./Styles/App.css";
import { type } from "@testing-library/user-event/dist/type";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
  // если много нужно отобразить постов то через массив создаю состояние конректно массивов постов
  const [posts, setPosts] = useState([
    { id: 1, title: "Ja", body: "bb" },
    { id: 2, title: "va 2", body: "aa" },
    { id: 3, title: "Javascript 3", body: "xx" },
  ]);

 //состояние для для объекта для сортировки и поисковая строка за логику сортировку отчечает postfilter
const[filter, setFilter]= useState({sort: '', query:''})
  
  
 
 //создаю функцию проверяю если selectedSort если там не пустая строка то вернуть отсортирован,массив ,иначе обычный массив постов 
 //лежит отсортированный массив
  const sortedPosts = useMemo(() => {
    console.log('Отработала эта функция')
    if(filter.sort){
      return[...posts].sort((a, b)=> a [filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  

  // для поиска нужна фильтрация чтобы удалять некоторые элементы массива но если с массива удалить вернуть их нельзя
const sortedAndSearchedPosts = useMemo(()=>{
return sortedPosts.filter(post=>post.title.toLowerCase().includes(filter.query))// по поисковой строке необходимо отфильтровать этот массив передаю колбэк обращаюсь к названию поста поле title и вызываю у него includes()//toLowerCase() поиск чувствителен к регистру вызвали функцию для названия поста и поисковой строки
}, [filter.query, sortedPosts])// будет попадать в массив поисковая строка и отсортированный массив

  const createPost = (newPost) => {
    // на входе будет ожидать (newPost) его буду передавать в компоненте postform
    setPosts(...posts, newPost); // изменяю состояние разворачиваю старый массив и в конец добавляю новый пост
  };

  //чтобы удалять пост получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id)); // из массива постов необходимо удалить тот пост который передали аргументом, фильт возвращает новый массив отфлиртованый по условию сдесь проверили id если  айдишник какого то элемента из массива  равен тому айдишнику который передали постом то тогда этот элемент удаляем
  };

 

  return (
    <div className="App">
      <PostForm create={createPost} /> {/*props create */}
      <hr style={{ margin: "15px 0" }} />
      <PostFilter 
      filter={filter}
       setFilter={setFilter}
       /> 
      
      
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Посты про JS"/> // буду передавать отсортированный и отфильтрованный массив будет работать и поиск и сотировка
    </div>
  );
}

export default App;

//<MyInput placeholder='Поиск...'/> механизм поиска в инпут вводим название поста и все исчезают и мы видим только тот который нужен

//<MySelect
//defaultValue='Сортировка '
//options={[]}// передать массив опций
// передаю пропсы

{
  /* условная отрисовка если посты не найдены чтобы отображалась какая то запись проверила что длинна массива не равна 0 */
}
// {posts.length !==0
//   ?  <PostList remove={removePost} posts={posts} title='Посты про JS'/>
//   :<div> Посты не найдены!</div>
//    }

//const newPost = {
//   id:Date.now(),// получим айдишник из текущей даты ниже сокращённый пример
//   title,
//   body
// }


//хук useMemo(()=>{  //первым параметром функция колбэк вторым массив 
//зависимостпей  она работает производит вычесление
// в данном случае массив запомингает результат 
//этих вычислений и кэширует(мемонизация)и на каждую 
//перерисовку компонента она не перещитывает 
//заново она достаёт отсортированный массив из кэша но
// каждый раз какая то зависимостей изменилась то 
//функция вновь перещитывает и кэширует до тех пора 
//пока вновь одна из зависимостей не изменится
// return [...posts].sort(...)
//}, [selectedSort, posts]) 
// если массив пустой то функция отработает единожды запомнит результат и больше вызванна не будет






 //реализую двухсторонне связывание для этого создаю новое состояние
  // const [selectedSort, setSelectedSort] = useState("");
  // const [searchQuery, setsearchQuery] = useState(""); // состояние для  <MyInput placeholder='Поиск...'/>




   // после того как пользователь выбрал сортировку алгоритм нужно массив отсортировать
   //const sortPosts = (sort) => {
   // setSelectedSort(sort); // перезаписала состояние
  //}



  //<PostFilter filter={filter} setFilter={setFilter}/> // функцию которая это состояние изменяет 

  //<PostList remove={removePost}posts={sortedAndSearchedPosts}title="Посты про JS"/> // буду передавать отсортированный и отфильтрованный массив будет работать и поиск и сотировка