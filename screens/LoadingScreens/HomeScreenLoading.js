import { View, Text,Image } from "react-native";
import React from "react";
import loader from '../../assets/activity.gif'
import { loaderCont, loaderStyle } from "./LoadingCss";
const HomeScreenLoading = () => {
  return (
    <View style={loaderCont}>
      
      <Image source={loader} style={loaderStyle}/>
    </View>
  );
};

export default HomeScreenLoading;
