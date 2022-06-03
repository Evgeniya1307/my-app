import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Styles/App.css';
import About from "./pages/About";
import Posts from "./pages/Posts";


function App(){
return (
<BrowserRouter>
<div className="navbar">

</div>
<Routes>
<Route path="/about"  element={<About />} />
<Route path="/posts"  element={<Posts />} />
</Routes>
</BrowserRouter>
)

}



export default App;











//const AppRouter = () => {
//   return (
//     <Routes>
//         <Route path="/about"  element={<About />} />
//         <Route path="/posts"  element={<Posts />} />
//         <Route path="*"       element={<Error />} />
//     </Routes>
// );
// };


































//<Pagination page={page} changePage={changePage} totalPages={totalPages}/> // передаю пропсы page-номер страницы changepage-функция изменяющая и totalpages общее количество страниц

//fetchPosts()// внутри себя использует состояние лимит и страницы

// <button onClick={fetchPosts}>Get posts</button>  

//MyButton style={{marginTop:30} чтобы кнопка не прилепала сверху

//<MyInput placeholder='Поиск...'/> механизм поиска в инпут вводим название поста и все исчезают и мы видим только тот который нужен

//<MySelect
//defaultValue='Сортировка '
//options={[]}// передать массив опций
// передаю пропсы

 //условная отрисовка если посты не найдены чтобы отображалась какая то запись проверила что длинна массива не равна 0 */



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