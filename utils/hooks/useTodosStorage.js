import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@todos";

const useTodosStorage = () => {
  const retrieveTodos = async () => {
    try {
      const savedTodos = await AsyncStorage.getItem(STORAGE_KEY);
      if (savedTodos !== null) {
        return JSON.parse(savedTodos);
      }
    } catch (error) {
      console.log(error);
    }
    return [];
  };

  const saveTodos = async (todos) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    retrieveTodos,
    saveTodos,
  };
};

export default useTodosStorage;
