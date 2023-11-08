import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import React, { useCallback, useEffect } from "react";
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
  text,
} from "./hiveScreenscss";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Divider } from "react-native-elements";
import { axiosClient } from "../../utils/axiosSetup";
import { AntDesign } from "@expo/vector-icons";
import EachProfileCard from "../SearchScreen/EachProfileCard";

const HiveInfoScreen = ({ route, navigation }) => {
  const [activeTab, setActiveTab] = useState("Members");
  const { hive } = route.params;
  const [members, setMembers] = useState();
  const [posts, setPosts] = useState();
  const loadHive = async () => {
    try {
      const res = await axiosClient.post("/hive/getonehiveinfo", {
        hiveId: hive._id,
      });
      setMembers(res.result.members);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
  
    loadHive();
  }, []);

  function displayCard() {
    switch (activeTab) {
      case "Members":
        return <Members hive={hive} />;
      case "Posts":
        return <Text></Text>;
      default:
        return;
    }
  }
  return (
    <SafeAreaView style={container}>
      <Head hive={hive} />
      <View
        style={{
          paddingHorizontal: 15,
          paddingTop: 15,
          paddingBottom: 5,

          backgroundColor: "rgba(0,0,0,1)",
        }}
      >
        <OptionsBar setActiveTab={setActiveTab} />
      </View>

      <Divider width={0.5} color="rgba(250,250,250,.2)" />
      <View style={lowerCard}>
        <Pressable
          style={{
            position: "absolute",
            bottom: 30,
            backgroundColor: "skyblue",
            borderRadius: 30,
            right: 30,
          }}
          onPress={() =>
            navigation.navigate("Profile",{screen:"HiveSearch",params: { hiveId: hive._id }})
          }
        >
          <AntDesign name="pluscircleo" size={50} color="black" />
        </Pressable>
        <View>{displayCard()}</View>
      </View>
    </SafeAreaView>
  );
};

const Head = ({ hive }) => (
  <View style={styles.head}>
    <View></View>
    <View>
      <Text style={{ color: "white", fontSize: 20, fontWeight: 700 }}>
        Create Post
        {/* {hive?.name} */}
      </Text>
    </View>
    <View></View>
  </View>
);

const Members = ({ hive }) => {
  // async function getMembers(){
  //     const res= await axiosClient.post('/hive/')
  // }
  useFocusEffect(
    React.useCallback(() => {
      loadHive();
    }, [])
  );

  const [members, setMembers] = useState();
  const [posts, setPosts] = useState();
  const loadHive = async () => {
    try {
      const res = await axiosClient.post("/hive/getonehiveinfo", {
        hiveId: hive._id,
      });
      setMembers(res.result.members);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{ paddingTop: 5 }}>
      {members?.map((item, i) => (
        <EachProfileCard user={item} key={i} />
      ))}
    </View>
  );
};

const OptionsBar = ({ setActiveTab, data }) => (
  <ScrollView horizontal={true} contentContainerStyle={topHead}>
    <View style={eachHeadView}>
      <Pressable onPress={() => setActiveTab("Members")}>
        <Text style={eachHead}>Members</Text>
      </Pressable>
    </View>
    <Divider width={1} color="rgba(255,255,255,.2)" orientation="vertical" />
    <View style={eachHeadView}>
      <Pressable onPress={() => setActiveTab("Posts")}>
        <Text style={eachHead}>Posts</Text>
      </Pressable>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "rgba(0,0,0,.9)",
  },
  head: {
    backgroundColor: "rgba(0,0,0,1)",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    height: 70,
  },
});

export default HiveInfoScreen;
