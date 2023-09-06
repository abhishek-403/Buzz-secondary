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
import { axiosClient } from "../../utils/axiosSetup";

const MAX_CHARACTER_LIMIT = 60;

const AddScreen = () => {
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");

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
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 3],
        quality: 1,
        allowsEditing: true,
      });
      console.log(result);
      if (!result.canceled) {
        console.log(result);
        if (result.assets.length == 0) {
          return;
        }
        setImages(
          result?.assets?.map((item) => ({
            uri: item?.uri,
          }))
        );
      }

      // result?.assets?.map((file) => {
      //   const fileReader = new FileReader();
      //   fileReader.readAsDataURL(file.uri);
      //   fileReader.onload = () => {
      //     if (fileReader.readyState === fileReader.DONE) {
      //       // setImg(fileReader.result);
      //       allImages.push(fileReader.result);
      //     }
      //   };
      // });
    } catch (e) {
      console.log(e);
    }
  }

  const handleTextChange = (inputText) => {
    if (inputText.length <= MAX_CHARACTER_LIMIT) {
      setMessage(inputText);
    } else {
      return;
    }
  };

  async function handleSubmit() {
    try {
      if (images.length == 0 && message === "") {
        return;
      }
      if (images.length > 0) {
        const formData = new FormData();
        formData.append("images", {
          uri: images[0].uri,
          name: `image.jpg`,
          type: "image/jpeg",
        });

        formData.append("message", message);
        formData.append("upload_preset", "Buzz-preset");
        const res = await axiosClient.post("/post/create", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        alert(res.result);
        setMessage("");
        setImages([]);
      } else if (message !== "") {
        const res = await axiosClient.post("/post/createtextpost", {
          message,
        });
        alert(res.result);
        setMessage("");
        setImages([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView
      initialValues={{ message: "", imageUrl: "" }}
     
      style={styles.container}
    >
      <View>
        <TextInput
          style={styles.textArea}
          multiline
          value={message}
          onChangeText={handleTextChange}
          placeholder="Enter your text here..."
          placeholderTextColor="rgba(255,255,255,.5)"
        ></TextInput>
        <Text style={styles.wordLimitText}>
          {message.length}/{MAX_CHARACTER_LIMIT} characters
        </Text>
      </View>

      <View style={styles.imageIcon}>
        <Pressable onPress={handleImageUpload}>
          <Text>
            <Ionicons name="image" size={34} color="white" />
          </Text>
        </Pressable>

        <ScrollView contentContainerStyle={styles.imageContainer}>
          {images?.map(
            (image, index) =>
              images.length > 0 && (
                <Image
                  source={{ uri: image?.uri }}
                  style={{
                    width: "100%",
                    aspectRatio: 1,
                  }}
                  resizeMode="contain"
                  key={index}
                />
              )
          )}
          <Pressable onPress={handleSubmit} style={{ width: "60%" }}>
            <Text
              style={{
                color: "white",
                backgroundColor: "grey",
                fontSize: 24,
                textAlign: "center",
              }}
            >
              Submit
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.9)",
    paddingHorizontal: 15,
  },
  textArea: {
    marginVertical: 10,
    borderColor: "rgba(255,255,255,0.1)",
    borderWidth: 1,
    padding: 12,
    color: "white",
    fontSize: 16,
    borderRadius:20,
  },
  wordLimitText: {
    margin: 8,
    fontSize: 14,
    color: "gray",
  },

  imageIcon: {
    flex: 1,
    margin: 20,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
export default AddScreen;
