import React, { useEffect, useState } from 'react';
import TodoList from '../../components/Todo/TodoList/TodoList';
import TodoPost from '../../components/Todo/TodoPost/TodoPost';
import { createTodoApi, getTodoApi } from '../../utils/todo';

const TodoPage = () => {
  const [todoList, setTodoList] = useState([]);
  const handleSubmit = async (newTodoText) => {
    const body = {
      todo: newTodoText,
    };
    try {
      const res = await createTodoApi(body);
      console.log(res);
      getTodo();
    } catch (error) {
      console.log(error);
    }
  };

  const getTodo = async () => {
    try {
      const res = await getTodoApi();
      const data = res.data;
      setTodoList(data);
      console.log('todoList:', todoList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <>
      <TodoPost onAdd={handleSubmit} getTodo={getTodo} />
      <TodoList todoList={todoList} getTodo={getTodo} />
    </>
  );
};

export default TodoPage;
