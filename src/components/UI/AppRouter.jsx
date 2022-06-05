import React, {useContext} from 'react'
import { Route, Routes,  Navigate,  } from 'react-router-dom'
import Loader from './Loader/Loader';
import { AuthContext } from '../../context';
import { privateRoutes, publicRoutes } from '../../router/router';

const AppRouter = () => {
  const { isAuth , isLoading} = useContext(AuthContext);// хранить инфу авторизован или нет
  if(isLoading) {
    return <Loader/>
  }
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route element={route.element} path={route.path} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to="/posts" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route element={route.element} path={route.path} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter
