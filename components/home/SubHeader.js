import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { Divider } from "react-native-elements";

const SubHeader = () => {
  return (
    <View>
      <View style={styles.container}>
        <Pressable>
          <Text style={styles.head}>Home</Text>
        </Pressable>
        <Divider
          width={1}
          orientation="vertical"
          color="rgba(255,255,255,.2)"
        />
        <Pressable>
          <Text style={styles.head}>Trending</Text>
        </Pressable>
      </View>
      <Divider
        width={.33}
        orientation="horizontal"
        color="rgba(250,250,250,1)"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "rgba(0,0,0,.88)",
    paddingVertical: 8,
  },
  head: {
    paddingHorizontal: 66,
    paddingVertical: 4,
    color: "white",
    fontSize: 21,
  },
});
export default SubHeader;
