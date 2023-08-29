import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  bio,
  container,
  editBtn,
  followers,
  followings,
  head1,
  head2,
  headCont,
  imageCardCont,
  links,
  name,
  nameCard,
  subHead,
  username,
} from "./profilecss";
import { Ionicons } from "@expo/vector-icons";
import pimg from "../../assets/profilepic.png";
import postimg from "../../assets/postpic.png";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={container}>
      <Head />
      <ProfileCard />
      <AboutCard />
      <FollowerCard/>
    </SafeAreaView>
  );
};

const Head = () => {
  return (
    <View style={headCont}>
      <View>
        <Ionicons name="caret-back" size={35} color="white" />
      </View>
      <View style={subHead}>
        <Text style={head1}>Abhishek Sharma</Text>
        <Text style={head2}>2 posts</Text>
      </View>
    </View>
  );
};

const ProfileCard = () => {
  return (
    <View style={imageCardCont}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={pimg}
          style={{
            width: 85,
            aspectRatio: 1,
            resizeMode: "cover",
            borderRadius: 100,
            borderColor: "rgba(255,255,255,.3)",
            borderWidth: 2,
          }}
        />

        <Text style={editBtn}>Edit</Text>
      </View>
      <View style={nameCard}>
        <Text style={name}>Abhishek Sharma</Text>
        <Text style={username}>@abhishek404</Text>
      </View>
    </View>
  );
};

const AboutCard = () => (
  <View>
    <Text style={bio}>Curious and Mern developer</Text>

    <View style={links}></View>
  </View>
);
const FollowerCard = () => (
  <View style={{flexDirection:"row",gap:30,paddingVertical:10}}>
    <Text style={followers}>{"23"} followers</Text>

    <Text style={followings}>{"24"} followings</Text>
  </View>
);

export default ProfileScreen;

const styles = StyleSheet.create({});
