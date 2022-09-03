import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
import authOperations from '../redux/auth/authOperations'; 
import PrivateRoute from './UserMenu/PrivateRoute';
import PublicRoute from './UserMenu/PublicRoute';
import NotFound from './NotFound/NotFound';
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));
// const NotFound = lazy(() => import('./NotFound/NotFound'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
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
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App;