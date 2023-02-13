import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { TodosProvider, useTodoProps } from "./utils/context/TodosContext";
import ComponentFactory from "./utils/helpers/fabrica";

const App = () => {
  const { selectedTodoId, ...todoProps } = useTodoProps();
  const isEditing = !!selectedTodoId;

  return (
    <View style={styles.container}>
      <ComponentFactory isEditing={isEditing} {...todoProps} />
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
