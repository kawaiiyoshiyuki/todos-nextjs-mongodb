import axios from 'axios';
import { useQuery } from 'react-query';

const useGetTodos = (url) => {
  return useQuery('todos', () => axios.get(
    `${url}`,
  ).then(({ data }) => data));
}

export default useGetTodos;
