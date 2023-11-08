import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityBase,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { axiosClient } from "../../utils/axiosSetup";

const CreateHiveScreen = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [loading, setIsLoading] = useState(false);
  const [visibility, setVis] = useState();

  async function handleSubmit() {
    try {
      setIsLoading(true)
      const res = await axiosClient.post("/hive/create", {
        name,
        description,
        visibility,
      });
      alert(res.result);
      
    } catch (e) {
      console.log(e);
      
    }finally{
      
      setIsLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <View></View>
        <View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: 700 }}>
            Create Hive
          </Text>
        </View>
        <View></View>
      </View>
      <View style={styles.subCont}>
        <TextInput
          value={name}
          onChangeText={(e) => setName(e)}
          style={styles.textArea}
          placeholder="Enter your hive name"
          placeholderTextColor="rgba(255,255,255,.5)"
        />
        <TextInput
          value={description}
          onChangeText={(e) => setDescription(e)}
          style={styles.textArea}
          placeholder="Enter your hive description (optional)"
          placeholderTextColor="rgba(255,255,255,.5)"
        />
        <TextInput
          value={visibility}
          onChangeText={(e) => setVis(e)}
          style={styles.textArea}
          placeholder="Visibility"
          placeholderTextColor="rgba(255,255,255,.5)"
        />
      </View>

      <TouchableOpacity
            onPress={handleSubmit}
            style={{ width: "50%", marginVertical: 30,marginHorizontal:20 }}
          >
            {loading ? (
              <ActivityIndicator size="large" />
            ) : (
              <Text
                style={{
                  color: "white",
                  backgroundColor: "black",
                  borderWidth: 1,
                  borderColor: "white",
                  borderRadius: 20,
                  fontSize: 20,
                  textAlign: "center",
                  padding: 8,
                  
                }}
              >
                Create
              </Text>
            )}
          </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "rgba(0,0,0,1)",
  },
  subCont: {
    marginTop:20,
    gap:15,
    paddingHorizontal: 15,

  },
  head: {
    backgroundColor: "rgba(0,0,0,1)",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    height: 70,
  },
  textArea: {
    borderColor: "rgba(255,255,255,0.4)",
    borderWidth: 1,
    padding: 12,
    color: "white",
    fontSize: 16,
    borderRadius: 10,
  },
});
export default CreateHiveScreen;
