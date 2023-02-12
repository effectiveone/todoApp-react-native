import { FlatList } from "react-native";
import React from "react";
import RenderItem from "./renderItem";

const STORAGE_KEY = "@todos";

const TodoList = ({ todos, toggleComplete, setSelectedTodoId, deleteTodo }) => {
  return (
    <>
      <FlatList
        data={todos}
        renderItem={({ item }) =>
          RenderItem({
            item,
            toggleComplete,
            setSelectedTodoId,
            deleteTodo,
          })
        }
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </>
  );
};

export default TodoList;
