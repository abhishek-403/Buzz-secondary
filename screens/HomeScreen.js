import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Header from "../components/home/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import SubHeader from "../components/home/SubHeader";
import Feeds from "../components/home/Feeds";
import { useDispatch } from "react-redux";
import { getFeedData } from "../redux/slices/appConfigSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeedData());
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SubHeader />

      <Feeds />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeScreen;
