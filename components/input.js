import { View, TextInput, Button, StyleSheet } from "react-native";

const Input = ({ text, onChangeText, onPress }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a task"
        onChangeText={onChangeText}
        value={text}
      />
      <Button title="Add" onPress={onPress} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
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
