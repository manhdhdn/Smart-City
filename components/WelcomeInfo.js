import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color } from "../GlobalStyles";

const WelcomeInfo = () => {
  return (
    <View style={styles.welcomeinfo}>
      <Text style={[styles.completed, styles.completedTypo]}>
        70% Completed
      </Text>
      <Text style={[styles.hiKateWelcomeBack, styles.completedTypo]}>{`Hi Kate,
Welcome Back`}</Text>
      <Image
        style={styles.pictureIcon}
        contentFit="cover"
        source={require("../assets/picture.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  completedTypo: {
    textAlign: "left",
    fontWeight: "700",
    left: 138,
    position: "absolute",
  },
  completed: {
    top: 60,
    fontSize: 15,
    fontFamily: FontFamily.montserratBold,
    color: Color.sandybrown,
  },
  hiKateWelcomeBack: {
    top: 0,
    fontSize: 19,
    fontFamily: FontFamily.ubuntuBold,
    color: Color.white,
  },
  pictureIcon: {
    top: 1,
    left: 0,
    width: 93,
    height: 84,
    position: "absolute",
  },
  welcomeinfo: {
    top: 57,
    width: 269,
    height: 85,
    position: "absolute",
  },
});

export default WelcomeInfo;
