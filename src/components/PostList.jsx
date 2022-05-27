import PostItem from "./PostItem"

const PostList = ({posts, title})=> {

    return(
        <div>
        <h1 style={{textAlign: 'center'}}>
        {title}
        </h1>
        {posts.map(post=>
          <PostItem post = {post} key = {post.id}/>
          )}
        
        </div>
    )
}


export default PostList






/*<h1 style={{textAlign: 'center'}}>
{title}  чтобы менять название заголовка в верху добавила после постс тайтал
</h1>*/  