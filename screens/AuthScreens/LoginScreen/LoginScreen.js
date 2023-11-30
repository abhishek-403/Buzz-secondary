import {
  ActivityIndicator,
  Alert,
  BackHandler,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { axiosClient } from "../../../utils/axiosSetup";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  container,
  headCont,
  inputCont,
  inputText,
  primHead,
  signupLoginBtn,
  submitBtn,
  submitBtnCont,
} from "../AuthCss";
import Logo from "../../../components/Logo";
import { useFocusEffect } from "@react-navigation/native";

const LoginScreen = ({ navigation }) => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert("Hold on!", "Are you sure you want to exit app?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
          { text: "YES", onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );
  async function handleSubmit() {
    try {
      setIsLoading(true);
      const res = await axiosClient.post("/auth/login", {
        email,
        password,
      });

      await AsyncStorage.setItem("accessToken", res.result.accessToken);

      alert("Logged in");
      navigation.navigate("AppStack", {
        screen: "Home",
        param: { screen: "HomeScreen" },
      });
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SafeAreaView style={container}>
      <View style={headCont}>
        <Logo />
        <Text style={primHead}>Login</Text>
      </View>

      <View style={inputCont}>
        <TextInput
          placeholder="Email"
          placeholderTextColor={"rgba(0,0,0,.3)"}
          onChangeText={(t) => setEmail(t)}
          value={email}
          style={inputText}
        ></TextInput>
        <TextInput
          placeholder="Password"
          secureTextEntry
          placeholderTextColor={"rgba(0,0,0,.3)"}
          onChangeText={(t) => setPassword(t)}
          value={password}
          style={inputText}
        ></TextInput>
      </View>

      <Pressable onPress={handleSubmit} style={submitBtnCont}>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Text style={submitBtn}>Submit</Text>
        )}
      </Pressable>
      <View>
        <Text
          onPress={() => navigation.navigate("EnterForgetPassEmail")}
          style={{ fontSize: 13, color: "rgba(255,255,255,.6)" }}
        >
          Forgot Password?
        </Text>
      </View>
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "rgba(255,255,255,.3)",
          marginVertical: 10,
        }}
      />
      <View style={{ flexDirection: "row", gap: 3 }}>
        <Text style={{ color: "rgba(255,255,255,.4)", fontSize: 13 }}>
          Don't have an account?{" "}
        </Text>

        <Text
          onPress={() => navigation.navigate("Signup")}
          style={signupLoginBtn}
        >
          Signup
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
