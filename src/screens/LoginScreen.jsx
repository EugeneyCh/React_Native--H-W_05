import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  View,
  Keyboard,
  Text,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Image,
  Alert,
} from "react-native";
import { useFonts } from "expo-font";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import HomeIndicator from "../components/HomeIndicator";
import { StatusBar } from "expo-status-bar";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIsShow, setPasswordIsShow] = useState(false);
  const navigation = useNavigation();

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [fontsLoaded] = useFonts({
    Roboto_400Regular: require("../../assets/fonts/Roboto-Regular.ttf"),
    Roboto_500Medium: require("../../assets/fonts/Roboto-Medium.ttf"),
    Roboto_700Bold: require("../../assets/fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  const onLogin = () => {
    Alert.alert("Credentials", `${email} + ${password}`);
    // setEmail("");
    // setPassword("");
  };
  // const showPass = () => {
  //   setIsPasswordShow(true);
  // };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ImageBackground
            source={require("../../assets/images/bgImage.png")}
            resizeMode="cover"
            style={styles.background}
          >
            <View style={styles.contant}>
              {/* <StatusBar style="light" />
            <Image
              className="h-full w--full absolute"
              source={"../../images/PhotoBG.png"}
            /> */}
              <Header title="Увійти" />
              <TextInput
                placeholder="Адреса електронної пошти"
                autoComplete="email"
                textContentType="emailAddress"
                value={email}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                style={{
                  ...styles.text,
                  borderColor: isEmailFocused ? "#FF6C00" : "#E8E8E8",
                }}
                onChangeText={setEmail}
              ></TextInput>
              <TextInput
                placeholder="Пароль"
                autoComplete="password"
                textContentType="password"
                secureTextEntry={!passwordIsShow}
                value={password}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                style={{
                  ...styles.text,
                  borderColor: isPasswordFocused ? "#FF6C00" : "#E8E8E8",
                }}
                onChangeText={setPassword}
              ></TextInput>
              <TouchableOpacity
                style={styles.showPassword}
                onPress={() => setPasswordIsShow((prevState) => !prevState)}
              >
                <Text style={{ color: "#1B4371" }}>
                  {" "}
                  {!passwordIsShow ? "Показати" : "Приховати"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={onLogin}>
                <Text style={styles.buttonText}>Увійти</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Registration")}
              >
                <Text style={styles.linkText}>
                  Немає акаунту? Зареєструватися
                </Text>
              </TouchableOpacity>
              <HomeIndicator style={styles.indicator} />
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  contant: {
    height: "60%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  text: {
    fontFamily: "Roboto_400Regular",
    height: 50,
    width: "100%",
    backgroundColor: "#F6F6F6",
    marginTop: 16,
    paddingLeft: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  button: {
    // position: "relative",
    width: 344,
    height: 52,
    backgroundColor: "#FF6C00",
    marginTop: 44,
    borderRadius: 100,
  },
  buttonText: {
    fontFamily: "Roboto_400Regular",

    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 32,
    paddingVertical: 16,
    color: "white",
  },
  linkText: {
    fontFamily: "Roboto_400Regular",
    color: "#1B4371",
    marginTop: 16,
  },
  indicator: {
    // flex: 1,
    height: 34,
    marginTop: 218,
  },
  showPassword: {
    position: "absolute",
    top: 220,
    right: 30,
  },
});

///////////////////////////////////////////////////////////////////////////

//                               OLD                                     //

///////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   TouchableWithoutFeedback,
//   TextInput,
//   View,
//   Keyboard,
//   Text,
//   TouchableOpacity,
//   ImageBackground,
//   KeyboardAvoidingView,
// } from "react-native";
// import PhotoBG from "../../images/PhotoBG.png";
// import { useFonts } from "expo-font";

// import Header from "../components/Header";

// import { useNavigation } from "@react-navigation/native";
// import HomeIndicator from "../components/HomeIndicator";

// export default function LoginScreen() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigation = useNavigation();

//   const [isEmailFocused, setIsEmailFocused] = useState(false);
//   const [isPasswordFocused, setIsPasswordFocused] = useState(false);

//   // const onLogin = () => {
//   //   Alert.alert("Credentials", `${name} + ${password}`);
//   // };

//   const [fontsLoaded] = useFonts({
//     Roboto_400Regular: require("../../assets/fonts/Roboto-Regular.ttf"),
//     Roboto_500Medium: require("../../assets/fonts/Roboto-Medium.ttf"),
//     Roboto_700Bold: require("../../assets/fonts/Roboto-Bold.ttf"),
//   });
//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <ImageBackground
//         source={PhotoBG}
//         resizeMode="cover"
//         style={styles.background}
//       >
//         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//           {/* <View style={styles.container}> */}
//           <KeyboardAvoidingView
//             // behavior={Platform.OS === "ios" ? "padding" : "height"}
//             style={styles.container}
//           >
//             {/* <StatusBar style="light" />
//             <Image
//               className="h-full w--full absolute"
//               source={"../../images/PhotoBG.png"}
//             /> */}
//             <Header title="Увійти" />
//             <TextInput
//               placeholder="Адреса електронної пошти"
//               autoComplete="email"
//               textContentType="emailAddress"
//               value={email}
//               onFocus={() => setIsEmailFocused(true)}
//               onBlur={() => setIsEmailFocused(false)}
//               style={{
//                 ...styles.text,
//                 borderColor: isEmailFocused ? "#FF6C00" : "#E8E8E8",
//               }}
//               onChangeText={setEmail}
//             ></TextInput>
//             <TextInput
//               placeholder="Пароль"
//               autoComplete="password"
//               textContentType="password"
//               secureTextEntry
//               value={password}
//               onFocus={() => setIsPasswordFocused(true)}
//               onBlur={() => setIsPasswordFocused(false)}
//               style={{
//                 ...styles.text,
//                 borderColor: isPasswordFocused ? "#FF6C00" : "#E8E8E8",
//               }}
//               onChangeText={setPassword}
//             ></TextInput>
//             <TouchableOpacity onPress={() => navigation.navigate("Home")}>
//               <View style={styles.button}>
//                 <Text style={styles.buttonText}>Увійти</Text>
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => navigation.navigate("Registration")}
//             >
//               <Text style={styles.linkText}>
//                 Немає акаунту? Зареєструватися
//               </Text>
//             </TouchableOpacity>
//             <HomeIndicator style={styles.indicator} />
//           </KeyboardAvoidingView>
//           {/* </View> */}
//         </TouchableWithoutFeedback>
//       </ImageBackground>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     height: "60%",
//     width: "100%",
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     paddingHorizontal: 16,
//   },
//   background: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "flex-end",
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//   },

//   text: {
//     fontFamily: "Roboto_400Regular",
//     height: 50,
//     width: "100%",
//     backgroundColor: "#F6F6F6",
//     marginTop: 16,
//     paddingLeft: 16,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: "#E8E8E8",
//   },
//   button: {
//     width: 344,
//     height: 52,
//     backgroundColor: "#FF6C00",
//     marginTop: 44,
//     borderRadius: 100,
//   },
//   buttonText: {
//     fontFamily: "Roboto_400Regular",

//     fontSize: 16,
//     textAlign: "center",
//     paddingHorizontal: 32,
//     paddingVertical: 16,
//     color: "white",
//   },
//   linkText: {
//     fontFamily: "Roboto_400Regular",
//     color: "#1B4371",
//     marginTop: 16,
//   },
//   indicator: {
//     // flex: 1,
//     height: 34,
//     marginTop: 218,
//   },
// });
