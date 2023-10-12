import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { useState } from "react";

import { axiosClient } from "../../../utils/axiosSetup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  container,
  headCont,
  inputCont,
  inputText,
  secHead,
  submitBtn,
  submitBtnCont,
} from "../AuthCss";
import Logo from "../../../components/Logo";
const SetPassword = ({ navigation, route }) => {
  const { email, username, name } = route.params;
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const [loading, setIsLoading] = useState(false);

  async function handleSubmit() {
    if (confirmpassword == "" || password == "") {
      alert("Passwords required");
      return;
    }
    if (confirmpassword != password) {
      alert("Passwords donot match");
      return;
    }

    try {
      setIsLoading(true);

      const user = await axiosClient.post("/auth/signup", {
        email,
        username,
        name,
        password,
      });

      await AsyncStorage.setItem("accessToken", user.result.accessToken);

      alert("Profile created");
      navigation.navigate("AppStack");
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={container}>
      <View style={headCont}>
        <Logo />
        <Text style={secHead}>Choose a strong password</Text>
      </View>
      <View style={inputCont}>
        <TextInput
          placeholder="Enter password"
          style={inputText}
          secureTextEntry
          autoFocus
          onChangeText={(text) => setpassword(text)}
        />
        <TextInput
          placeholder="Confirm password"
          style={inputText}
          secureTextEntry
          onChangeText={(text) => setconfirmpassword(text)}
        />
      </View>
      <Pressable onPress={handleSubmit} style={submitBtnCont}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Text style={submitBtn}>Submit</Text>
        )}
      </Pressable>
    </View>
  );
};

export default SetPassword;
