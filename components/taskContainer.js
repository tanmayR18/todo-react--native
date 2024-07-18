import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";

const TaskContainer = ({ todoList, setTodoList }) => {
  const deleteTask = (index) => {
    setTodoList((prevState) => prevState.filter((task, i) => i !== index));
  };

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={todoList}
        renderItem={(itemData) => {
            return (
                <Pressable
            style={styles.taskView}
            key={itemData.index}
            onPress={() => deleteTask(itemData.index)}
          >
            <Text>{itemData.item.text}</Text>
          </Pressable>
            )
        }}
        keyExtractor={ (item, index) => index}
        alwaysBounceVertical={false}
      >
      </FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 40,
    flex: 1,
  },

  taskView: {
    backgroundColor: "#FFC000",
    marginBottom: 10,
    padding: 8,
    borderRadius: 6,
  },
});

export default TaskContainer;
