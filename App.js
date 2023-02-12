import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  AsyncStorage,
} from "react-native";
import { Icon, ListItem } from "react-native-elements";

const STORAGE_KEY = "@todos";

export default function App() {
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

  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <Icon
        name={item.completed ? "check-box" : "check-box-outline-blank"}
        type="material"
        color={item.completed ? "#4CAF50" : "#757575"}
        onPress={() => toggleComplete(item.id)}
      />
      <ListItem.Content>
        <ListItem.Title
          style={{
            textDecorationLine: item.completed ? "line-through" : "none",
          }}
        >
          {item.text}
        </ListItem.Title>
      </ListItem.Content>
      <Icon
        name="edit"
        color="#2196F3"
        onPress={() => setSelectedTodoId(item.id)}
      />
      <Icon name="delete" color="#F44336" onPress={() => deleteTodo(item.id)} />
    </ListItem>
  );

  return (
    <View style={styles.container}>
      {selectedTodoId ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Edit task"
            onChangeText={setText}
            value={text}
          />
          <Button title="Save" onPress={saveTodo} />
          <Button title="Cancel" onPress={cancelEdit} />
        </View>
      ) : (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Add a task"
              onChangeText={setText}
              value={text}
            />
            <Button title="Add" onPress={addTodo} />
          </View>
          <FlatList
            data={todos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ flexGrow: 1 }}
          />
        </>
      )}
    </View>
  );
}

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
