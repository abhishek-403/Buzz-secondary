import { createStackNavigator } from "@react-navigation/stack";
import CreateNewPassword from "../../screens/AuthScreens/ForgetPassword/CreateNewPassword";
import VerifyCode from "../../screens/AuthScreens/ForgetPassword/VerifyCode";
import EnterEmail from "../../screens/AuthScreens/ForgetPassword/EnterEmail";
import SignupScreen from "../../screens/AuthScreens/CreateUser/SignupScreen";
import VerifyEmail from "../../screens/AuthScreens/CreateUser/VerifyEmail";
import SetUserName from "../../screens/AuthScreens/CreateUser/SetUserName";
import LoginScreen from "../../screens/AuthScreens/LoginScreen";

const Stack = createStackNavigator()
export default AuthNav = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
        <Stack.Screen name="CreatePassword" component={CreateNewPassword} />
        <Stack.Screen name="SetUserName" component={SetUserName} />
        <Stack.Screen name="EnterForgetPassEmail" component={EnterEmail} />
        <Stack.Screen name="VerifyForgetPassCode" component={VerifyCode} />
        <Stack.Screen name="ResetPassword" component={CreateNewPassword} />
      </Stack.Navigator>
    );
  };