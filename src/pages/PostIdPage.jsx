import React from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import  useFetching  from '../hooks/useFetching'
import { useState, useEffect } from 'react'
 import Loader from '../components/UI/Loader/Loader'


const PostIdPage = () => {
    const params = useParams()
  const [post, setPost]= useState({})// вернёт пост по id
  const [comments, setComments] = useState([]); 
  
  
  
  //для получения постов
  const [fethPostById, isLoading, error]=useFetching(async(id)=> {
    const response = await PostService.getCommentsByPostId(id)
  setComments(response.data);//поместила состояние в поле data
  })
  
  //функция для получения комментариев 
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });

  useEffect(() => {
    fethPostById(params.id);
    fetchComments(params.id);
  }, []);
  
  
  return (
    <div>
      <h1>Вы открыли страницу поста с ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h1>Комментарии</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => (
            <div key={comm.id} style={{ marginTop: 15 }}>
              <h5>
                {comm.email}
                <div>{comm.body}</div>
              </h5>
            </div>
          ))}
        </div>
      )}
     
      </div>
  )
}

export default PostIdPage
