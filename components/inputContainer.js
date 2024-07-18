import { useState } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
} from "react-native";

const InputContainer = ({ setTodoList, modal, setModal }) => {
  const [todo, setTodo] = useState("");

  const textChangeHandler = (value) => {
    setTodo(value);
  };

  const addTodo = () => {
    setTodoList((prevState) => [...prevState, { text: todo }]);
    setModal(false)
    setTodo("");
  };


  return (
    <Modal animationType="slide" visible={modal} style={styles.modal}>
      <View style={styles.outerView}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your tasks"
            onChangeText={textChangeHandler}
            value={todo}
          />
        </View>
        <View style={styles.buttons}>
          <Button onPress={addTodo} title="Add" />
          <Button onPress={() => setModal(false)} title="Cancel" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    paddingBottom: 20,
    alignItems: "center",
    padding: 16,
  },

  textInput: {
    flex: 1,
    borderWidth: 1,
    padding: 4,
    paddingLeft: 10,
    borderRadius: 6,
  },
  modal: {},
  outerView: {
    padding: 16,
    height: "100%",
    justifyContent: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
});

export default InputContainer;
