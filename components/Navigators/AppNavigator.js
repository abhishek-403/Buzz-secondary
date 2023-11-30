import { createStackNavigator } from "@react-navigation/stack";
import CreateNewPassword from "../../screens/AuthScreens/ForgetPassword/CreateNewPassword";
import VerifyCode from "../../screens/AuthScreens/ForgetPassword/VerifyCode";
import EnterEmail from "../../screens/AuthScreens/ForgetPassword/EnterEmail";
import SignupScreen from "../../screens/AuthScreens/CreateUser/SignupScreen";
import VerifyEmail from "../../screens/AuthScreens/CreateUser/VerifyEmail";
import SetUserName from "../../screens/AuthScreens/CreateUser/SetUserName";
import LoginScreen from "../../screens/AuthScreens/LoginScreen/LoginScreen";
import SetPassword from "../../screens/AuthScreens/CreateUser/SetPassword";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import SearchScreen from "../../screens/SearchScreen/SearchScreen";
import CreatePostScreen from "../../screens/CreatePostScreen/CreatePostScreen";
import ProfileScreen from "../../screens/ProfileScreen/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useLayoutEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import EditProfile from "../../screens/ProfileScreen/EditProfile";
import UserProfileScreen from "../../screens/UserProfileScreen/UserProfileScreen";
import CreateHiveScreen from "../../screens/HiveScreen/CreateHiveScreen";
import HiveInfoScreen from "../../screens/HiveScreen/HiveInfoScreen";
import AddUserToHive from "../../screens/HiveScreen/AddUserToHive";
import { Text } from "react-native";
import CommentOnPost from "../../screens/HomeScreen/CommentOnPost";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function AppNavigator() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    AsyncStorage.getItem("accessToken")
      .then((accessToken) => {
        console.log("app", accessToken);
        if (accessToken) {
          navigation.navigate("AppStack");
        } else {
          navigation.navigate("AuthStack");
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { display: "none" },
        headerShown: false,
      }}
    >
      <Tab.Screen name="AppStack" component={AppStack} />
      <Tab.Screen name="AuthStack" component={AuthStack} />
    </Tab.Navigator>
  );
}

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      <Stack.Screen name="SetUserName" component={SetUserName} />
      <Stack.Screen name="SetPassword" component={SetPassword} />
      <Stack.Screen name="CreatePassword" component={CreateNewPassword} />
      <Stack.Screen name="EnterForgetPassEmail" component={EnterEmail} />
      <Stack.Screen name="VerifyForgetPassCode" component={VerifyCode} />
      <Stack.Screen name="ResetPassword" component={CreateNewPassword} />
    </Stack.Navigator>
  );
};

export const AppStack = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,

          tabBarStyle: {
            backgroundColor: "rgba(0,0,0,1)",
            borderTopColor: "rgba(255,255,255,.1)",
            height: 50,
          },

          tabBarItemStyle: {
            color: "white",
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name == "Hive") {
              return null;
            }

            switch (route.name) {
              case "Home":
                iconName = `${focused ? "home" : "home-outline"}`;
                break;
              case "Hive":
                // iconName = `${focused ? "create" : "create-outline"}`;

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

            return <Ionicons name={iconName} color={"white"} size={24} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreenStack} />
        <Tab.Screen name="Search" component={SearchScreenStack} />
        <Tab.Screen name="Create" component={CreatePostScreen} />
        <Tab.Screen name="Profile" component={ProfileScreenStack} />
      </Tab.Navigator>
    </>
  );
};

const HomeScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CommentOnPost" component={CommentOnPost} />
      
      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
    </Stack.Navigator>
  );
};

const ProfileScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="HiveInfo" component={HiveInfoScreen} />
      <Stack.Screen name="HiveSearch" component={AddUserToHive} />      
    </Stack.Navigator>
  );
};

const SearchScreenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarStyle: {
          display: "none",
        },
        headerShown: false,
      }}
      initialRouteName="SearchScreen"
    >
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
    </Stack.Navigator>
  );
};
