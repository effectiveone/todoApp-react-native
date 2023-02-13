import { Input, TodoList, EditTodo } from "../../components";

const ComponentFactory = ({ isEditing, inputProps, listProps, editProps }) => {
  if (isEditing) {
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
