import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import InputContainer from "./components/inputContainer";
import TaskContainer from "./components/taskContainer";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <View style={styles.mainContainer}>
      
      <InputContainer setTodoList={setTodoList}/>

      <TaskContainer todoList={todoList} setTodoList={setTodoList}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    backgroundColor: "#cccccc",
    paddingTop: 140,
    paddingHorizontal: 30,
  },

});
