import { useState, useMemo, useEffect } from "react";
import PostList from "./components/PostList";
import "./Styles/App.css";
import { type } from "@testing-library/user-event/dist/type";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount } from "./API/utils/pages";

function App() {
  // если много нужно отобразить постов то через массив создаю состояние конректно массивов постов
  const [posts, setPosts] = useState([]);
//состояние для для объекта для сортировки и поисковая строка за логику сортировку отчечает postfilter
  const [filter, setFilter] = useState({ sort: "", query: "" });
  //состояние отвечающее видимо модалка или нет
  const [modal, setModal] = useState(false);
  //состояние, буду помещать общее количество постов
  const [totalPages, setTotalPages]=useState(0)// 0-ещё не знаю сколько постов
 // для лимита
const [limit, setLimit]=useState(10)
//состояние где хранить номер текущей страницы
const[page, setPage]=useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query); // сортирует и фильтрует
 //хук который предоставляет обработку индекации загрузки и обработку ошибки какого то запроса на получение данных
  const [fetchPosts,isPostsLoading, postError ]= useFetching(async()=>{
  const response = await PostService.getAll(limit, page) // вернёт список постов
  setPosts(response.data)// то что получили в теле ответа то что вернул сервер // для ожидание крутилка
 const totalCount = response.headers['x-total-count']// из хедара достаю общее ко-во постов
  setTotalPages(getPageCount(totalCount, limit))// первый параметр количество вторым лимит
})
  


  useEffect(() => {
fetchPosts()
  }, [])
  
  
  
  const createPost = (newPost) => {
    // на входе будет ожидать (newPost) его буду передавать в компоненте postform
    setPosts([...posts, newPost]); // изменяю состояние разворачиваю старый массив и в конец добавляю новый пост
    setModal(false); // скрывалось модалка засетила в состояние false
  };



  //чтобы удалять пост получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id)); // из массива постов необходимо удалить тот пост который передали аргументом, фильт возвращает новый массив отфлиртованый по условию сдесь проверили id если  айдишник какого то элемента из массива  равен тому айдишнику который передали постом то тогда этот элемент удаляем
  };

  return (
    <div className="App">
    <button onClick={fetchPosts}>Get posts</button>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} /> {/*props create */}
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} 
      setFilter={setFilter} />
{postError && 
<h1>Произошла ошибка ${postError}</h1> // на отработку ошибок если в постэррор чтото находится то покажу заголовоки сообщение об ошибке <h1></h1> ,
}
      {isPostsLoading
? <div style={{display:'flex', justifyContent: 'center', marginTop: 50}}><Loader/> </div>   //если эта переменная равна true то будет крутёлка
:  <PostList
remove={removePost}
posts={sortedAndSearchedPosts}
title="Посты про JS"
/> // если нет то список постов показать 
}

     
    </div>
  );
}

export default App;

//MyButton style={{marginTop:30} чтобы кнопка не прилепала сверху

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
// marginTop: 50 оступ сверху





// функция отправляет запрос на сервер получать данные и помещать в состояние с постами
// async function fetchPosts(){
 // const posts = await PostService.getAll() // вернёт список постов
 // setPosts(posts)// то что получили в теле ответа то что вернул сервер
//   setIsPostLoading(true)// перед отправкой на сервер
//    setTimeout(async()=>{
//      setIsPostLoading(false)//после оканчания запроса
//    }, 1000) // будет показывать идёт загрузка 1 сек
  
//  }