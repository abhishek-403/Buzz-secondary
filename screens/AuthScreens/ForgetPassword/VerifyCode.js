import { ActivityIndicator, Pressable, Text, TextInput, View } from "react-native";
import React from "react";
import { useState } from "react";
import {
  containerFull,
  formHead2,
  formInput,
  formbtn,
  goback,
} from "./ForgetPassCss";
import { container, headCont, inputCont, inputText, primHead, secHead, submitBtn, submitBtnCont } from "../AuthCss";
import Logo from "../../../components/Logo";
const VerifyCode = ({ navigation, route }) => {
  const { email, veriCode } = route.params;
  const [verificationCode, setVerificationCode] = useState("");

  async function handleSubmit() {
    try {
      if (verificationCode === "") {
        alert("Invalid code");
        return;
      }
      if (verificationCode != veriCode) {
        alert("Code is incorrect");
        return;
      }
      navigation.navigate("ResetPassword", { email });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <View style={container}>
      <View style={headCont}>
        <Logo />
        <Text style={secHead}>
          A verification code has been sent to your email
        </Text>
      </View>
      <View style={inputCont}>
        <TextInput
          placeholder="Enter 6-Digit Code here"
          style={inputText}
          onChangeText={(text) => setVerificationCode(text)}
        />
      </View>

      <Pressable onPress={handleSubmit} style={submitBtnCont}>
        <Text
          style={submitBtn}
        >
          Submit
        </Text>
      </Pressable>
    </View>
  );
};

export default VerifyCode;
