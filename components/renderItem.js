import { Icon, ListItem } from "react-native-elements";

const RenderItem = ({
  item,
  toggleComplete,
  setSelectedTodoId,
  deleteTodo,
}) => {
  return (
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
};

export default RenderItem;
