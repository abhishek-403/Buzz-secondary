import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { axiosClient } from "../../utils/axiosSetup";
import { Divider } from "react-native-elements";

const AddUserToHive = ({ route }) => {
  const { hiveId } = route.params;
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  async function getSearchedUser(message) {
    const res = await axiosClient.post("/hive/searchusertoadd", {
      name: message,
    });

    setData(res.result.data);
  }
  async function handleTextChange(text) {
    setMessage(text);

    if (text === "") {
      setData([]);
      return;
    }
    getSearchedUser(message);
  }
  return (
    <SafeAreaView keyboardShouldPersistTaps="always" style={style.container2}>
      <View>
        <TextInput
          style={style.textArea}
          onChangeText={(text) => {
            handleTextChange(text);
          }}
          placeholder="Search User to add"
          autoFocus
          value={message}
          placeholderTextColor="rgba(255,255,255,.6)"
        />
      </View>
      <ScrollView style={{ flex: 1 }}>
        {data?.map((item, i) => {
          return <HiveProfileCard hiveId={hiveId} user={item} key={i} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

function HiveProfileCard({ user,hiveId }) {
  async function handleNav() {
    try {
        console.log("ga",hiveId,user._id);
      const res = await axiosClient.post("/hive/addmember", {
        hiveId,
        memberId: user._id,
      });
      alert(res.result)
    } catch (e) {
    }
  }
  return (
    <>
      <Pressable onPress={handleNav} style={style.container}>
        <Image
          source={{ uri: user?.avatar }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            borderWidth: 1.6,
            marginHorizontal: 3,
            resizeMode: "cover",
            borderColor: "rgba(255,255,255,.1)",
          }}
        />
        <View>
          <Text style={{ color: "white", fontSize: 16 }}>{user?.name}</Text>
          <Text style={{ color: "#a3a3a3", fontSize: 12 }}>
            {user?.username}
          </Text>
        </View>
      </Pressable>
      <Divider
        width={1}
        color="rgba(255,255,255,0.1)"
        style={{ paddingTop: 5 }}
      />
    </>
  );
}
const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingVertical: 5,
  },
  container2: {
    backgroundColor: "rgba(0,0,0,.9)",
    flex: 1,
    padding: 10,
  },
  textArea: {
    marginVertical: 10,
    borderColor: "rgba(255,255,255,0.4)",
    borderWidth: 1,
    padding: 12,
    color: "white",
    fontSize: 16,
    borderRadius: 20,
  },
});

export default AddUserToHive;
