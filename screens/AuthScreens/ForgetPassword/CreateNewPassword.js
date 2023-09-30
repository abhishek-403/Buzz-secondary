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
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  containerFull,
  formHead2,
  formInput,
  formbtn,
  goback,
} from "./CommonCss";
import { axiosClient } from "../../../utils/axiosSetup";
import { useSelector } from "react-redux";
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
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={containerFull}>
      {/* <Image source={logo} style={logo1} /> */}

      <View style={{ gap: 10, width: "100%", alignItems: "center" }}>
        <Text style={formHead2}>Choose a strong password</Text>
        <TextInput
          placeholder="Enter password"
          style={formInput}
          secureTextEntry
          autoFocus
          onChangeText={(text) => setpassword(text)}
        />
        <TextInput
          placeholder="Confirm password"
          style={formInput}
          secureTextEntry
          onChangeText={(text) => setconfirmpassword(text)}
        />

        <Pressable onPress={handleSubmit} style={formbtn}>
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <Text
              style={{
                color: "white",
                fontSize: 20,
                padding: 10,
              }}
            >
              Next
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default CreateNewPassword;

const styles = StyleSheet.create({});
