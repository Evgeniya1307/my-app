import React from "react"
import PostItem from "./PostItem"

const PostList = ({posts, title, remove})=> {

    return(
        <div>
        <h1 style={{textAlign: 'center'}}>
        {title}
        </h1>
        {posts.map((post, index)=>
          <PostItem remove={remove} number={index +1} post = {post} key = {post.id}/>
          )}
        
        </div>
    )
}


export default PostList






/*<h1 style={{textAlign: 'center'}}>
{title}  чтобы менять название заголовка в верху добавила после постс тайтал
</h1>*/  

//PostItem number={index +1} передаю номер элемента в массиве его будем получать из индекса и к нему +1 чтобы отчёт начинался с 1 