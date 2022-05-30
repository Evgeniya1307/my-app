import React from "react";

const PostForm = () => {
  const [post, setPost] = useState({ title: "", body: "" }); // когда много постов объектов

  const addNewPost = (e) => {
    e.preventDefault();
    //setPosts([...posts, { ...post, id: Date.now() }]); // добавить созданный объект в массив постов [...posts,newPost] добавляем старый массив и в конец новый
    const newPost = {
        ...post, id:Date.now()// создала новый объект в него развернула состояние с формы...post добавила id 
    }
    setPost({ title: "", body: "" }); // обнуляем состояние всеё формы
  };

  return (
    <form>
      {/*управляемый компонент */}
      <MyInput
        value={post.title} //двухсторонее связывание value input с состоянием body
        onChange={(e) => setPost({ ...post, title: e.target.value })} //вызвала функцию SetPost передала объект в нём старый пост ...post и перезатираю нужное поле конкретное в этом инпуте
        type="text"
        placeholder="Название поста"
      />

      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание поста"
      />
      <MyButton onClick={addNewPost}>Создать пост </MyButton>
    </form>
  );
};

export default PostForm;

//неуправляемый
// <MyInput
// ref={bodyInputRef}
// type = 'text' placeholder = 'Описание поста'/>
// <MyButton onClick={addNewPost}>Создать пост </MyButton>
// </form>
// <PostList posts={posts} title='Посты про JS'/>
// </div>
// );
// }

//const [title, setTitle] = useState('')
//const [body, setBody]= useState('') // для очищения инпута после создания поста

// <MyInput
// type = 'text' placeholder = 'Описание поста'/>
// <MyButton onClick={addNewPost}>Создать пост </MyButton>
// </form>
// <PostList posts={posts} title='Посты про JS'/>
// </div>
// );
// }

//e.preventDefault()// предотвращает дэфолтное поведение браузера страница не обновлчяется

//onChange = {e=>setTitle(e.target.value)}//отлеживать когда пользователь что то вводит
