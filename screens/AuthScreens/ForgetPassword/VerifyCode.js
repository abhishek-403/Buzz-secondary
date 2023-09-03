import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  containerFull,
  formHead2,
  formInput,
  formbtn,
  goback,
} from "./CommonCss";
const VerifyCode = ({navigation,route}) => {
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
    <View style={containerFull}>
      

      {/* <Image source={logo} style={logo1} /> */}

      <View style={{ gap: 30, width: "100%", alignItems: "center" }}>
        <Text style={formHead2}>
          A verification code has been sent to your email
        </Text>
        <TextInput
          placeholder="Enter 6-Digit Code here"
          style={formInput}
          onChangeText={(text) => setVerificationCode(text)}
        />

        <View style={formbtn}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              padding: 10,
            }}
            onPress={handleSubmit}
          >
            Next
          </Text>
        </View>
      </View>
    </View>
  );
};

export default VerifyCode;
