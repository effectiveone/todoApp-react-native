import { View, TextInput, Button, StyleSheet } from "react-native";

const EditTodo = ({ editProps }) => {
  const { text, onChangeText, onSave, onCancel } = editProps;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Edit task"
        onChangeText={onChangeText}
        value={text}
      />
      <Button title="Save" onPress={onSave} />
      <Button title="Cancel" onPress={onCancel} />
    </View>
  );
};

export default EditTodo;

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
