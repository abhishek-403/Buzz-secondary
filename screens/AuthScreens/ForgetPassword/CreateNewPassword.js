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
const CreateNewPassword = ({ route }) => {
  const { email } = route.params;
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
      const res = await axiosClient.post("/auth/resetpassword", {
        email,
        password,
      });

      console.log({ email, password });
      alert("Password changed successfully!");
      navigation.navigate("AuthStack");
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
          autoFocus
          onChangeText={(text) => setpassword(text)}
        />
        <TextInput
          placeholder="Confirm password"
          style={inputText}
          onChangeText={(text) => setconfirmpassword(text)}
        />
      </View>
      <Pressable onPress={handleSubmit} style={submitBtnCont}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Text style={submitBtn}>Next</Text>
        )}
      </Pressable>
    </View>
  );
};

export default CreateNewPassword;
