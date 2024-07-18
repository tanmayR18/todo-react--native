import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  View,
} from "react-native";
import InputContainer from "./components/inputContainer";
import TaskContainer from "./components/taskContainer";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [ modal, setModal ] = useState(false)

  return (
    <>
        <StatusBar />
        <View style={styles.mainContainer}>
            <Button onPress={() => setModal(true)} title="Add Task" />
            <InputContainer setModal={setModal} modal={modal} setTodoList={setTodoList}/>
            <TaskContainer todoList={todoList} setTodoList={setTodoList}/>
        </View>
    </>
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
