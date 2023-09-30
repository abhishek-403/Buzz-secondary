import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { axiosClient } from "../../../utils/axiosSetup";
import { useSelector } from "react-redux";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [loading, setIsLoading] = useState(false);
  async function handleSubmit() {
    try {
      if (email == "") {
        alert("Email required");
        return;
      }
      setIsLoading(true);
      const response = await axiosClient.post("/auth/verifyemail", {
        email,
      });

      if (response.status != "ok") {
        alert(response.result);
        return;
      }

      console.log({
        email: response.result.email,
        veriCode: response.result.veriCode,
      });

      navigation.navigate("VerifyEmail", {
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
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <Text style={{ color: "white", fontSize: 38 }}>BuZZ</Text>
        <Text style={{ color: "white", fontSize: 34, fontWeight: 700 }}>
          Signup
        </Text>
      </View>

      <View
        style={{ alignItems: "center", gap: 10, paddingTop: 40, width: "100%" }}
      >
        <TextInput
          placeholder="Enter Email"
          placeholderTextColor={"rgba(0,0,0,.3)"}
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoFocus
          style={[styles.input, styles.email]}
        ></TextInput>
      </View>

      <Pressable onPress={handleSubmit} style={styles.btn}>
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
            Submit
          </Text>
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
        <Text style={{ color: "rgba(255,255,255,.4)", fontSize: 16 }}>
          Already have an account?{" "}
        </Text>
        <Text
          onPress={() => navigation.navigate("Login")}
          style={{
            color: "white",
            fontSize: 16,
            textDecorationLine: "underline",
          }}
        >
          Login
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,.9)",
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    gap: 30,
  },
  head: { alignItems: "center", gap: 10 },

  input: {
    backgroundColor: "rgba(255,255,255,1)",
    width: "80%",
    padding: 15,
    fontSize: 20,
    borderRadius: 20,
  },
  btn: {
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
