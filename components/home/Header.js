import { View, Text, Image, StyleSheet, SafeAreaViewBase } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <View>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={require("../../assets/CKDlogo.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
        <AntDesign name="wechat" size={24} color="white" style={styles.icon} />
          
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="hearto" style={styles.icon}
            size={24} color="white" />
          
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop:10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    elevation:1,
    backgroundColor:"rgba(0,0,0,1)"
  },
  logo: {
    width: 180,
    height:65,
    resizeMode: "contain",
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icon: {
    marginHorizontal: 10,
  },
});
export default Header;
