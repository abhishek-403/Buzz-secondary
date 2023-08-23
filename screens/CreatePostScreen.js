import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import AddScreen from "../components/CreatePost/AddScreen";
import { Divider } from "react-native-elements";

const CreatePostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Head />
      <Divider
        width={0.33}
        orientation="horizontal"
        color="rgba(250,250,250,1)"
      />
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
      <Text style={{ color: "white", fontSize: 24, fontWeight: 700 }}>
        New Post
      </Text>
    </View>
    <View></View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    backgroundColor: "rgba(0,0,0,1)",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 5,
    alignItems: "center",
    height: 65,
  },
});

export default CreatePostScreen;