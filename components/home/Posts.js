import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";
import profileicondef from "../../assets/profileicondefault.png";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { likePost } from "../../redux/slices/postSlice";

const Posts = ({ post }) => {
  return (
    <View
      style={{
        backgroundColor: "rgba(0,0,0,.95)",
        flex: 1,
      }}
    >
      <Divider width={1} color="rgba(255,255,255,.08)" />
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
        marginVertical: 8,
        marginHorizontal: 8,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={profileicondef} style={styles.story} />
        <View style={{ marginHorizontal: 5 }}>
          <Text style={styles.name}>{post?.owner?.name}</Text>
          <Text style={styles.username}>{post?.owner?.username}</Text>
        </View>
      </View>
      <Entypo name="dots-three-horizontal" size={24} color="rgba(255,255,255,0.6)"  style={{paddingHorizontal:5}}/>
    </View>
  );
};

const PostMessage = ({ post }) => (
  <View
    style={{
      paddingHorizontal: 15,
      paddingTop: 5,
      paddingBottom: 15,
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
  const [liked, setLiked] = useState(post?.isLiked);
  const dispatch = useDispatch();
  async function handleLike() {
    setLiked(!liked);
    setLikeC;
    dispatch(likePost({ postId: post._id }));
  }
  const [likeC, setLikeC] = useState(post.likesCount);

  return (
    <View style={styles.footer}>
      <Icons count={post.viewsCount} iconname="eyeo" />
      <Icons count={post.retweetsCount} iconname="retweet" />
      <Icons count={post.commentsCount} iconname="message1" />
      <Pressable onPress={handleLike}>
        <Icons
          count={likeC}
          iconname={`${liked ? "heart" : "hearto"}`}
          isLiked={liked}
        />
      </Pressable>
      <Icons iconname="sharealt" />
    </View>
  );
};

const Icons = ({ iconname, count, isLiked }) => {
  return (
    <View
      style={{
        paddingHorizontal: 8,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
      }}
    >
      <AntDesign
        name={iconname}
        size={17}
        color={`${!isLiked ? "rgba(255,255,255,0.6)" : "red"}`}
      />
      <Text style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>
        {count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 1.6,
    marginHorizontal: 3,
    borderColor: "rgba(255,255,255,.1)",
  },
  name: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,

  },
  username: {
    color: "#a3a3a3",
    fontSize: 12,
  },
  message: {
    color: "white",
    fontSize: 16,
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
