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
  Text,
  View,
} from "react-native";
import Header from "../../components/home/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import SubHeader from "../../components/home/SubHeader";
import { useDispatch, useSelector } from "react-redux";
import { getFeedData } from "../../redux/slices/appConfigSlice";

import HomeScreenLoading from "../LoadingScreens/HomeScreenLoading";
import Posts from "../../components/home/Posts";
import socketServcies from "../../utils/socketService";
import { useFocusEffect } from "@react-navigation/native";

const ITEMS_PER_PAGE = 15;

const HomeScreen = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((s) => s.appConfigReducer.isLoading);
  const reduxData = useSelector((s) => s.appConfigReducer.feedData);

  const [tweets, setTweets] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getFeedData());
    }, [])
  );

  // const [page, setPage] = useState(1);
  // useEffect(() => {
  //   console.log("firr");
  //   dispatch(getFeedData({ page, pageSize: ITEMS_PER_PAGE }));
  // }, [dispatch,page]);

  // const handleLoadMore = () => {
  //   setPage(page + 1);
  // };

  // useEffect(() => {
  //   socketServcies.initializeSocket()
  // }, []);

  // useEffect(() => {
  //   socketServcies.on('newTweet',(post)=>{
  //     console.log("hi");
  //     setTweets((prev)=>[...prev,post])
  //   })

  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SubHeader />

      {/* <FlatList
        data={tweets}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => <Posts post={item} />}
       
      /> */}
      {/* <ScrollView>
        {tweets.map((item, i) => {
          return (
            <Posts key={i} post={item} />
          );
        })}
      </ScrollView> */}
      <FlatList
        data={reduxData}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => <Posts post={item} />}
        // onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={isLoading ? <HomeScreenLoading /> : null}
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
