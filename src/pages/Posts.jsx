import { useState, useRef, useEffect } from "react";
import PostService from '../API/PostService'
import useFetching from '../hooks/useFetching'
import {usePosts} from '../hooks/usePosts'
import PostFilter from '../components/PostFilter'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import Loader from '../components/UI/Loader/Loader'
import MyButton from "../components/UI/button/MyButton";
import MyModal from '../components/UI/MyModal/MyModal'
import Pagination from '../components/UI/pagination/Pagination'
import {getPageCount} from '../utils/pages'
import MySelect from "../components/UI/select/MySelect";
import {useObserver} from '../hooks/useObserver'



function Posts() {
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
  const lastElement = useRef();
 //хук который предоставляет обработку индекации загрузки и обработку ошибки какого то запроса на получение данных
  const [fetchPosts,isPostsLoading, postError ]= useFetching(
    async(limit, page)=>{
  const response = await PostService.getAll(limit, page) // вернёт список постов
  setPosts([...posts,...response.data])// то что получили в теле ответа то что вернул сервер // для ожидание крутилка
 const totalCount = response.headers["x-total-count"]// из хедара достаю общее ко-во постов
  setTotalPages(getPageCount(totalCount, limit))// первый параметр количество вторым лимит
});


useObserver(lastElement, page < totalPages, isPostsLoading, () => {
  setPage(page + 1);
});
  


useEffect(() => {
  fetchPosts(limit, page);
}, [page, limit]);
  
  
  const createPost = (newPost) => {
    // на входе будет ожидать (newPost) его буду передавать в компоненте postform
    setPosts([...posts, newPost]); // изменяю состояние разворачиваю старый массив и в конец добавляю новый пост
    setModal(false); // скрывалось модалка засетила в состояние false
  };



  //чтобы удалять пост получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id)); // из массива постов необходимо удалить тот пост который передали аргументом, фильт возвращает новый массив отфлиртованый по условию сдесь проверили id если  айдишник какого то элемента из массива  равен тому айдишнику который передали постом то тогда этот элемент удаляем
  };

//функция изменяющая номер страницы и подгружать новые данные
const changePage= (page)=> {
  setPage(page)// изменение состояния
}

  return (
    <div className="App">
    <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={createPost} />
    </MyModal>
    <hr style={{ margin: "15px 0" }} />
    <PostFilter filter={filter} setFilter={setFilter} />
    <MySelect
    value={limit}
    onChange={(value) => setLimit(value)}
    defaultValue="Кол-во элементов на странице"
    options={[
      { value: 5, name: "5" },
      { value: 10, name: "10" },
      { value: 25, name: "25" },
      { value: -1, name: "Показать всё" },
    ]}
    />


    {postError && <h1>Произошла ошибка ${postError}</h1>}

    {isPostsLoading && (
      <div
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}   //если эта переменная равна true то будет крутёлка
  >
  <Loader/>
  </div>
      )}
      <PostList
      remove={removePost}
      posts={sortedAndSearchedPosts}
      title="Посты про JavaScript"
    />
 
    <div ref={lastElement} style={{ height: 28, background: "red" }} />
    <Pagination page={page} changePage={changePage} totalPages={totalPages} />
  </div>
);
}

export default Posts;