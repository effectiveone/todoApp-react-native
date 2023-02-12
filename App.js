import EditTodo from "./components/editList";
import Input from "./components/input";
import TodoList from "./components/todoList";

import React from "react";
import useTodos from "./utils/hooks/useTodos";
import { StyleSheet, View } from "react-native";

const App = () => {
  const {
    text,
    setText,
    todos,
    setTodos,
    selectedTodoId,
    setSelectedTodoId,
    saveTodo,
    cancelEdit,
    addTodo,
    deleteTodo,
    toggleComplete,
  } = useTodos();

  const isEditing = !!selectedTodoId;

  return (
    <View style={styles.container}>
      {isEditing ? (
        <EditTodo
          text={text}
          onChangeText={setText}
          onSave={saveTodo}
          onCancel={cancelEdit}
        />
      ) : (
        <>
          <Input text={text} onChangeText={setText} onPress={addTodo} />
          <TodoList
            todos={todos}
            toggleComplete={toggleComplete}
            setSelectedTodoId={setSelectedTodoId}
            deleteTodo={deleteTodo}
          />
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
  inputContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    marginRight: 10,
  },
});

export default App;
