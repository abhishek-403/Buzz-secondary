import { Image, Pressable, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  bio,
  container,
  eachHead,
  editBtn,
  followers,
  head1,
  head2,
  headCont,
  imageCardCont,
  links,
  linksCont,
  lowerCard,
  name,
  nameCard,
  subHead,
  topHead,
  username,
} from "./profilecss";
import { Ionicons } from "@expo/vector-icons";
import pimg from "../../assets/profilepic.png";
import postimg from "../../assets/postpic.png";
import { Divider } from "react-native-elements";
import Posts from "../../components/home/Posts";
import SubHeader from "../../components/home/SubHeader";

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState("Posts");

  function displayCard() {
    switch (activeTab) {
      case "Posts":
        return <PostsCard />;
      case "People":
        return <PeopleCard />;
      default:
        return;
    }
  }

  return (
    <SafeAreaView style={container}>
      <Head />
      <View
        style={{
          paddingHorizontal: 15,
          backgroundColor: "rgba(0,0,0,1)",
        }}
      >
        <ProfileCard />
        <AboutCard />
        <FollowerCard />
        <OptionsBar setActiveTab={setActiveTab} />
      </View>

        <Divider
          // style={{ paddingVertical: 3 }}
          width={.01}
          color="rgba(250,250,250,.08)"
        />
      <View style={lowerCard}>

        <ScrollView>{displayCard()}</ScrollView>
      </View>
    </SafeAreaView>
  );
};

const Head = () => {
  return (
    <View style={headCont}>
      <View>
        <Ionicons name="caret-back" size={33} color="white" />
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
            width: 75,
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
    <Text style={bio}>
      Curious and Mern developerCurious and Mern developerCurious and Mern
      developer
    </Text>

    {/* <View style={linksCont}>
      <Text style={links}>instagram</Text>
      <Text style={links}>instagram</Text>
      <Text style={links}>instagram</Text>
    </View> */}
  </View>
);
const FollowerCard = () => (
  <View style={{ flexDirection: "row", gap: 30, paddingVertical: 5 }}>
    <Text style={followers}>{"23"} followers</Text>

    <Text style={followers}>{"24"} followings</Text>
  </View>
);

const OptionsBar = ({ setActiveTab }) => (
  <ScrollView contentContainerStyle={topHead}>
    <Pressable onPress={() => setActiveTab("Posts")}>
      <Text style={eachHead}>Posts</Text>
    </Pressable>
    <Divider width={.7} color="rgba(255,255,255,.2)" orientation="vertical" />

    <Pressable onPress={() => setActiveTab("People")}>
      <Text style={eachHead}>People</Text>
    </Pressable>
  </ScrollView>
);
const PostsCard = () => (
  <ScrollView>
    <Posts />
    <Posts />
  </ScrollView>
);

const PeopleCard = () => (
  <ScrollView>
    <SubHeader />
  </ScrollView>
);

export default ProfileScreen;
