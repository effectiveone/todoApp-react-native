import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { TodosProvider, useTodoProps } from "./utils/context/TodosContext";
import { Input, TodoList, EditTodo } from "./components";

const App = () => {
  const { inputProps, listProps, editProps, selectedTodoId } = useTodoProps();

  const isEditing = !!selectedTodoId;

  return (
    <View style={styles.container}>
      {isEditing ? (
        <EditTodo editProps={editProps} />
      ) : (
        <>
          <Input {...inputProps} />
          <TodoList {...listProps} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 50,
  },
});

export default () => (
  <TodosProvider>
    <App />
  </TodosProvider>
);
