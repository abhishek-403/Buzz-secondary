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

  const item = {
    _id: "64f6bd7e921bb1b8ae6a251d",
    message:
      "To set the font weight of text in your Expo app, you can use the fontWeight property in the styles of your text components. The fontWeight property allows you to specify the thickness or weight of the text characters. Here's how you can use it",
    images: [
      {
        url: "https://res.cloudinary.com/dyqzaxyqw/image/upload/v1693891975/Postpics/j1fg6ehovgq0fnojh11z.jpg",
        _id: "64f6bd7e921bb1b8ae6a251e",
      },
    ],
    owner: {
      _id: "64f44b4b08507abef9341ac2",
      name: "Abhishek Sharma",
      username: "@abhishek1",
      avatar: "",
    },
    likesCount: 1,
    commentsCount: 0,
    viewsCount: 0,
    shareCount: 0,
    isLiked: true,
    timeAgo: "9 hours ago",
  };

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
