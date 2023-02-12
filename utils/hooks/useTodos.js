import { useEffect } from "react";
import useTodosState from "./useTodosState";
import useTodosStorage from "./useTodosStorage";

const useTodos = () => {
  const { retrieveTodos, saveTodos } = useTodosStorage();
  const {
    text,
    setText,
    todos,
    selectedTodoId,
    setSelectedTodoId,
    addTodo,
    deleteTodo,
    toggleComplete,
    reset,
    setTodos,
  } = useTodosState(saveTodos);

  useEffect(() => {
    const getTodos = async () => {
      const savedTodos = await retrieveTodos();
      setTodos(savedTodos);
    };
    getTodos();
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const saveTodo = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === selectedTodoId) {
        return { ...todo, text };
      }
      return todo;
    });
    setTodos(updatedTodos);
    reset();
  };

  const cancelEdit = () => {
    reset();
  };

  return {
    text,
    setText,
    todos,
    selectedTodoId,
    setSelectedTodoId,
    saveTodo,
    cancelEdit,
    addTodo,
    deleteTodo,
    toggleComplete,
  };
};

export default useTodos;
