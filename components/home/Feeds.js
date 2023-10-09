import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import { useDispatch, useSelector } from "react-redux";
import { getFeedData } from "../../redux/slices/appConfigSlice";


const ITEMS_PER_PAGE=10;

const Feeds = () => {

  const [page, setPage] = useState(1);

  // useFocusEffect(

  //   React.useCallback(() => {
  //     dispatch(getFeedData({page,pageSize:ITEMS_PER_PAGE}));
  //   }, [])
  // );
  const [data, setData] = useState();
  const reduxData = useSelector((s) => s.appConfigReducer.feedData);
  const dispatch= useDispatch()

  useEffect(() => {
    dispatch(getFeedData({page,pageSize:ITEMS_PER_PAGE}))
    setData(reduxData);
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  // useEffect(() => {
  //   
  // }, [reduxData]);
  

 

  return (
    // <ScrollView>
    //   
    //   
    //   {data?.map((item, i) => {
    //     return <Posts key={i} post={item} />;
    //   })}
    // </ScrollView>
    <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Posts key={i} post={item} />}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
      />
  );
};

export default Feeds;
