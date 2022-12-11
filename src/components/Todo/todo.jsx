import React, { useState } from 'react';
import {
  AddPostButton,
  TodoCheckbox,
  TodoContent,
  TodoPostInput,
  TodoWrapper,
} from './styled';

const Todo = ({ todos, onUpdate, onDelete }) => {
  const [edited, setEdited] = useState(false);
  const editButton = () => {
    setEdited(!edited);
  };
  console.log('todos:', todos);
  const { id, todo } = todos;
  console.log('todo:', todo);
  console.log('id:', id);
  const [editTodo, setEditTodo] = useState(todo);
  const [isCompleted, setIsCompleted] = useState(false);
  const handleChange = () => {
    setIsCompleted(!isCompleted);
    console.log(isCompleted);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
    onDelete(id);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const body = {
      todo: editTodo,
      isCompleted: isCompleted,
    };
    onUpdate(id, body);
    editButton();
  };
  const onChange = (e) => {
    setEditTodo(e.target.value);
  };
  return (
    <>
      <TodoWrapper>
        <TodoCheckbox
          type="checkbox"
          id={id}
          onChange={handleChange}
          checked={isCompleted}
        />
        {edited ? (
          <>
            <TodoPostInput type="text" value={editTodo} onChange={onChange} />
            <AddPostButton onClick={handleUpdate}>저장하기</AddPostButton>
            <AddPostButton onClick={editButton}>취소하기</AddPostButton>
          </>
        ) : (
          <>
            <TodoPostInput type="text" value={todo} disabled />
            <AddPostButton onClick={editButton}>수정하기</AddPostButton>
          </>
        )}

        <AddPostButton onClick={handleDelete}>삭제하기</AddPostButton>
      </TodoWrapper>
    </>
  );
};

export default Todo;
