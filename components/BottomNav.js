import {
  View,
  Text,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const BottomNav = () => {
  const icons = [
    {
      name: "Home",
      active: "home",
      inactive: "home-outline",
    },
    {
      name: "Search",
      active: "search-sharp",
      inactive: "search-outline",
    },
    {
      name: "Create",
      active: "create",
      inactive: "create-outline",
    },
    {
      name: "Profile",
      active: "person-circle-sharp",
      inactive: "person-circle-outline",
    },
  ];
  const [activeTab, setActiveTab] = useState("Home");

  const Icons = ({ icons }) => (
    <Pressable style={{ padding: 10 }} onPress={() => setActiveTab(icons.name)}>
      <Ionicons
        name={activeTab === icons.name ? icons.active : icons.inactive}
        size={35}
        color="white"
      />
    </Pressable>
  );
  return (
    <View style={styles.container}>
      {icons.map((item, i) => {
        return <Icons key={i} icons={item} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,1)",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 2,
  },
});

export default BottomNav;
