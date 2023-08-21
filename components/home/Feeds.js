import { View, Text, ScrollView } from "react-native";
import React from "react";
import Posts from "./Posts";

const Feeds = () => {
  return (
      <ScrollView>
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </ScrollView>
  );
};

export default Feeds;
