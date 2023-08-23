import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
      <BottomNav/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
