import { useTodosContext } from "../context/TodosContext";

const useTodoProps = () => {
  const {
    text,
    setText,
    todos,
    selectedTodoId,
    setSelectedTodoId,
    toggleComplete,
    saveTodo,
    cancelEdit,
    addTodo,
    deleteTodo,
  } = useTodosContext();

  const inputProps = { text, onChangeText: setText, onPress: addTodo };
  const listProps = {
    todos,
    toggleComplete,
    setSelectedTodoId,
    deleteTodo,
  };
  const editProps = {
    text,
    onChangeText: setText,
    onSave: saveTodo,
    onCancel: cancelEdit,
  };

  return { inputProps, listProps, editProps, selectedTodoId };
};

export default useTodoProps;
