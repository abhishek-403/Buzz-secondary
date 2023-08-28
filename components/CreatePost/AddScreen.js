import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native";

const MAX_CHARACTER_LIMIT = 60;

const AddScreen = () => {
  const [images, setImages] = useState([]);
  const [text, setText] = useState("");

  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasPermission(galleryStatus.status === "granted");
    })();
  }, []);

  async function handleImageUpload() {
    try {
      // if (!hasPermission) {
      //   //   console.log("No access");
      //   }
        // async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
          // allowsMultipleSelection: true,
        });
        console.log(result);

        console.log(result.assets);
        setImages(result.assets);
      // }
    } catch (e) {
      console.log(e);
    }
  }

  const handleTextChange = (inputText) => {
    if (inputText.length <= MAX_CHARACTER_LIMIT) {
      setText(inputText);
    } else {
      return;
    }
  };

  async function handlePost() {
    try {
      if (text === "" && images.length === 0) {
        return;
      }

      setText("");
      setImages([]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView
      initialValues={{ message: "", imageUrl: "" }}
      onSubmit={(value) => console.log(value)}
      style={styles.container}
    >
      <View>
        <TextInput
          style={styles.textArea}
          multiline
          value={text}
          onChangeText={handleTextChange}
          placeholder="Enter your text here..."
          placeholderTextColor="rgba(255,255,255,.1)"
        ></TextInput>
        <Text style={styles.wordLimitText}>
          {text.length}/{MAX_CHARACTER_LIMIT} characters
        </Text>
      </View>

      <View style={styles.imageIcon}>
        <Pressable onPress={handleImageUpload}>
          <Text>
            <Ionicons name="image" size={34} color="white" />
          </Text>
        </Pressable>

        <ScrollView contentContainerStyle={styles.imageContainer}>
          {images.map((image, index) => (
            <Image
              source={{ uri: image.uri }}
              style={{
                width: "100%",
                aspectRatio: 1,

                flex: 1 / 2,
              }}
              resizeMode="contain"
              key={index}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.9)",
    paddingHorizontal: 5,
  },
  textArea: {
    marginVertical: 10,
    marginHorizontal: 5,
    borderColor: "rgba(0,0,0,.5)",
    borderWidth: 1,
    fontSize: 16,
    padding: 10,
    color: "white",
    fontSize: 23,
  },
  wordLimitText: {
    marginTop: 8,
    fontSize: 14,
    color: "gray",
  },

  imageIcon: {
    margin: 20,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
export default AddScreen;
