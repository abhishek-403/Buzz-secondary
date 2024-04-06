import { ResizeMode, Video } from "expo-av";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";



const VideoItem = ({ url }) => {
  const video = React.useRef(null);
  console.log(url);
  return (
    <View style={styles2.viderCont}>
      <Video
        ref={video}
        style={styles2.video}
        source={{ uri: url }}
        useNativeControls={true}
        resizeMode={ResizeMode.COVER}
        isLooping={true}
      />
    </View>
  );
};
data = [
  {
    id: 1,
    uri: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
  },
  {
    id: 2,
    uri: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
  },
  {
    id: 3,
    uri: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
  },
];
export const VideosPage = () => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <VideoItem url={item.uri} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles2.videoList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};


const styles2 = StyleSheet.create({
  videoList: {
    flexGrow: 1,
    paddingBottom: 50, // Adjust as per your bottom tab bar height
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  viderCont: {
    width: "100%",
    aspectRatio: 9 / 16, // Assuming aspect ratio of 16:9
    marginBottom: 10,
    backgroundColor: "#000",
  },
  video: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});