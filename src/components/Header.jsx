import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
// import {
//   useFonts,
//   Roboto_100Thin,
//   Roboto_100Thin_Italic,
//   Roboto_300Light,
//   Roboto_300Light_Italic,
//   Roboto_400Regular,
//   Roboto_400Regular_Italic,
//   Roboto_500Medium,
//   Roboto_500Medium_Italic,
//   Roboto_700Bold,
//   Roboto_700Bold_Italic,
//   Roboto_900Black,
//   Roboto_900Black_Italic,
// } from "@expo-google-fonts/roboto";

export default function Header({ title }) {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular: require("../../assets/fonts/Roboto-Regular.ttf"),
    Roboto_500Medium: require("../../assets/fonts/Roboto-Medium.ttf"),
    Roboto_700Bold: require("../../assets/fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    alignItems: "center",
  },
  text: {
    height: 36,
    justifyContent: "center",
    textAlign: "center",
    marginTop: 72,
    marginBottom: 16,
    fontSize: 30,
    fontFamily: "Roboto_500Medium",
    // lineHeight: 1.2,
  },
});
