import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import profileimg from "../../assets/profilepic.png";
import postpic from "../../assets/postpic.png";
import { Entypo, AntDesign } from "@expo/vector-icons";

const Posts = () => {
  const post = {
    username: "abhishek404",
    name: "Abhishek Sharma",
    postPhoto: postpic,
    profilePhoto: profileimg,
    message:
      "This is a random message. A quick brown fox jumps over a lazy little dog. This is a random message. A quick brown fox jumps over a lazy little dog.",
    footerInfo: [],
  };

  return (
    <View>
      <Divider width={1} orientation="horizontal" color="rgba(250,250,250,.08)" />
      <PostHeader post={post} />
      <PostMessage post={post} />
      <PostImage post={post} />
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
        <Image source={post.profilePhoto} style={styles.story} />
        <View style={{ marginHorizontal: 5 }}>
          <Text style={styles.name}>{post.name}</Text>
          <Text style={styles.username}>{post.username}</Text>
        </View>
      </View>
      <Entypo name="dots-three-horizontal" size={24} color="white" />
    </View>
  );
};

const PostMessage = ({ post }) => (
  <View style={{ paddingHorizontal: 5 }}>
    <Text style={styles.message}>{post.message}</Text>
  </View>
);

const PostImage = ({ post }) => (
  <View
    style={{
      width: "100%",
      maxHeight: 300,
      padding: 5,
    }}
  >
    <Image
      source={post.postPhoto}
      style={{ resizeMode: "contain", height: "100%" }}
    />
  </View>
);

const PostFooter = ({ post }) => {
  return (
    <View style={styles.footer}>
      <Icons iconname="retweet" />
      <Icons iconname="hearto" />
      <Icons iconname="eyeo" />
      <Icons iconname="sharealt" />
    </View>
  );
};

const Icons = ({ iconname, count }) => (
  <View
    style={{
      paddingHorizontal: 8,
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    }}
  >
    <AntDesign name={iconname} size={26} color="white" />
    <Text style={{ color: "white", fontSize: 16 }}>12</Text>
  </View>
);

const styles = StyleSheet.create({
  story: {
    width: 55,
    height: 55,
    borderRadius: 50,
    borderWidth: 1.6,
    marginLeft: 6,
    borderColor: "purple",
  },
  name: {
    color: "white",
    fontWeight: "700",
    marginLeft: 5,
    fontSize: 17,
    lineHeight: 20,
  },
  username: {
    color: "#a3a3a3",
    fontSize: 15,
    marginLeft: 5,
    lineHeight: 18,
  },
  message: {
    color: "white",
    fontSize: 19,
    margin: 3,
  },

  footer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginBottom: 12,
    marginTop: 15,
    justifyContent: "space-around",
    gap: 10,
  },
});
export default Posts;
