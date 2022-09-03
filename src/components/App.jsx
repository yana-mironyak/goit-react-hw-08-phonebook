import css from './App.module.css';
import RegisterView from '../views/RegisterView';
import LoginView from 'views/LoginView';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/authOperations'; 
import ContactsView from 'views/ContactsView';
import PrivateRoute from './UserMenu/PrivateRoute';
import PublicRoute from './UserMenu/PublicRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch]);

  return (
    <Routes>
      <Route className={css.container} path='/' element={<SharedLayout />}>
        <Route index element={
          <PrivateRoute path='login' >
            <ContactsView />
          </PrivateRoute>
         } />
        <Route path='login' element={
          <PublicRoute path='/' >
            <LoginView />
          </PublicRoute>
         } />
        <Route path='register' element={
          <PublicRoute path='/' >
            <RegisterView />
          </PublicRoute>
         } />
      </Route>
    </Routes>
  )
}

export default App;