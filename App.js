import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider} from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "react-native-elements";
import {  useState } from "react";
import AppNavigator from "./components/Navigators/AppNavigator";
// LogBox.ignoreLogs(["Warning: ..."]);
// console.disableYellowBox = true;

const Stack = createStackNavigator();
const SignupStack = createStackNavigator();
const HomeStack = createStackNavigator();
export const TOAST_SUCCESS = "toast_success";
export const TOAST_FAILURE = "toast_failure";

export default App = ({ navigation }) => {

  return (
    <>
      <ThemeProvider theme={{ dark: false }}>
        <Provider store={store}>
          <NavigationContainer>
            {/* <Stack.Navigator
              screenOptions={{ headerShown: false, animationEnabled: true }}
            >
              <Stack.Screen name="NotLoggedIn" component={AuthNav} />

              <Stack.Screen name="LoggedIn" component={LoggedInNav} />
            </Stack.Navigator> */}

            <AppNavigator />
          </NavigationContainer>
        </Provider>
      </ThemeProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "primText",
  },
});
