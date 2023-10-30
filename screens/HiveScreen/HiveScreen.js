import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { axiosClient } from "../../utils/axiosSetup";

const HiveScreen = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [visibility, setVis] = useState();

  async function handleSubmit() {
    const res = await axiosClient.post("/hive/create", {
      name,
      description,
      visibility,
    });
    alert(res.result);
  }

  return (
    <SafeAreaView>
      <TextInput
        value={name}
        onChangeText={(e) => setName(e)}
        placeholder="name"
      />
      <TextInput
        value={description}
        onChangeText={(e) => setDescription(e)}
        placeholder="des"
      />
      <TextInput
        value={visibility}
        onChangeText={(e) => setVis(e)}
        placeholder="vis"
      />

      <TouchableOpacity onPress={handleSubmit}>
        <Text>Create</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HiveScreen;
