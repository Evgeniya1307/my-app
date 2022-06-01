import { useMemo } from "react"

// создаю свой первый хук

export const useSortedPosts = (posts, sort)=> {
 //создаю функцию проверяю если selectedSort если там не пустая строка то вернуть отсортирован,массив ,иначе обычный массив постов 
 //лежит отсортированный массив
 const sortedPosts = useMemo(() => {
    console.log('Отработала эта функция')
    if(filter.sort){
      return[...posts].sort((a, b)=> a [sort].localeCompare(b[sort]))
    }
    return posts;
  }, [filter.sort, posts])
return sortedPosts

}

//второй хук вернёт офильтрован и отсортирован массив принимает пост метод и поисковую
export const usePosts= (posts, sort, query)=>{
   const sortedPosts= useSortedPosts(posts,sort ) // получить массив отсортированных постов
// для поиска нужна фильтрация чтобы удалять некоторые элементы массива но если с массива удалить вернуть их нельзя
const sortedAndSearchedPosts = useMemo(()=>{
    return sortedPosts.filter(post=>post.title.toLowerCase().includes(query.toLowerCase()))// по поисковой строке необходимо отфильтровать этот массив передаю колбэк обращаюсь к названию поста поле title и вызываю у него includes()//toLowerCase() поиск чувствителен к регистру вызвали функцию для названия поста и поисковой строки
    }, [query, sortedPosts])// будет попадать в массив поисковая строка и отсортированный массив
return sortedAndSearchedPosts
}

export default usePosts

// кастомные пользовательские хуки-это хуки  которые внутри себя используют стандартные реакт хуки такие как useMemo useState и т,д