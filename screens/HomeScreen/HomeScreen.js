import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Header from "../../components/home/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import SubHeader from "../../components/home/SubHeader";
import Feeds from "../../components/home/Feeds";
import { useDispatch, useSelector } from "react-redux";
import appConfigSlice, { getFeedData } from "../../redux/slices/appConfigSlice";
import { useFocusEffect } from "@react-navigation/native";
import HomeScreenLoading from "../LoadingScreens/HomeScreenLoading";
import Posts from "../../components/home/Posts";

const ITEMS_PER_PAGE = 4;
const HomeScreen = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((s) => s.appConfigReducer.isLoading);
  const reduxData = useSelector((s) => s.appConfigReducer.feedData);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     dispatch(getFeedData());
  //   }, [])
  // );
  const [page, setPage] = useState(1);

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
      {/* <ScrollView style={{flex:1}}>
        {reduxData?.map((item, i) => {
          return <Posts key={i} post={item} />;
        })}
      </ScrollView> */}
      <FlatList
        data={reduxData}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => <Posts post={item} />}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
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
