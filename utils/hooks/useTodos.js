import { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
const STORAGE_KEY = "@todos";

const useTodos = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  useEffect(() => {
    retrieveTodos();
  }, []);

  const retrieveTodos = async () => {
    try {
      const savedTodos = await AsyncStorage.getItem(STORAGE_KEY);
      if (savedTodos !== null) {
        setTodos(JSON.parse(savedTodos));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveTodos = async (todos) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.log(error);
    }
  };

  const saveTodo = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === selectedTodoId) {
        return { ...todo, text };
      }
      return todo;
    });
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
    setSelectedTodoId(null);
    setText("");
  };

  const cancelEdit = () => {
    setSelectedTodoId(null);
    setText("");
  };

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
