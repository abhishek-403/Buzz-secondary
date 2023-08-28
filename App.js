import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CreatePostScreen from "./screens/CreatePostScreen";
import BottomNav from "./components/BottomNav";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/AuthScreens/LoginScreen";
import SignupScreen from "./screens/AuthScreens/CreateUser/SignupScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

const LoggedInNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
const AuthNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  const isLoggedIn = false;
  return (
    // <SafeAreaView style={styles.container}>
    //   {/* <HomeScreen /> */}
    //   <CreatePostScreen />
    //   <BottomNav />
    // </SafeAreaView>

    <NavigationContainer>
      <Stack.Navigator 
         screenOptions={{ headerShown: false,animation:"slide_from_right" }}>
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
