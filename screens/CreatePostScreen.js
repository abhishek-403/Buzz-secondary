import { View, Text, StyleSheet, SafeAreaViewBase } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "react-native-elements";
import AddScreen from "../components/CreatePost/AddScreen";

const CreatePostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Head />

      <AddScreen />
    </SafeAreaView>
  );
};
const Head = () => (
  <View style={styles.head}>
    <View>
      <Ionicons name="caret-back" size={30} color="white" />
    </View>
    <View>
      <Text style={{ color: "white", fontSize: 20, fontWeight: 700 }}>
        New Post
      </Text>
    </View>
    <View></View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "rgba(0,0,0,.9)",
  },
  head: {
    backgroundColor: "rgba(0,0,0,1)",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    height: 50,
  },
});

export default CreatePostScreen;
