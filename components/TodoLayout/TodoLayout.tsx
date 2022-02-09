import React, { useEffect, useState } from 'react';
import Instructions from './Instructions/Instructions';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';
import useGetTodos from '../../hooks/useGetTodos';
import useDeleteTodo from '../../hooks/useDeleteTodo';
import useAddTodo from '../../hooks/useAddTodo';
import useUpdateTodo from '../../hooks/useUpdateTodo';
import { ITodo } from './types';

type FormElem = React.FormEvent<HTMLFormElement>

const url = process.env.NEXT_PUBLIC_API_URL;

const TodoLayout = ({ initTodos }: { initTodos: ITodo[] }) => {
  const { data, refetch: getTodos } = useGetTodos(url);
  const todos = data?.data;

  const addTodo = useAddTodo(url);
  const updateTodo = useUpdateTodo(url);
  const deleteTodo  = useDeleteTodo(url);

  const [value, setValue] = useState<string>('');
  const [userActions, setUserActions] = useState(false);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo.mutate({ index: todos.length, text: value, completed: false }, {
      onSuccess: () => getTodos()
    });
    setValue('');
    if (!userActions) {
      setUserActions(true);
    }
  };

  const handleCompleteTodo = (index: number): void => {
    const todo = todos[index];
    updateTodo.mutate(
      { ...todo, completed: !todo.completed },
      { onSuccess: () => getTodos()},
    );
  };

  const handleDeleteTodo = (index: number) => {
    deleteTodo.mutate(todos[index]._id, { onSuccess: () => getTodos()});
  };

  // todo this is a temp solution in case the db is empty
  useEffect(() => {}, [addTodo, todos, userActions]);

  return (
    <section>
      <TodoInput handleSubmit={handleSubmit} value={value} setValue={setValue} />
      <Instructions />
      <TodoList todos={todos || initTodos} handleComplete={handleCompleteTodo} handleDelete={handleDeleteTodo} />
    </section>
  );
}

export default TodoLayout;
