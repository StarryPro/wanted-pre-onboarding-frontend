import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JoinPage from './pages/auth/JoinPage';
import LoginPage from './pages/auth/LoginPage';
import TodoPage from './pages/todo/TodoPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
