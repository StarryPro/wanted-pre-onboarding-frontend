import React from 'react';
import { deleteTodoApi, updateTodoApi } from '../../../utils/todo';
import Todo from '../todo';
import { TodoListWrapper } from './styled';

const TodoList = ({ todoList, getTodo }) => {
  const handleUpdate = async (id, isCompleted, todo) => {
    try {
      const res = await updateTodoApi(id, isCompleted, todo);
      console.log(res);
      getTodo();
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const res = await deleteTodoApi(id);
      console.log(res);
      getTodo();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TodoListWrapper>
        <ul>
          {todoList.map((item) => (
            <Todo
              key={item.id}
              todos={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      </TodoListWrapper>
    </>
  );
};

export default TodoList;
