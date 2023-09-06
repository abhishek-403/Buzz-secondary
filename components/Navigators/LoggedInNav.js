import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import SearchScreen from "../../screens/SearchScreen/SearchScreen";
import CreatePostScreen from "../../screens/CreatePostScreen";
import ProfileScreen from "../../screens/ProfileScreen/ProfileScreen";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();


export default LoggedInNav = () => {
    return (
      <>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
  
            tabBarStyle: {
              backgroundColor: "rgba(0,0,0,1)",
              borderColor: "rgba(0,0,0,.5)",
              height: 50,
            },
  
            tabBarItemStyle: {
              color: "white",
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              switch (route.name) {
                case "Home":
                  iconName = `${focused ? "home" : "home-outline"}`;
                  break;
                case "Create":
                  iconName = `${focused ? "create" : "create-outline"}`;
                  break;
                case "Search":
                  iconName = `${focused ? "search" : "search-outline"}`;
                  break;
                case "Profile":
                  iconName = `${
                    focused ? "person-circle" : "person-circle-outline"
                  }`;
                  break;
  
                default:
                  break;
              }
              return <Ionicons name={iconName} color={"white"} size={28} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Create" component={CreatePostScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </>
    );
  };