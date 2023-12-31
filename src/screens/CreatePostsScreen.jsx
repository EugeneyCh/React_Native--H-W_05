import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export default function CreatePostsScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState("");

  // const takePhoto = async () => {
  //   const { uri } = await cameraRef.takePictureAsync();
  //   await MediaLibrary.createAssetAsync(uri);
  //   console.log("photo --->", uri);
  // };
  // which react - native

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <Camera style={styles.camera} type={type} ref={setCameraRef}>
          {photo && (
            <View style={styles.takePhotoContainer}>
              <Image style={styles.photoImage} source={{ uri: photo }} />
            </View>
          )}
          <View style={styles.photoView}>
            <TouchableOpacity
              style={styles.flipContainer}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  // marginBottom: 10,
                  color: "white",
                }}
              >
                Flip
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={async () => {
                if (cameraRef) {
                  // takePhoto;
                  const { uri } = await cameraRef.takePictureAsync();
                  await MediaLibrary.createAssetAsync(uri);
                  setPhoto(uri);
                  console.log("photo --->", photo);
                }
              }}
            >
              <View style={styles.takePhotoOut}>
                <View style={styles.takePhotoInner}></View>
              </View>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  cameraBox: {
    width: "90%",
    height: 240,
    borderRadius: 12,
    overflow: "hidden",
  },
  camera: {
    flex: 1,
    backgroundColor: "#E8E8E8",
    // borderWidth: 1,
  },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    marginBottom: 10,
  },

  flipContainer: {
    flex: 0.15,
    alignSelf: "flex-end",
    paddingRight: 15,
  },

  button: { alignSelf: "center" },

  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  photoImage: {
    alignSelf: "stretch",
    flex: 1,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 50,
  },
  takePhotoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    borderColor: "#fff",
    borderWidth: 1,
    height: "100%",
    width: "100%",
  },
});
