import React from "react"
import { CSSTransition } from "react-transition-group"
import { TransitionGroup } from "react-transition-group"
import PostItem from "./PostItem"

const PostList = ({posts, title, remove})=> {

  if (!posts.length) {
  return(
    <h1 style={{textAlign: 'centr'}}>
    Посты не найдены !
    </h1>
  )
}

    return(
        <div>
        <h1 style={{textAlign: 'center'}}>
        {title}
        </h1>
        <TransitionGroup>
        {posts.map((post, index)=>
          <CSSTransition
          key = {post.id}
          timeout={500}
          classNames='post'>
          <PostItem remove={remove} number={index +1} post = {post} />
          </CSSTransition>
          )}
        
        </TransitionGroup>
        
        </div>
    )
}


export default PostList






/*<h1 style={{textAlign: 'center'}}>
{title}  чтобы менять название заголовка в верху добавила после постс тайтал
</h1>*/  

//PostItem number={index +1} передаю номер элемента в массиве его будем получать из индекса и к нему +1 чтобы отчёт начинался с 1 