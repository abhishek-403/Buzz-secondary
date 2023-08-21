import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import { Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import img from "../../assets/favicon.png";

const EachPost = () => {
  const item = {
    owner: "Abhishek Sharma",
    pics: [],
  };
  return (
    <SafeAreaView style={[styles.container, { padding: 8 }]}>
      <View style={styles.left}>
        <Image
          source={img}
          style={{ height: 40, width: 40, borderRadius: 50 }}
        />
      </View>
      <View style={styles.right}>
        <View style={styles.right.name}>
          <Text style={{ lineHeight: 20, fontSize: 18 }}>{item.owner}</Text>
          <Text style={{ lineHeight: 18, fontSize: 16, paddingHorizontal: 4 }}>
            username
          </Text>
        </View>
        <View style={styles.right.mid}>
          <Text style={styles.right.mid.text}>{item.message}</Text>
          <View style={styles.right.mid.img}>
            {item.pics.map((item) => {
              return (
                <Image
                  source={item.uri}
                  style={[{ aspectRatio: 1, resizeMode: "contain" }]}
                />
              );
            })}
          </View>
        </View>

        <View style={styles.right.bot}>
          <View style={styles.right.bot.btns}>
            <AntDesign name="hearto" size={24} color="black" />
            <AntDesign name="heart" size={24} color="red" />
            <AntDesign name="sharealt" size={24} color="black" />
            <AntDesign name="message1" size={24} color="black" />
          </View>
          <View></View>
          <View></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    // borderBottomWidth: 1,
    // borderBottomColor: "rgba(0,0,0,.4)",
  },
  left: {},
  right: {
    flex: 1,
    paddingHorizontal: 10,

    name: {
      paddingBottom: 5,
    },

    mid: {
      flex: 1,
      img: {},

      text: {
        fontSize: 18,
        marginVertical: 5,
        lineHeight: 22,
      },
    },
    bot: {
      padding: 10,
      paddingBottom: 5,

      btns: {
        flexDirection: "row",
        gap: 20,
        flex: 1,
      },
    },
  },
});

export default EachPost;
