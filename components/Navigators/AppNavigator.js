import { createStackNavigator } from "@react-navigation/stack";
import CreateNewPassword from "../../screens/AuthScreens/ForgetPassword/CreateNewPassword";
import VerifyCode from "../../screens/AuthScreens/ForgetPassword/VerifyCode";
import EnterEmail from "../../screens/AuthScreens/ForgetPassword/EnterEmail";
import SignupScreen from "../../screens/AuthScreens/CreateUser/SignupScreen";
import VerifyEmail from "../../screens/AuthScreens/CreateUser/VerifyEmail";
import SetUserName from "../../screens/AuthScreens/CreateUser/SetUserName";
import LoginScreen from "../../screens/AuthScreens/LoginScreen";
import SetPassword from "../../screens/AuthScreens/CreateUser/SetPassword";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import SearchScreen from "../../screens/SearchScreen/SearchScreen";
import CreatePostScreen from "../../screens/CreatePostScreen";
import ProfileScreen from "../../screens/ProfileScreen/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import EditProfile from "../../screens/ProfileScreen/EditProfile";

const Stack = createStackNavigator();
export default function AppNavigator() {
    
    const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("accessToken")
      .then((accessToken) => {
        console.log("app", accessToken);
        setIsLoading(false);
        if (accessToken) {
          navigation.navigate("LoggedIn");
        } else {
          navigation.navigate("NotLoggedIn");
        }
      })
      .catch((error) => console.error(error));
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animationEnabled: true }}
    >
      <Stack.Screen name="NotLoggedIn" component={AuthNav} />

      <Stack.Screen name="LoggedIn" component={LoggedInNav} />
    </Stack.Navigator>
  );
}

export const AuthNav = () => {
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

const Tab = createBottomTabNavigator();

export const LoggedInNav = () => {
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
              case "Edit":
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
        <Tab.Screen name="Edit" component={EditProfile} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Create" component={CreatePostScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </>
  );
};
