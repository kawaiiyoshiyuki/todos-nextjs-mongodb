import axios from 'axios';
import { useMutation } from 'react-query';
import { ITodo } from '../components/TodoLayout/types';

const useAddTodo = (url) => {
  return useMutation(({ text, index, completed }: ITodo) => axios.post(
    `${url}`,
    { text, index, completed },
  ).then(({ data }) => data));
}

export default useAddTodo;
