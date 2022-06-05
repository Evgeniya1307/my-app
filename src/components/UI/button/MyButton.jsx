import React from 'react'
import classes from '../button/MyButton.module.css'

function MyButton({ children, ...props }) {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
}

export default MyButton
















 //children,...props деструктуризация выцепила от туда пропс чисдрен а все остальные как есть 
{/*{children} сразу на кнопке появилась запись создать кнопку */}

 //<button{...props} className={classes.myBtn}> весь объект разворачиваем в button так образом все пропсы которые будем передавать mybutton будут улетать в эту кнопку 


//  неуправляемый инпут получит данные
//  const bodyInputRef = useRef(initialValue)
//  const addNewPost=(e)=>{
//    e.preventDefault()// предотвращает дэфолтное поведение браузера страница не обновлчяется
//  console.log(bodyInputRef.current.value) // у этой ссылки есть поле current в нашем случае это дом элемент у которого есть поле value
   


//<MyInput 
//ref = {bodyInputRef}
//type = 'text'
//placeholder='Описание'
///>


//<MyButton onClick={addNewPost}>Создать пост </MyButton> //новые посты в массив добавлять

/*const [posts2, setPosts2]= useState([
  {id: 1, title: 'Phyton', body: 'Descreption'},
  {id: 2, title: 'Python 2', body: 'Description'},
  {id:3, title: 'Python 3', body: 'Description'},
])
/*<PostList posts={posts2} title= 'Посты про Python'/>*/


//<PostList posts={posts} title='Список постов 1'/>  передала данные для пропс

// {posts.map(post=>
//   <PostItem post = {post} key={post.id}/> для каждого поста в массиве отрисовываю пост айтем и как пропс передаю туда объект теперь у каждого своё название свой айдишник.всегда ключ указывать должен быть уникальным позволяет эффективно делать рендеринг там где произошло изменение
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


{/*добавляю ещё одно состояние
const [value, setValue] = useState("текст в инпуте");  будем его менять в инпуте
return (
  <div className="App">
    <h1>{likes}</h1>
    <h1>{value}</h1>
    <input type="text" value={value}
    onChange={event=> setValue(event.target.value)}//onChange первым параметром принимют эвент  у которого есть поле таргет  сам домэлемент вэлью значение которое в нём находится теперь что пишу в инпут отображается
/> */}
