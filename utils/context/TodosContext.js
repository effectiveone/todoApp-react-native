import React, { useContext } from "react";
import useTodos from "../hooks/useTodos";
import useTodoProps from "../hooks/useTodoProps";

const TodosContext = React.createContext();

const TodosProvider = ({ children }) => {
  const value = useTodos();

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

const useTodosContext = () => useContext(TodosContext);

export { TodosProvider, useTodosContext, useTodoProps };
