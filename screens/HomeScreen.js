import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import Header from "../components/home/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import SubHeader from "../components/home/SubHeader";
import Feeds from "../components/home/Feeds";
import { useDispatch, useSelector } from "react-redux";
import appConfigSlice, { getFeedData } from "../redux/slices/appConfigSlice";
import { useFocusEffect } from "@react-navigation/native";
import HomeScreenLoading from "./LoadingScreens/HomeScreenLoading";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((s) => s.appConfigReducer.isLoading);
  useFocusEffect(
    React.useCallback(() => {
      dispatch(getFeedData());
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SubHeader />
      {isLoading ? <HomeScreenLoading /> : <Feeds />}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "rgba(0,0,0,.9)",
  },
});
export default HomeScreen;
