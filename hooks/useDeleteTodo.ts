import axios from 'axios';
import { useMutation } from 'react-query';

const useDeleteTodo = (url) => (
  useMutation(( id: { id: string}) => axios.delete(
    `${url}/${id}`
  ).then(({ data }) => data)));

export default useDeleteTodo;
