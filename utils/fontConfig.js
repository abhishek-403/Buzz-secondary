import * as Font from 'expo-font';

async function loadCustomFonts() {
  await Font.loadAsync({
    'primText': require('../assets/fonts/MerriweatherSans-VariableFont_wght.ttf'),
    'postText': require('../assets/fonts/Rubik-VariableFont_wght.ttf'),
    'secText': require('../assets/fonts/Ubuntu-Regular.ttf'),
  });
}
export { loadCustomFonts };