import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import { useSelector } from "react-redux";
const Feeds = () => {
  const [data, setData] = useState();
  const reduxData = useSelector((s) => s.appConfigReducer.feedData);
  useEffect(() => {
    setData(reduxData);
  }, [reduxData]);

 

  return (
    <ScrollView>
      {/* <Posts post ={item}/>
      <Posts post ={item}/> */}
      {data?.map((item, i) => {
        return <Posts key={i} post={item} />;
      })}
    </ScrollView>
  );
};

export default Feeds;
