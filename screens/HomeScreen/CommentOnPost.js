import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useEffect } from "react";
import Posts from "../../components/home/Posts";
import HighlightedPost from "../../components/home/HiglightedPost";
import Header from "../../components/home/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Divider } from "react-native-elements";
import EachComment from "../../components/Comment/EachComment";
import { axiosClient } from "../../utils/axiosSetup";
import HomeScreenLoading from "../LoadingScreens/HomeScreenLoading";
import { useDispatch, useSelector } from "react-redux";
import { setCommentLoader } from "../../redux/slices/appConfigSlice";
import { useFocusEffect } from "@react-navigation/native";
const MAX_CHARACTER_LIMIT = 120;

const CommentOnPost = ({ route }) => {
  const post = route.params.post;

  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const isLoading = useSelector((s) => s.appConfigReducer.isCommentLoading);
  // const [isLoading, setIsLoading] = useState(false);
  
  async function loadComments() {
  
    console.log("postfnw");
    try {
      dispatch(setCommentLoader(true));
      const d = await axiosClient.post("/post/getallcomments", {
        postId: post._id,
      });
      setData(d.result.data);
    } catch (e) {
    } finally {
      dispatch(setCommentLoader(false));
    }
  }
  

  useFocusEffect(
    React.useCallback(() => {
      loadComments();

    }, [])
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <View style={{ marginTop: 10 }}>
          <HighlightedPost post={post} />
        </View>
        <View>
          <CreateComment loadComments={loadComments} post={post} />
        </View>
        {isLoading ? (
          <HomeScreenLoading />
        ) : (
          data.map((item, i) => {
            return (
              <EachComment key={i} post={item} loadComments={loadComments} />
            );
          })
        )}
      </ScrollView>

      {/* <FlatList
        data={data}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <EachComment post={item} loadComments={loadComments} />
        )}
        ListFooterComponent={isLoading ? <HomeScreenLoading /> : null}
      /> */}

      <Divider width={1} color="rgba(255,255,255,.15)" />
    </SafeAreaView>
  );
};

function CreateComment({ post, loadComments }) {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleTextChange = (inputText) => {
    if (inputText.length <= MAX_CHARACTER_LIMIT) {
      setMessage(inputText);
    } else {
      return;
    }
  };

  async function handleCommentPost() {
    if (message == "") {
      return;
    }
    try {
      setIsLoading(true);
      await axiosClient.post("/post/comment", {
        postId: post._id,
        message,
      });
      setMessage("");
      loadComments();
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={styles.textArea}
          multiline
          value={message}
          onChangeText={handleTextChange}
          placeholder="Enter comment here..."
          placeholderTextColor="rgba(255,255,255,.5)"
        ></TextInput>
        <TouchableOpacity
          onPress={handleCommentPost}
          style={{
            justifyContent: "center",
          }}
        >
          {isLoading ? (
            <ActivityIndicator size="small" />
          ) : (
            <Text
              style={{
                backgroundColor: "rgba(127, 112, 255, 0.8)",
                color: "white",
                fontSize: 15,
                fontWeight: 700,
                paddingHorizontal: 15,
                paddingVertical: 10,
                marginLeft: 5,

                borderRadius: 20,
              }}
            >
              Post
            </Text>
          )}
        </TouchableOpacity>
      </View>
      <Text style={styles.wordLimitText}>
        {message.length}/{MAX_CHARACTER_LIMIT} characters
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)",
  },
  textArea: {
    flex: 1,
    borderWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.4)",
    padding: 10,
    color: "white",
    fontSize: 15,
  },
  wordLimitText: {
    margin: 8,
    fontSize: 13,
    color: "rgba(255,255,255,0.3)",
  },
});

export default CommentOnPost;
