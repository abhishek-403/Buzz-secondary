import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
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
  lowerCard,
  name,
  nameCard,
  subHead,
  topHead,
  username,
} from "./UserProfileScreenCss.js";
import { Ionicons } from "@expo/vector-icons";
import { Divider } from "react-native-elements";
import Posts from "../../components/home/Posts";
import { useDispatch, useSelector } from "react-redux";
import { getUsersposts } from "../../redux/slices/userSlice";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreenLoading from "../LoadingScreens/HomeScreenLoading";

const UserProfileScreen = ({ route }) => {
  const data = route.params.user;
  const [activeTab, setActiveTab] = useState("Posts");

  function displayCard() {
    switch (activeTab) {
      case "Posts":
        return <PostsCard userId={data._id} />;
      case "People":
        return <PeopleCard />;
      default:
        return;
    }
  }

  return (
    <SafeAreaView style={container}>
      <Head data={data} />
      <View
        style={{
          paddingHorizontal: 15,
          backgroundColor: "rgba(0,0,0,1)",
        }}
      >
        <ProfileCard data={data} />
        <AboutCard data={data} />
        <FollowerCard data={data} />
        <OptionsBar data={data} setActiveTab={setActiveTab} />
      </View>

      <Divider width={1} color="rgba(250,250,250,.2)" />
      <View style={lowerCard}>
        <ScrollView>{displayCard()}</ScrollView>
      </View>
    </SafeAreaView>
  );
};

const Head = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={headCont}>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="caret-back" size={30} color="white" />
      </Pressable>
      <View style={subHead}>
        <Text style={head1}>{data?.name}</Text>
        <Text style={head2}>{data?.postsCount} posts</Text>
      </View>
    </View>
  );
};

const ProfileCard = ({ data }) => {
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
          source={{ uri: data?.avatar }}
          style={{
            width: 75,
            aspectRatio: 1,
            resizeMode: "cover",
            borderRadius: 100,
            borderColor: "rgba(255,255,255,.3)",
            borderWidth: 2,
          }}
        />

        <TouchableOpacity>
          <Text style={editBtn}>Follow</Text>
        </TouchableOpacity>
      </View>
      <View style={nameCard}>
        <Text style={name}>{data?.name}</Text>
        <Text style={username}>{data?.username}</Text>
      </View>
    </View>
  );
};

const AboutCard = ({ data }) => (
  <View>
    <Text style={bio}>{data?.bio}</Text>

    {/* <View style={linksCont}>
        <Text style={links}>instagram</Text>
        <Text style={links}>instagram</Text>
        <Text style={links}>instagram</Text>
      </View> */}
  </View>
);
const FollowerCard = ({ data }) => (
  <View style={{ flexDirection: "row", gap: 30, paddingVertical: 10 }}>
    <Text style={followers}>{data?.followersCount} followers</Text>

    <Text style={followers}>{data?.followingsCount} followings</Text>
    <Text style={followers}>{data?.postsCount} posts</Text>
  </View>
);

const OptionsBar = ({ setActiveTab, data }) => (
  <ScrollView contentContainerStyle={topHead}>
    <Pressable onPress={() => setActiveTab("Posts")}>
      <Text style={eachHead}>Posts</Text>
    </Pressable>
    <Divider width={1} color="rgba(255,255,255,.2)" orientation="vertical" />

    <Pressable onPress={() => setActiveTab("People")}>
      <Text style={eachHead}>People</Text>
    </Pressable>
  </ScrollView>
);
const PostsCard = ({ userId }) => {
  const data = useSelector((s) => s.userReducer.usersPosts);
  const dispatch = useDispatch();
  const isLoading = useSelector((s) => s.userReducer.isLoading);

  useEffect(() => {
    dispatch(getUsersposts({ userId }));
  }, [userId]);
  if (isLoading) {
    return <HomeScreenLoading />;
  }

  return (
    <ScrollView>
      {data?.map((item, i) => (
        <Posts post={item} key={i} />
      ))}
    </ScrollView>
  );
};

const PeopleCard = () => (
  <ScrollView>
    <Text>Coming soon</Text>
  </ScrollView>
);

export default UserProfileScreen;
