import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TodoPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <div>todo 페이지 입니다.</div>
      <button onClick={() => localStorage.clear()}>토큰 삭제</button>
    </>
  );
};

export default TodoPage;
