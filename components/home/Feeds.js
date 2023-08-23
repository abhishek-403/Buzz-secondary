import { View, Text, ScrollView } from "react-native";
import React from "react";
import Posts from "./Posts";

const Feeds = () => {
  return (
    
      <ScrollView style={{backgroundColor:"rgba(0,0,0,.9)"}}>
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </ScrollView>
  );
};

export default Feeds;
