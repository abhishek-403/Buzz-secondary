import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";

const SubHeader = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.head}>Home</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.head}>Trending</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: "#212121",
    borderBottomWidth: 1,
  },
  head: {
    paddingHorizontal: 66,
    paddingVertical: 4,
    backgroundColor: "#212121",
    color: "white",
    fontSize: 21,
  },
});
export default SubHeader;
