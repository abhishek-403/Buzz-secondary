import { View, Image, StyleSheet} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={require("../../assets/finallogo.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
        <AntDesign name="wechat" size={22} color="white" style={styles.icon} />
          
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="hearto" style={styles.icon}
            size={22} color="white" />
          
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor:"rgba(0,0,0,1)"
  },
  logo: {
    width: 50,
    height:50,
    borderRadius:50,
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
