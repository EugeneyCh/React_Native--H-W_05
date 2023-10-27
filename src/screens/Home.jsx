import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen";

// function createPostsButton() {
//   return (
//     <TouchableOpacity>
//       <View style={styles.button}>
//         <Text style={styles.buttonText}>+</Text>
//       </View>
//     </TouchableOpacity>
//   );
// }

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Posts") {
            iconName = focused ? "grid" : "grid-outline";
          } else if (route.name === "CreatePosts") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        labelStyle: {
          display: "none",
        },
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerRight: () => (
            <Ionicons
              name="log-out-outline"
              size={30}
              color={"gray"}
              onPress={() => alert("This is a button!")}
            />
          ),
        }}
      />
      <Tabs.Screen name="CreatePosts" component={CreatePostsScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarIcon: {
    justifyContent: "center",
    title: "",
  },
  // button: {
  //   width: 344,
  //   height: 52,
  //   backgroundColor: "#FF6C00",
  //   marginTop: 44,
  //   borderRadius: 100,
  // },
  // buttonText: {
  //   fontSize: 16,
  // },
});

export default Home;
