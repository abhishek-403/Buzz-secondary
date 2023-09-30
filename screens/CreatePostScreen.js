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
    <View></View>
    <View>
      <Text style={{ color: "white", fontSize: 20, fontWeight: 700 }}>
        Create Post
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
    alignItems: "center",
    height: 70,
  },
});

export default CreatePostScreen;
