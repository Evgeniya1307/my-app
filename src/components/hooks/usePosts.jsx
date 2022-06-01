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

//второй хук вернёт офильтрован и отсортирован массив
export const usePosts= (posts, sort)=>{
    
}



// кастомные пользовательские хуки-это хуки  которые внутри себя используют стандартные реакт хуки такие как useMemo useState и т,д