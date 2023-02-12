import { useState } from "react";

const useTodosState = (saveTodos) => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  const addTodo = () => {
    if (text.trim() === "") return;
    const newTodo = { id: Date.now().toString(), text, completed: false };
    setTodos([...todos, newTodo]);
    setText("");
    saveTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    saveTodos(filteredTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const reset = () => {
    setSelectedTodoId(null);
    setText("");
  };

  return {
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
  };
};

export default useTodosState;
