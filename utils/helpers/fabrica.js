import { Input, TodoList, EditTodo } from "../../components";
import { useTodoProps } from "../context/TodosContext";

const ComponentFactory = () => {
  const { selectedTodoId, editProps, inputProps, listProps } = useTodoProps();
  if (!!selectedTodoId) {
    return <EditTodo editProps={editProps} />;
  } else {
    return (
      <>
        <Input {...inputProps} />
        <TodoList {...listProps} />
      </>
    );
  }
};

export default ComponentFactory;
