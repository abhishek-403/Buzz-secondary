import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { axiosClient } from "../../../utils/axiosSetup";
import { container, goback, gobackText, headCont, inputCont, inputText, primHead, secHead, submitBtn, submitBtnCont } from "../AuthCss";
import Logo from "../../../components/Logo";

const SetUserName = ({ navigation, route }) => {
  const { email } = route.params;
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [loading, setIsLoading] = useState(false);
  async function handleSubmit() {
    try {
      setIsLoading(true);
      const res = await axiosClient.post("/auth/changeusername", {
        username,
        email,
      });

      if (res.status != "ok") {
        alert(res.result);
        return;
      }

      navigation.navigate("SetPassword", { username, email, name });
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <View style={container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Signup")}
        style={goback}
      >
        <MaterialIcons name="arrow-back-ios" size={20} color="gray" />
        <Text style={gobackText}>Go Back</Text>
      </TouchableOpacity>

      <View style={headCont}>
        <Logo/>
        
        <Text style={secHead}>Choose a name and Username</Text>
      </View>
      <View style={inputCont}>
        <TextInput
          placeholder="Enter a username"
          style={inputText}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          placeholder="Enter a name"
          style={inputText}
          onChangeText={(text) => setName(text)}
        />
      </View>
     
      <Pressable onPress={handleSubmit} style={submitBtnCont}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Text
            style={submitBtn}
          >
            Next
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default SetUserName;

