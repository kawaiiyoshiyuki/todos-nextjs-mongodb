import axios from 'axios';
import { useMutation } from 'react-query';
import { ITodo } from '../components/TodoLayout/types';

const useUpdateTodo = (url) => {
  return useMutation(({ _id, completed }: ITodo) => axios.patch(
    `${url}/${_id}`,
    { completed },
  ).then(({ data }) => data));
}

export default useUpdateTodo;
