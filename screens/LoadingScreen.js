import { View, Text, Image } from "react-native";
import React from "react";
import activity from "../assets/activity.gif";
const LoadingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,.9)",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: "50",
        left: "50",
        zIndex: 100,
      }}
    >
      <Image source={activity} style={{ width: 50, height: 50 }} />
    </View>
  );
};

export default LoadingScreen;
