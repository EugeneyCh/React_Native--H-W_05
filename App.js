// import * as React from "react";
// import {
//   ImageBackground,
//   StyleSheet,
//   TouchableWithoutFeedback,
//   Keyboard,
//   View,
//   Text,
//   Button,
// } from "react-native";
// import PhotoBG from "./images/PhotoBG.png";
// import "react-native-gesture-handler";
// import RegistrationScreen from "./src/screens/RegistrationScreen/RegistrationScreen";
// import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
// import { NavigationContainer } from "@react-navigation/native";
// // import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Home from "./src/screens/HomeScreen/Home";
// import { createStackNavigator } from "@react-navigation/stack";

// // const Tab = createBottomTabNavigator();

// // function MyTabs() {
// //   return (
// //     <Tab.Navigator>
// //       <Tab.Screen name="Home" component={Home} />
// //       <Tab.Screen name="Login" component={LoginScreen} />
// //       <Tab.Screen name="Registration" component={RegistrationScreen} />
// //     </Tab.Navigator>
// //   );
// // }

// const MainStack = createStackNavigator();

// export default function App() {
//   return (
//     // <TouchableWithoutFeedback
//     //   onPress={Keyboard.dismiss}
//     //   style={styles.container}
//     // >
//     //   <ImageBackground source={PhotoBG} style={styles.background}>
//     //     <MyTabs />
//     //   </ImageBackground>
//     // </TouchableWithoutFeedback>

//     <NavigationContainer>
//       <TouchableWithoutFeedback
//         onPress={Keyboard.dismiss}
//         style={styles.container}
//       >
//         <ImageBackground source={PhotoBG} style={styles.background}>
//           <MainStack.Navigator initialRouteName="Login">
//             <MainStack.Screen
//               name="Home"
//               component={Home}
//               options={{ title: "" }}
//             />
//             <MainStack.Screen
//               name="Login"
//               component={LoginScreen}
//               options={{ headerShown: false }}
//             />
//             <MainStack.Screen
//               name="Registration"
//               component={RegistrationScreen}
//               options={{ headerShown: false }}
//             />
//           </MainStack.Navigator>
//         </ImageBackground>
//       </TouchableWithoutFeedback>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // flexDirection: "column-reverse",
//     backgroundColor: "#555",
//     alignItems: "center",
//     justifyContent: "flex-end",
//   },
//   background: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//   },
//   // background: {
//   //   flex: 1,
//   //   resizeMode: "cover",
//   //   justifyContent: "center",
//   //   position: "absolute",
//   //   width: "100%",
//   //   height: "100%",
//   // },
// });

"use strict";

import * as React from "react";
import "react-native-gesture-handler";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ title: "" }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
