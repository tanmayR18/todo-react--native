import { useState } from "react";
import {
    Button,
    TextInput,
    View,
    StyleSheet
  } from "react-native";

const InputContainer = ({setTodoList}) => {

    const [todo, setTodo] = useState("");

    const textChangeHandler = (value) => {
        setTodo(value);
      };

      const addTodo = () => {
        setTodoList((prevState) => [...prevState, {text:todo}]);
        setTodo("");
      };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your tasks"
        onChangeText={textChangeHandler}
        value={todo}
      />
      <Button title={"Add"} onPress={addTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        paddingBottom: 40,
        borderBottomWidth: 2,
      },
    
      textInput: {
        flex: 1,
        borderWidth: 1,
        marginRight: 15,
        padding: 4,
        paddingLeft: 10,
        borderRadius: 6,
      },
})

export default InputContainer;
