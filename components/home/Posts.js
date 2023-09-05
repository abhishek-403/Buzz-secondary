import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import profileicondef from "../../assets/profileicondefault.png";
import { Entypo, AntDesign } from "@expo/vector-icons";

const Posts = ({ post }) => {
  return (
    <View
      style={{
        backgroundColor: "rgba(0,0,0,.95)",
        flex: 1,
      }}
    >
      <Divider width={1} color="rgba(255,255,255,.08)"/>
      <PostHeader post={post} />
      <View
        style={{
          marginHorizontal: 5,
        }}
      >
        <PostMessage post={post} />
        <PostImage post={post} />
      </View>
      <PostFooter post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal: 5,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={profileicondef} style={styles.story} />
        <View style={{ marginHorizontal: 5 }}>
          <Text style={styles.name}>{post?.owner?.name}</Text>
          <Text style={styles.username}>{post?.owner?.username}</Text>
        </View>
      </View>
      <Entypo name="dots-three-horizontal" size={24} color="white" />
    </View>
  );
};

const PostMessage = ({ post }) => (
  <View
    style={{
      paddingHorizontal: 15,
      paddingBottom: 10,
      display: `${post?.message === "" ? "none" : "flex"}`,
    }}
  >
    <Text style={styles.message}>{post?.message}</Text>
  </View>
);

const PostImage = ({ post }) => (
  <View
    style={{
     
      flex: 1,
    }}
  >
    {post?.images?.map((item, i) => {
      return (
        <Image
          source={{ uri: item.url }}
          style={{
            resizeMode: "contain",
            aspectRatio: 4 / 3,
            borderRadius: 30,
            width: "auto",
            height: "auto",
          }}
          key={i}
        />
      );
    })}
  </View>
);

const PostFooter = ({ post }) => {
  return (
    <View style={styles.footer}>
      <Icons iconname="eyeo" />
      <Icons iconname="retweet" />
      <Icons iconname="hearto" />
      <Icons iconname="sharealt" />
    </View>
  );
};

const Icons = ({ iconname }) => (
  <View
    style={{
      paddingHorizontal: 8,
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    }}
  >
    <AntDesign name={iconname} size={22} color="rgba(255,255,255,0.6)" />
    <Text style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>12</Text>
  </View>
);

const styles = StyleSheet.create({
  story: {
    width: 55,
    height: 55,
    borderRadius: 50,
    borderWidth: 1.6,
    marginLeft: 6,
    borderColor: "rgba(255,255,255,.1)",
  },
  name: {
    color: "white",
    fontWeight: "700",
    marginLeft: 5,
    fontSize: 19,
    lineHeight: 20,
  },
  username: {
    color: "#a3a3a3",
    fontSize: 16,
    marginLeft: 5,
    lineHeight: 18,
  },
  message: {
    color: "white",
    fontSize: 21,
  },

  footer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginBottom: 12,
    marginTop: 20,
    
    justifyContent: "space-around",
    gap: 10,
  },
});
export default Posts;
