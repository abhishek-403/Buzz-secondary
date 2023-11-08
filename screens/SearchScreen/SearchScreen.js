import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { container, textArea } from "./CommonCss";
import EachProfileCard from "./EachProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedUser } from "../../redux/slices/searchSlice";

const SearchScreen = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const seldata = useSelector((s) => s.searchReducer.userCards);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(seldata);
  }, [seldata]);
  async function handleTextChange(text) {
    setMessage(text);

    if (text === "") {
      setData([]);
      return;
    }
    dispatch(getSearchedUser({ name: text }));
  }
  return (
    <SafeAreaView keyboardShouldPersistTaps="always" style={container}>
      <View>
        <TextInput
          style={textArea}
          onChangeText={(text) => {
            handleTextChange(text);
          }}
          placeholder="Search"
          autoFocus
          value={message}
          placeholderTextColor="rgba(255,255,255,.6)"
        />
      </View>
      <ScrollView style={{ flex: 1 }}>
        {data?.map((item, i) => {
          return <EachProfileCard user={item} key={i} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
