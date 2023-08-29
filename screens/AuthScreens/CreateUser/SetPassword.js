import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons';

const SetPassword = () => {
  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
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

      <Image source={logo} style={logo1} />
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
      <Text style={formbtn} onPress={() => handlePassword()}>
        Next
      </Text>
    </View>
  );
};

export default SetPassword;

const styles = StyleSheet.create({});
