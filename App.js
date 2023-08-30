import { StyleSheet } from "react-native";
import BottomNav from "./components/BottomNav";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import LoginScreen from "./screens/AuthScreens/LoginScreen";
import SignupScreen from "./screens/AuthScreens/CreateUser/SignupScreen";
import SetUserName from "./screens/AuthScreens/CreateUser/SetUserName";
import VerifyEmail from "./screens/AuthScreens/CreateUser/VerifyEmail";
import CreatePassword from "./screens/AuthScreens/CreateUser/CreatePassword";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import SearchScreen from "./screens/SearchScreen/SearchScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const LoggedInNav = () => {
  const isActive = true;
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,

          tabBarStyle: {
            backgroundColor: "rgba(0,0,0,1)",
            borderColor:'rgba(255,255,255,.2)',
            height: 60,
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
            return <Ionicons name={iconName} color={"white"} size={34} />;
          },
        })}
      >
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Create" component={CreatePostScreen} />

        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </>
  );
};
const AuthNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      <Stack.Screen name="CreatePassword" component={CreatePassword} />
      <Stack.Screen name="SetUserName" component={SetUserName} />
    </Stack.Navigator>
  );
};

export default function App() {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animationEnabled: true }}
      >
        {isLoggedIn ? (
          <Stack.Screen name="LoggedIn" component={LoggedInNav} />
        ) : (
          <Stack.Screen name="NotLoggedIn" component={AuthNav} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
