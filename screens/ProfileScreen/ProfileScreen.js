import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { container, head1, head2 } from "./profilecss";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={container}>
      <Head />
      <Text>ProfileScreen</Text>
    </SafeAreaView>
  );
};

const Head = () => {
  return (
    <View style={head}>
      <View>
        <Ionicons name="caret-back" size={30} color="white" />
      </View>
      <Text style={head1}>Abhishek Sharma</Text>
      <Text style={head2}>2 posts</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
