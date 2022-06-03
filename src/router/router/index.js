import Posts from '../../pages/Posts'
import About from '../../pages/About'
import PostIdPage from '../../pages/PostIdPage'
import Login from '../../pages/Login'



export const privateRoutes = [ // может попасть авторизованный пользователь
    { path: "/about", element: <About /> },
    { path: "/posts", element: <Posts /> },
    { path: "/posts/:id", element: <PostIdPage /> },
  ];
  export const publicRoutes = [{ path: "/login", element: <Login /> }];// кто в первые попал в наше приложение