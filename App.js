import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider} from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "react-native-elements";
import AppNavigator from "./components/Navigators/AppNavigator";
import socketServcies from "./utils/socketService";
import { useEffect } from "react";


export const TOAST_SUCCESS = "toast_success";
export const TOAST_FAILURE = "toast_failure";



export default App = ({ navigation }) => {
  

 
  return (
    <>
      <ThemeProvider theme={{ dark: false }}>
        <Provider store={store}>
          <NavigationContainer>
            

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
