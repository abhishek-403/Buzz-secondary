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

const Posts = ({ post }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "rgba(0,0,0,.95)",
        flex: 1,
      }}
    >
      <Divider width={1} color="rgba(255,255,255,.15)" />
      <View style={{ padding: 5 }}>
        <PostHeader post={post} />
        <Pressable
          onPress={() => {
            navigation.navigate("Home", {
              screen: "CommentOnPost",
              params: { post },
            });
          }}
        >
          <PostMessage post={post} />
        </Pressable>
        <PostImage post={post} />
        <PostFooter post={post} />
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
      navigation.navigate("Home", {
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
        paddingTop: 5,
        paddingBottom: 12,
        marginHorizontal: 5,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
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
      padding: 8,
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
      flex: 1,
      paddingTop: 5,
      paddingHorizontal:5
    }}
  >
    {post?.images?.map((item, i) => {
      return (
        <Image
          source={{ uri: item.url }}
          style={{
            resizeMode: "contain",
            aspectRatio: 5/4,
            borderRadius:15,
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
  const navigator = useNavigation();
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

  async function handleComment() {
    navigator.navigate("Home", { screen: "CommentOnPost", params: { post } });
  }
  return (
    <View style={styles.footer}>
      {/* <Icons count={post.viewsCount} iconname="eyeo" />
      <Icons count={post.retweetsCount} iconname="retweet" /> */}

      <Pressable onPress={handleLike}>
        <Icons
          count={likeCount}
          iconname={`${liked ? "heart" : "hearto"}`}
          isLiked={liked}
        />
      </Pressable>
      <Pressable onPress={handleComment}>
        <Icons count={post.commentsCount} iconname="message1" />
      </Pressable>
      {/* <Icons iconname="sharealt" /> */}
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
        size={22}
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
    width: 45,
    height: 45,
    borderRadius: 50,
    borderWidth: 1.6,
    marginHorizontal: 3,
    borderColor: "rgba(255,255,255,.1)",
  },
  name: {
    color: "white",
    fontWeight: "600",
    fontSize: 15,
  },
  username: {
    color: "rgba(255,255,255,.4)",
    fontSize: 12,
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
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 20,
    paddingBottom: 5,
    paddingTop: 10,
    justifyContent: "flex-end",
    gap: 50,
  },
});
export default Posts;
