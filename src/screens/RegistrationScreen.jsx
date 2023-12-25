import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import { useFonts } from "expo-font";

import { useNavigation } from "@react-navigation/native";
import HomeIndicator from "../components/HomeIndicator";

export default function RegistrationScreen() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIsShow, setPasswordIsShow] = useState(false);

  const [avatarImg, setAvatarImg] = useState(
    require("../../assets/images/emptyImg.png")
  );
  const navigation = useNavigation();

  const [isNicknameFocused, setIsNicknameFocused] = useState(false);
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={-220}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
        >
          <ImageBackground
            source={require("../../assets/images/bgImage.png")}
            resizeMode="cover"
            style={styles.background}
          >
            <View style={styles.contant}>
              <View style={styles.imageAcBox}>
                <View style={styles.imageAc}>
                  <Image source={avatarImg} style={styles.image} />
                </View>
                <View style={styles.icon}>
                  <Ionicons
                    position="absolute"
                    name="add-outline"
                    size={24}
                    color={"#FF6C00"}
                    onPress={() => alert("This is a button!")}
                  />
                </View>
              </View>
              <Header title="Реєстрація" />
              <TextInput
                placeholder="Логін"
                autoComplete="nickname"
                textContentType="nickname"
                value={login}
                onFocus={() => setIsNicknameFocused(true)}
                onBlur={() => setIsNicknameFocused(false)}
                style={{
                  ...styles.text,
                  borderColor: isNicknameFocused ? "#FF6C00" : "#E8E8E8",
                }}
                onChangeText={setLogin}
              ></TextInput>

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

              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Home")}
              >
                {/* <View
                  style={styles.button}
                  onPress={() => navigation.navigate("Home")}
                > */}
                <Text style={styles.buttonText}>Зареєстуватися</Text>
                {/* </View> */}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
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
  container: {
    flex: 1,
    // position: "relative",
  },

  contant: {
    // flex: 1,
    // position: "relative",
    height: "70%",
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
  imageAcBox: {
    position: "absolute",
    top: 0,
    width: 132,
    height: 120,
    transform: [{ translateY: -60 }],
  },
  imageAc: {
    position: "absolute",
    overflow: "hidden",
    width: 120,
    height: 120,
    top: 0,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    // resizeMode: "cover",
  },
  // image: {
  //   top: "40%",
  // },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 12,
    right: 0,
    backgroundColor: "white",
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 100,
  },
  text: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    height: 50,
    width: "100%",
    backgroundColor: "#F6F6F6",
    marginTop: 16,
    paddingLeft: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  // button: {
  //   width: "100%",
  //   height: 52,
  //   backgroundColor: "#FF6C00",
  //   marginTop: 16,
  // },
  button: {
    width: 344,
    height: 52,
    backgroundColor: "#FF6C00",
    marginTop: 44,
    borderRadius: 30,
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
    paddingBottom: 78,
  },
  indicator: {
    flex: 1,
    height: 34,
  },
  showPassword: {
    position: "absolute",
    top: 287,
    right: 30,
  },
});
