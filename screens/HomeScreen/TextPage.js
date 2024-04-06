import { useFocusEffect } from "@react-navigation/native";
import { FlatList,  View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getFeedData } from "../../redux/slices/appConfigSlice";
import React from "react";
import Posts from "../../components/home/Posts";
import HomeScreenLoading from "../LoadingScreens/HomeScreenLoading";
import { SafeAreaView } from "react-native-safe-area-context";
export const TextPage = () => {
  const isLoading = useSelector((s) => s.appConfigReducer.isLoading);
  const reduxData = useSelector((s) => s.appConfigReducer.feedData);

  const dispatch = useDispatch();
  useFocusEffect(
    React.useCallback(() => {
      dispatch(getFeedData());
    }, [])
  );
  return (
      <FlatList
        data={reduxData}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => <Posts post={item} />}
        // onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={isLoading ? <HomeScreenLoading /> : null}
      />
  );
};
