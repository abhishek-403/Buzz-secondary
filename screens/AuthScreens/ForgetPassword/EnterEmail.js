import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { axiosClient } from "../../../utils/axiosSetup";
import { MaterialIcons } from "@expo/vector-icons";
import {
  container,
  goback,
  gobackText,
  headCont,
  inputCont,
  inputText,
  secHead,
  signupLoginBtn,
  submitBtn,
  submitBtnCont,
} from "../AuthCss";
import Logo from "../../../components/Logo";

const EnterEmail = ({ navigation, route }) => {
  const [email, setEmail] = useState("");

  const [loading, setIsLoading] = useState(false);
  async function handleSubmit() {
    try {
      if (email == "") {
        alert("Email required");
        return;
      }
      setIsLoading(true);
      const response = await axiosClient.post("/auth/forgetpassword", {
        email,
      });

      alert("Verification code sent to email");

      console.log({
        email: response.result.email,
        veriCode: response.result.veriCode,
      });

      navigation.navigate("VerifyForgetPassCode", {
        email: response.result.email,
        veriCode: response.result.veriCode,
      });
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <SafeAreaView style={container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={goback}
      >
        <MaterialIcons name="arrow-back-ios" size={20} color="gray" />
        <Text style={gobackText}>Go Back</Text>
      </TouchableOpacity>
      <View style={headCont}>
        <Logo />
        <Text style={secHead}>Verify Email</Text>
      </View>

      <View style={inputCont}>
        <TextInput
          placeholder="Enter Email"
          placeholderTextColor={"rgba(0,0,0,.3)"}
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoFocus
          style={inputText}
        ></TextInput>
      </View>

      <Pressable onPress={handleSubmit} style={submitBtnCont}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Text style={submitBtn}>Submit</Text>
        )}
      </Pressable>

      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "rgba(255,255,255,.3)",
        }}
      />
      <View style={{ flexDirection: "row", gap: 3 }}>
        <Text style={{ color: "rgba(255,255,255,.4)", fontSize: 13 }}>
          Already have an account?{" "}
        </Text>
        <Text
          onPress={() => navigation.navigate("Login")}
          style={signupLoginBtn}
        >
          Login
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default EnterEmail;
