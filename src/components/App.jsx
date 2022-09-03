import React from 'react';
import css from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
import authOperations from '../redux/auth/authOperations'; 
import PrivateRoute from './UserMenu/PrivateRoute';
import PublicRoute from './UserMenu/PublicRoute';
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));

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