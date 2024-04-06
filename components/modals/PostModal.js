import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Button, Pressable } from "react-native";
import { axiosClient } from "../../utils/axiosSetup";
import { useDispatch, useSelector } from "react-redux";
import { getFeedData } from "../../redux/slices/appConfigSlice";
import { getMyposts } from "../../redux/slices/userSlice";


const PostModal = ({ handleClose }) => {
  const postId = useSelector((s) => s.modalReducer.id);
  const dispatch = useDispatch()
  async function handleDelete() {
    try {
      handleClose()
      await axiosClient.post("/post/delete", { postId });
      dispatch(getFeedData());
       dispatch(getMyposts());
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <View className="relative">
      <View className="flex flex-row absolute items-center right-0 z-50 ">
        <Pressable onPress={handleClose}>
          <Ionicons name={"close"} color={"white"} size={24} />
        </Pressable>
      </View>
      <View className="flex gap-2">
        <Pressable className="border py-2 border-b-[#2d2d2d]">
          <Text className="text-white text-lg ">Bookmark </Text>
        </Pressable>
        <Pressable className="border py-2 border-b-[#2d2d2d]">
          <Text className="text-white text-lg ">Edit Post</Text>
        </Pressable>
        <Pressable
          className="border py-2 border-b-[#2d2d2d]"
          onPress={handleDelete}
        >
          <Text className="text-red-400 text-lg ">Delete Post</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PostModal;
