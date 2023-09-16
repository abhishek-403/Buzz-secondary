import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  containerFull,
  formInput,
  formbtn,
  goback,
  formHead2,
} from "./CommonCss";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { axiosClient } from "../../../utils/axiosSetup";

const SetUserName = ({ navigation, route }) => {
  const { email } = route.params;
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  async function handleSubmit() {
    try {
      const res = await axiosClient.post("/auth/changeusername", {
        username,email
      });

      if (res.status != "ok") {
        alert(res.result);
        return;
      }
     
      navigation.navigate("SetPassword",{username,email,name})
     
    } catch (e) {
      alert(e);
    }
  }
  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Signup")}
        style={goback}
      >
        <MaterialIcons name="arrow-back-ios" size={24} color="gray" />
        <Text
          style={{
            color: "gray",
            fontSize: 16,
          }}
        >
          Go Back
        </Text>
      </TouchableOpacity>

      {/* <Image source={logo} style={logo1} /> */}
      <View style={{ gap: 30, width: "100%", alignItems: "center" }}>
        <Text style={formHead2}>Choose a name and Username</Text>
        <TextInput
          placeholder="Enter a username"
          style={formInput}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          placeholder="Enter a name"
          style={formInput}
          onChangeText={(text) => setName(text)}
        />

        {/* {loading ? (
        <ActivityIndicator />
        ) : (
        )} */}
        <Pressable onPress={handleSubmit} style={formbtn}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              padding: 10,
            }}
            
          >
            Next
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SetUserName;

const styles = StyleSheet.create({
  containerFull: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  goback: {
    flexDirection: "row",
    position: "absolute",
    top: 50,
    left: 20,
    alignItems: "center",
  },
  formHead2: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    // fontWeight: 'bold',
    // backgroundColor: 'white',
  },
  formInput: {
    backgroundColor: "rgba(255,255,255,1)",
    width: "80%",
    padding: 15,
    fontSize: 20,
    borderRadius: 20,
  },
  formbtn: {
    backgroundColor: "black",
    borderColor: "white",
    paddingVertical: 10,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: "white",
    width: "80%",
    alignItems: "center",
  },
});
