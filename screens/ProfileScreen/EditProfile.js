import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
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
import defaultImg from "../../assets/profileicondefault.png";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { axiosClient } from "../../utils/axiosSetup";

const EditProfile = ({ navigation, route }) => {
  const { name, username, bio, avatar } = route.params;
  const [newname, setName] = useState(name);
  const [newusername, setUsername] = useState(username);
  const [newbio, setBio] = useState(bio);
  const [image, setImage] = useState(avatar);

  const [loading, setIsLoading] = useState(false);

  async function handleAvatarChange() {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 3],
        quality: 1,
        allowsEditing: true,
      });
      if (!result.canceled) {
        if (result.assets.length == 0) {
          return;
        }
        setImage(result?.assets[0].uri);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function handleSubmit() {
    try {
      setIsLoading(true);
      let formData = new FormData();
      formData.append("avatar", {
        uri: image,
        name: `image.jpg`,
        type: "image/jpeg",
      });
      formData.append("name", newname);
      formData.append("username", newusername);
      formData.append("bio", newbio);
      formData.append("upload_preset", "Buzz_avatar_preset");
      const res = await axiosClient.post("/user/editprofile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(res.result);
      navigation.navigate("ProfileScreen");
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SafeAreaView style={container}>
      <Head />
      <ScrollView style={{ flex: 1 }}>
        <View style={profileImgCont}>
          <Pressable
            onPress={handleAvatarChange}
            style={{ position: "relative", flex: 1 }}
          >
            <Image
              source={image != "" ? { uri: image } : defaultImg}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                borderWidth: 1.6,
                marginHorizontal: 3,
                borderColor: "rgba(255,255,255,.1)",
              }}
            />
            <Feather
              style={{ position: "absolute", bottom: 0, right: 0 }}
              name="edit-3"
              size={20}
              color="rgba(255,255,255,0.7)"
            />
          </Pressable>
        </View>
        <View style={profileInfoCont}>
          <View>
            <Text style={{ fontSize: 16, color: "rgba(255,255,255,.4)" }}>
              Name
            </Text>
            <TextInput
              style={inputBox}
              onChangeText={(e) => setName(e)}
              value={newname}
            />
          </View>
          <View>
            <Text style={{ fontSize: 16, color: "rgba(255,255,255,.4)" }}>
              Username
            </Text>
            <TextInput
              style={inputBox}
              onChangeText={(e) => setUsername(e)}
              value={newusername}
            />
          </View>
          <View>
            <Text style={{ fontSize: 16, color: "rgba(255,255,255,.4)" }}>
              Bio
            </Text>
            <TextInput
              style={inputBox}
              onChangeText={(e) => setBio(e)}
              value={newbio}
              multiline
            />
          </View>
        </View>

        <Pressable
          onPress={handleSubmit}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            padding: 20,
          }}
        >
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
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
          )}
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const Head = () => {
  const navigation = useNavigation();
  async function handleBack() {
    navigation.goBack();
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
