import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";

const CreatePostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Head />
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
    backgroundColor: "rgba(0,0,0,.9)",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 5,
    alignItems: "center",
    height: 65,
  },
});

export default CreatePostScreen;
