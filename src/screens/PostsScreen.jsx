import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function PostsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>PostsScreen!</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        {/* <ion-icon name="exit-outline"></ion-icon> */}
        {/* <View style={styles.button}>
          <Text style={styles.buttonText}>Exit</Text>
        </View> */}
      </TouchableOpacity>
    </View>
  );
}
