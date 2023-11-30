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
import { Entypo, AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { likePost } from "../../redux/slices/postSlice";
import { useNavigation } from "@react-navigation/native";

const HighlightedPost = ({ post }) => {
  return (
    <View
      style={{
        backgroundColor: "rgba(0,0,0,.95)",
      }}
    >
      
      <View style={{ padding: 5 }}>
        <PostHeader post={post} />
        <View
          style={{

            marginHorizontal: 5,
          }}
        >
          <PostMessage post={post} />
          <PostImage post={post} />
          <PostFooter post={post} />
        </View>
        <Divider width={1} color="rgba(255,255,255,.15)" />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => {
  const navigation = useNavigation();
  const user = {
    _id: post.owner._id,
    avatar: post.owner.avatar,
    email: post.owner.email,
    name: post.owner.name,
    username: post.owner.username,
    postsCount: post.owner.postsCount,
    followersCount: post.owner.followersCount,
    followingsCount: post.owner.followingsCount,
    bio: post.owner.bio,
    isFollowingOwner: post.isFollowingOwner,
  };
  function handlePostHeaderClick() {
    if (!post?.isMyPost) {
      navigation.navigate("Search", {
        screen: "UserProfileScreen",
        params: { user },
      });
    } else {
      navigation.navigate("Profile", {
        screen: "ProfileScreen",
      });
    }
  }
  return (
    <Pressable
      onPress={handlePostHeaderClick}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingTop:5,
        paddingBottom:12,
        marginHorizontal: 5,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          marginVertical: "auto",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image source={{ uri: post?.owner?.avatar }} style={styles.story} />
          <View style={{ marginHorizontal: 5, justifyContent: "center" }}>
            <Text style={styles.name}>{post?.owner?.name}</Text>

            <Text style={styles.username}>{post?.owner?.username}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.timeAgo}>{post?.timeAgo}</Text>
        </View>
      </View>
      {/* <Entypo
          name="dots-three-horizontal"
          size={24}
          color="rgba(255,255,255,0.6)"
          style={{ paddingHorizontal: 5 }}
        /> */}
    </Pressable>
  );
};

const PostMessage = ({ post }) => (
  <View
    style={{
      padding: 10,
      paddingHorizontal: 20,
      display: `${post?.message === "" ? "none" : "flex"}`,
    }}
  >
    <Text style={styles.message}>{post?.message}</Text>
  </View>
);

const PostImage = ({ post }) => (
  <View
    style={{
      paddingTop: 10,
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
  const [likeCount, setLikeCount] = useState(post.likesCount);
  const [liked, setLiked] = useState(
    post?.isLiked == undefined ? false : post?.isLiked
  );
  const dispatch = useDispatch();
  async function handleLike() {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    dispatch(likePost({ postId: post._id }));
  }

  return (
    <View style={styles.footer}>
      <Pressable onPress={handleLike}>
        <Icons
          count={likeCount}
          iconname={`${liked ? "heart" : "hearto"}`}
          isLiked={liked}
        />
      </Pressable>
      <Icons count={post.commentsCount} iconname="message1" />

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
        size={20}
        color={`${!isLiked ? "rgba(255,255,255,0.4)" : "red"}`}
      />
      <Text style={{ color: "rgba(255,255,255,0.4)", fontSize: 10 }}>
        {count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1.6,
    marginHorizontal: 3,
    borderColor: "rgba(255,255,255,.1)",
  },
  name: {
    color: "white",
    fontWeight: "600",
    fontSize: 17,
  },
  username: {
    color: "rgba(255,255,255,.4)",
    fontSize: 14,
  },
  timeAgo: {
    color: "rgba(255,255,255,.4)",
    fontSize: 13,
  },
  message: {
    color: "white",
    fontSize: 16,
  },

  footer: {
    flexDirection: "row",
    margin:10,
    marginLeft:20,

    gap: 50,
  },
});
export default HighlightedPost;
