import * as React from "react";
import { StyleSheet, View } from "react-native";

export default function HomeIndicator() {
  return (
    <View style={styles.container}>
      <View style={styles.indicator}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 34,
    justifyContent: "flex-end",
    alignItems: "center",
    // marginBottom: 18,
    paddingBottom: 5,
  },
  indicator: {
    width: 134,
    height: 5,
    // alignItems: "center",
    // justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "black",
    // paddingBottom: 21,
    // marginBottom: 0,
  },
});
