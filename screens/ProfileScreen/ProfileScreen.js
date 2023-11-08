import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  bio,
  container,
  eachHead,
  eachHeadView,
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
} from "./profilecss";
import { Ionicons } from "@expo/vector-icons";
import { Divider } from "react-native-elements";
import Posts from "../../components/home/Posts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getmyProfile } from "../../redux/slices/appConfigSlice";
import { getMyposts } from "../../redux/slices/userSlice";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreenLoading from "../LoadingScreens/HomeScreenLoading";
import { axiosClient } from "../../utils/axiosSetup";
import HiveBox from "../../components/Hive/HiveBox";

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState("Posts");
  const dispatch = useDispatch();
  const data = useSelector((s) => s.appConfigReducer.myProfile);

  // useEffect(() => {
  //   dispatch(getmyProfile());
  // }, [dispatch]);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getmyProfile());
    }, [])
  );

  function displayCard() {
    switch (activeTab) {
      case "Posts":
        return <PostsCard />;
      case "People":
        return <PeopleCard />;
      case "Hives":
        return <HiveCard />;
      default:
        return;
    }
  }

  return (
    <SafeAreaView style={container}>
      {/* <Head data={data} /> */}
      <View
        style={{
          paddingHorizontal: 15,
          paddingTop: 15,
          paddingBottom: 5,

          backgroundColor: "rgba(0,0,0,1)",
        }}
      >
        <ProfileCard data={data} />
        <AboutCard data={data} />
        <FollowerCard data={data} />
        <OptionsBar data={data} setActiveTab={setActiveTab} />
      </View>

      <Divider width={0.5} color="rgba(250,250,250,.2)" />
      <View style={lowerCard}>
        <View>{displayCard()}</View>
      </View>
    </SafeAreaView>
  );
};

const Head = ({ data }) => {
  const navigation = useNavigation();
  async function handleLogout() {
    AsyncStorage.removeItem("accessstoken").then(async () => {
      console.log("log", await AsyncStorage.getItem("accessstoken"));
      navigation.navigate("AuthStack", { screen: "Login" });
    });
  }
  return (
    <View style={headCont}>
      <View>
        <Ionicons name="caret-back" size={30} color="white" />
      </View>
      <View style={subHead}>
        <Text style={head1}>{data?.name}</Text>
        <Text style={head2}>{data?.posts?.length} posts</Text>
      </View>
      <Pressable onPress={handleLogout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

const ProfileCard = ({ data }) => {
  const navigation = useNavigation();

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

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditProfile", {
              name: data.name,
              username: data.username,
              bio: data.bio,
              avatar: data.avatar,
            })
          }
        >
          <Text style={editBtn}>Edit</Text>
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
    <Text style={followers}>{data?.followers?.length} followers</Text>

    <Text style={followers}>{data?.followings?.length} followings</Text>
    <Text style={followers}>{data?.posts?.length} posts</Text>
  </View>
);

const OptionsBar = ({ setActiveTab, data }) => (
  <ScrollView horizontal={true} contentContainerStyle={topHead}>
    <View style={eachHeadView}>
      <Pressable onPress={() => setActiveTab("Posts")}>
        <Text style={eachHead}>Posts</Text>
      </Pressable>
    </View>

    <Divider width={1} color="rgba(255,255,255,.2)" orientation="vertical" />
    <View style={eachHeadView}>
      <Pressable onPress={() => setActiveTab("Hives")}>
        <Text style={eachHead}>Hives</Text>
      </Pressable>
    </View>

    <Divider width={1} color="rgba(255,255,255,.2)" orientation="vertical" />

    <View style={eachHeadView}>
      <Pressable onPress={() => setActiveTab("People")}>
        <Text style={eachHead}>People</Text>
      </Pressable>
    </View>
  </ScrollView>
);

const PostsCard = () => {
  const data = useSelector((s) => s.userReducer.myPosts);
  const dispatch = useDispatch();
  const isLoading = useSelector((s) => s.userReducer.isLoading);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     dispatch(getMyposts());
  //   }, [])
  // );

  const ITEMS_PER_PAGE = 5;
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getMyposts({ page, pageSize: ITEMS_PER_PAGE }));
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  // if (isLoading) {
  //   return <HomeScreenLoading />;
  // }
  return (
    // <ScrollView>
    //   {data?.map((item, i) => (
    //     <Posts post={item} key={i} />
    //   ))}
    // </ScrollView>
    <FlatList
      data={data}
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item }) => <Posts post={item} />}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={isLoading ? <HomeScreenLoading /> : null}
    ></FlatList>
  );
};

const PeopleCard = () => (
  <ScrollView>
    <Text>Coming soon</Text>
  </ScrollView>
);
const HiveCard = () => {
  async function getMyHives() {
    const res = await axiosClient.get("/hive/getmyhives");
    setHives(res.result.hives);
  }
  const [hives, setHives] = useState([]);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      getMyHives();
    }, [])
  );
  return (
    <View>
      <FlatList
        data={hives}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <HiveBox         
            hive={item}
          />
        )}
      />
    </View>
  );
};

export default ProfileScreen;
