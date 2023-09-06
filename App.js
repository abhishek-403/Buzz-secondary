import {  StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "react-native-elements";
import LoggedInNav from "./components/Navigators/LoggedInNav";
import AuthNav from "./components/Navigators/AuthNav";
import {loadCustomFonts} from './utils/fontConfig'
import { useEffect, useState } from "react";
const Stack = createStackNavigator();
// LogBox.ignoreLogs(["Warning: ..."]);
// console.disableYellowBox = true;

export default function App() {
  const user = false;
  // useEffect(()=>{
  //   getStorage(KEY_ACCESS_TOKEN).then((item) => {
  //     user = item;
  //   });
  // },[])

  return (
    <ThemeProvider theme={{ dark: false }}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false, animationEnabled: true }}
          >
            {/* {user? null : <Stack.Screen name="NotLoggedIn" component={AuthNav} />} */}

            <Stack.Screen name="LoggedIn" component={LoggedInNav} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily:'primText'
  },
});
