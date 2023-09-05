import AsyncStorage from "@react-native-async-storage/async-storage";
export const KEY_ACCESS_TOKEN = "access_token";
export const USER_KEY = "userdata";

export async function getStorage(key) {
  try {
    const data = await AsyncStorage.getItem(key);

    return data;
  } catch (e) {
    console.log(e);
  }
}
export async function setStorage(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
    return;
  } catch (e) {
    console.log(e);
  }
}

export async function removeStorage(key) {
  await AsyncStorage.removeItem(key);
  return;
}
