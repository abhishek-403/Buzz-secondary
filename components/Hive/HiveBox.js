import { View, Text, Pressable } from "react-native";
import React from "react";
import { boxCont, boxDesc, boxTitle } from "./hivecss";
import { useNavigation } from "@react-navigation/native";
const HiveBox = ({ hive }) => {
  const navigation = useNavigation()
  return (
    <Pressable
      onPress={() => navigation.navigate("Profile",{screen:"HiveInfo",params:{hive}})}
      style={boxCont}
    >
      <Text style={boxTitle}>{hive.name}</Text>
      <Text style={boxDesc}>{hive.description}</Text>
    </Pressable>
  );
};

export default HiveBox;
