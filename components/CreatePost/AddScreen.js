import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

const AddScreen = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textArea}
        multiline
        numberOfLines={4}
        // value={text}
        onChangeText={setText}
        placeholder="Enter your text here..."
      >
        AddScreen
      </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.9)",
  },
  textArea: {
    borderColor: "grey",
    borderWidth: 1,
    fontSize: 16,
    color: "white",
  },
});
export default AddScreen;
