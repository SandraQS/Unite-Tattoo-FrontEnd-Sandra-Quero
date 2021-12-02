import AsyncStorage from "@react-native-community/async-storage";

export const tokenStorage = async (keyToken: string, token: string) => {
  // console.log("KEY", keyToken);
  // console.log("TOKEN", token);
  try {
    const jsonToken = await JSON.stringify(token);
    if (jsonToken !== null) {
      await AsyncStorage.setItem(keyToken, jsonToken);
      return jsonToken;
    }
    // const tokensito = await AsyncStorage.setItem(
    //   keyToken,
    //   JSON.stringify(token)
    // );
    return await jsonToken;
    // console.log("Y AQUI QUE", jsonToken);
  } catch ({ message }) {
    return message;
  }
};

export const getData = async (keyToken: string) => {
  try {
    const userData = await AsyncStorage.getItem(keyToken);
    if (userData !== null) {
      return userData;
    }
  } catch ({ message }) {
    return message;
  }
};

export const removeStorage = async (keyToken: string) => {
  try {
    await AsyncStorage.removeItem(keyToken);
  } catch ({ message }) {
    return message;
  }
};
