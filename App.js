import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider} from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "react-native-elements";
import AppNavigator from "./components/Navigators/AppNavigator";
import { REACT_APP_SERVER_URL } from "@env"


export const TOAST_SUCCESS = "toast_success";
export const TOAST_FAILURE = "toast_failure";




export default App = ({ navigation }) => {
  

  const environment = process.env.NODE_ENV
  const environment2 = REACT_APP_SERVER_URL
  console.log(environment);
  console.log(environment2);
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
