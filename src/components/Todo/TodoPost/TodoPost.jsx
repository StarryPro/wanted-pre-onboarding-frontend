import React, { useState } from 'react';
import { AddPostButton, TodoPostForm, TodoPostInput } from './styled';

const TodoPost = ({ onAdd }) => {
  const [newTodoText, setNewTodoText] = useState('');
  const handleChange = (e) => {
    setNewTodoText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newTodoText);
  };

  return (
    <TodoPostForm onSubmit={handleSubmit}>
      <TodoPostInput type="text" value={newTodoText} onChange={handleChange} />
      <AddPostButton>추가하기</AddPostButton>
    </TodoPostForm>
  );
};

export default TodoPost;
