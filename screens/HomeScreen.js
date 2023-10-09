import React, { useEffect, useLayoutEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import Header from "../components/home/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import SubHeader from "../components/home/SubHeader";
import Feeds from "../components/home/Feeds";
import { useDispatch, useSelector } from "react-redux";
import appConfigSlice, { getFeedData } from "../redux/slices/appConfigSlice";
import { useFocusEffect } from "@react-navigation/native";
import HomeScreenLoading from "./LoadingScreens/HomeScreenLoading";
import Posts from "../components/home/Posts";


const ITEMS_PER_PAGE=10;
const HomeScreen = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((s) => s.appConfigReducer.isLoading);
  // useFocusEffect(
  //   React.useCallback(() => {
  //     dispatch(getFeedData());
  //   }, [])
  // );
  const [page, setPage] = useState(1);
  const reduxData = useSelector((s) => s.appConfigReducer.feedData);

  useEffect(() => {
    dispatch(getFeedData({page,pageSize:ITEMS_PER_PAGE}))
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SubHeader />
      <FlatList
        data={reduxData}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => <Posts post={item} />}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={isLoading?<HomeScreenLoading /> :null}
      />
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
