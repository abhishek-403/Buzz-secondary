import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { containerFull, formHead2, formInput, formbtn, goback } from "./CommonCss";

const VerifyEmail = ({ navigation }) => {
  const [verificationCode, setVerificationCode] = useState();
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
        <Text style={formHead2}>A verification code has been sent to your email</Text>
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
            onPress={() => navigation.navigate("CreatePassword")}
          >
            Next
          </Text>
        </View>
      </View>
    </View>
  );
};

export default VerifyEmail;
