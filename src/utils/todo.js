import { AxiosInstance } from './AxiosInstance';

export const getTodoApi = async () => {
  return AxiosInstance.get('/todos');
};

export const createTodoApi = async (todo) => {
  return AxiosInstance.post('/todos', todo);
};

export const updateTodoApi = async (id, body) => {
  return AxiosInstance.put(`/todos/${id}`, { ...body });
};

export const deleteTodoApi = async (id) => {
  return AxiosInstance.delete(`todos/${id}`);
};
