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

const MAX_CHARACTER_LIMIT = 60;

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
        aspect: [4, 3],
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
    <ScrollView keyboardShouldPersistTaps='never' 
      initialValues={{ message: "", }}
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
         <View>

            <Ionicons name="image" size={34} color="white" />
         </View>
         
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
          <TouchableOpacity
            onPress={handleSubmit}
            style={{ width: "50%", marginVertical: 20 }}
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
                Submit
              </Text>
            )}
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.9)",
    paddingHorizontal: 15,
    paddingTop:10,
  },
  textArea: {
    borderColor: "rgba(255,255,255,0.4)",
    borderWidth: 1,
    padding: 12,
    color: "white",
    fontSize: 16,
    borderRadius: 10,
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
