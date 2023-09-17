import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  container,
  head1,
  headCont,
  inputBox,
  profileImgCont,
  profileInfoCont,
  subHead,
} from "./profilecss";
import { useNavigation } from "@react-navigation/native";
import pimg from "../../assets/profilepic.png";
import { Ionicons } from "@expo/vector-icons";

const EditProfile = ({ data }) => {
  const [name, setName] = useState("Abhishek");
  const [username, setUsername] = useState("Abhishek");
  const [bio, setBio] = useState("Abhishekdaggrgrhrhrhrhrhrhrhrhrhrhrhrhrhrhrhrhrhrhrhrhrhrhrh");
  return (
    <SafeAreaView style={container}>
      <Head />
      <ScrollView style={{ flex: 1 }}>
        <View style={profileImgCont}>
          <Image
            source={pimg}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              borderWidth: 1.6,
              marginHorizontal: 3,
              borderColor: "rgba(255,255,255,.1)",
            }}
          />
        </View>
        <View style={profileInfoCont}>
          <View>
            <Text style={{ fontSize: 16, color: "rgba(255,255,255,.4)" }}>
              Name
            </Text>
            <TextInput style={inputBox} value={name} />
          </View>
          <View>
            <Text style={{ fontSize: 16, color: "rgba(255,255,255,.4)" }}>
              Username
            </Text>
            <TextInput style={inputBox} value={username} />
          </View>
          <View>
            <Text style={{ fontSize: 16, color: "rgba(255,255,255,.4)" }}>
              Bio
            </Text>
            <TextInput style={inputBox} value={bio} multiline />
          </View>
        </View>

        <Pressable
          style={{
            flexDirection: "row",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "black",
              paddingHorizontal: 15,
              paddingVertical: 5,
              backgroundColor: "white",
              borderRadius: 20,

              fontWeight: 700,
            }}
          >
            Save
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const Head = () => {
  const navigation = useNavigation();
  async function handleBack() {
    navigation.navigate("Home");
  }
  return (
    <View style={headCont}>
      <Pressable onPress={handleBack}>
        <Ionicons name="caret-back" size={30} color="white" />
      </Pressable>
      <View style={subHead}>
        <Text style={head1}>Edit Profile</Text>
      </View>
    </View>
  );
};

export default EditProfile;
