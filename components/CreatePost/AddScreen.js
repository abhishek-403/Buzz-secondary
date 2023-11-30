import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native";
import { axiosClient } from "../../utils/axiosSetup";
import { SafeAreaView } from "react-native-safe-area-context";
const MAX_CHARACTER_LIMIT = 120;

const AddScreen = () => {
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setIsLoading] = useState(false);
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
        aspect: [5,4],
        quality: 1,
        allowsEditing: true,
      });
      if (!result.canceled) {
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
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View keyboardShouldPersistTaps="never" style={styles.container}>
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
          <Ionicons name="image" size={34} color="white" />
        </Pressable>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={handleSubmit}>
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <Text
              style={{
                color: "white",
                backgroundColor: "rgba(127, 112, 255, 0.8)",
                borderWidth: 1,
                borderRadius: 50,
                fontWeight: 700,
                fontSize: 20,
                textAlign: "center",
                paddingVertical: 10,
                paddingHorizontal: 30,
              }}
            >
              Post
            </Text>
          )}
        </TouchableOpacity>
      </View>
      {images.length > 0 && (
        <TouchableOpacity
          onPress={() => {
            setImages([]);
          }}
          style={{ alignItems: "flex-end" }}
        >
          <Ionicons
            name="trash"
            size={25}
            color="white"
            style={{ height: 30 }}
          />
        </TouchableOpacity>
      )}
      <ScrollView contentContainerStyle={styles.imageContainer}>
        {images?.map(
          (image, index) =>
            images.length > 0 && (
              <Image
                source={{ uri: image?.uri }}
                style={{
                  width: "100%",
                  aspectRatio: 5/4,
                }}
                resizeMode="contain"
                key={index}
              />
            )
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.9)",
    paddingHorizontal: 15,
  },
  textArea: {
    borderWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.4)",
    padding: 12,
    color: "white",
    fontSize: 16,
  },
  wordLimitText: {
    margin: 8,
    fontSize: 14,
    color: "gray",
  },

  imageIcon: {
    margin: 20,
    width: 40,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
export default AddScreen;
