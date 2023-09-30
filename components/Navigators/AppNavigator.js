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
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import EditProfile from "../../screens/ProfileScreen/EditProfile";
import HomeScreenLoading from "../../screens/LoadingScreens/HomeScreenLoading";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function AppNavigator() {
  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem("accessToken")
      .then((accessToken) => {
        console.log("app", accessToken);
        if (accessToken) {
          navigation.navigate("LoggedIn");
        } else {
          navigation.navigate("NotLoggedIn");
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { display: "none" },
        headerShown: false,
        animationEnabled: true,
      }}
    >
      <Tab.Screen name="LoggedIn" component={LoggedInNav} />
      <Tab.Screen name="NotLoggedIn" component={AuthNav} />
    </Tab.Navigator>
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

              default:
                break;
            }
            return <Ionicons name={iconName} color={"white"} size={28} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* <Tab.Screen name="Home" component={HomeScreenLoading} /> */}
        {/* <Tab.Screen name="EditProfile" component={EditProfile} /> */}
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Create" component={CreatePostScreen} />
        <Tab.Screen name="Profile" component={ProfileScreenStack} />
      </Tab.Navigator>
    </>
  );
};

const ProfileScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};
