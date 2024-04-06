import React, { useState } from "react";
import {
  Alert,
  StyleSheet
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TextPage } from "./TextPage";
import Header from "../../components/home/Header";
import AppModal from "../../components/modals";

const Tab = createMaterialTopTabNavigator();
const ITEMS_PER_PAGE = 15;

const HomeScreen = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {/* <SubHeader /> */}
      {/* <Tab.Navigator style={{}} className="bg-black text-white">
        <Tab.Screen name="Video" component={VideosPage} />
        <Tab.Screen name="Text" component={TextPage} />
      </Tab.Navigator> */}
      <TextPage />
      <AppModal />
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
