import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import img from "../../assets/profilepic.png";
import { Divider } from "react-native-elements";

const EachProfileCard = ({user}) => {
  return (
    <>
      <View style={style.container}>
        <Image
          source={img}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            borderWidth: 1.6,
            marginHorizontal: 3,
            borderColor: "rgba(255,255,255,.1)",
          }}
        />
        <View>
          <Text style={{ color: "white", fontSize: 16 }}>{user?.name}</Text>
          <Text style={{ color: "#a3a3a3", fontSize: 12 }}>{user?.username}</Text>
        </View>

      </View>
      <Divider width={1} color="rgba(255,255,255,0.1)" style={{paddingTop:5}}/>
    </>
  );
};

export default EachProfileCard;

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingVertical:5,
  },
});
