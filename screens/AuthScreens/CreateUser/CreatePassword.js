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
import {
  containerFull,
  formHead2,
  formInput,
  formbtn,
  goback,
} from "./CommonCss";

const CreatePassword = ({navigation}) => {
    // const { email, username } = route.params;
    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
    const [loading, setLoading] = useState(false)

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

      <View style={{ gap: 10, width: "100%", alignItems: "center" }}>
        <Text style={formHead2}>Choose a strong password</Text>
        <TextInput
          placeholder="Enter password"
          style={formInput}
          secureTextEntry
          onChangeText={(text) => setpassword(text)}
        />
        <TextInput
          placeholder="Confirm password"
          style={formInput}
          secureTextEntry
          onChangeText={(text) => setconfirmpassword(text)}
        />

        {/* {loading ? (
          <ActivityIndicator />
        ) : (
        )} */}
        <View style={formbtn}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              padding: 10,
            }}
            onPress={() => navigation.navigate("SetUserName")}
          >
            Next
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CreatePassword;
