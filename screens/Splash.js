import * as React from "react";

import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily } from "../GlobalStyles";

const Splash = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.navigate("NextSplash");
  }

  return (
    <View style={styles.splash}>
      <View style={styles.title}>
        <Text
          style={[styles.cleanHomeCleanLife, styles.cleanFlexBox]}
        >{`Clean Home
Clean Life.`}</Text>
        <Text
          style={[styles.bookCleanersAt, styles.cleanFlexBox]}
        >{`Book Cleaners at the Comfort
of you home.`}</Text>
      </View>
      <View style={styles.splashimg}>
        <Image
          style={styles.splashimgIcon}
          contentFit="cover"
          source={require("../assets/splashimg.png")}
        />
      </View>
      <View style={[styles.getstated, styles.getstatedLayout]}>
        <Pressable onPress={handleButtonPress}>
          <Image
            style={[styles.intersection5Icon, styles.getstatedLayout]}
            contentFit="cover"
            source={require("../assets/intersection-5.png")}
          />
          <Text style={[styles.getStarted, styles.cleanFlexBox]}>
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cleanFlexBox: {
    textAlign: "center",
  },
  getstatedLayout: {
    height: 67,
    width: 173,
    position: "absolute",
  },
  cleanHomeCleanLife: {
    fontSize: 34,
    letterSpacing: -1.7,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    top: 0,
  },
  bookCleanersAt: {
    top: 40,
    fontSize: 17,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    left: 0,
    color: Color.white,
    textAlign: "center",
  },
  title: {
    top: 135,
    width: "100%",
    height: 156,
    position: "absolute",
  },
  splashimgIcon: {
    width: 427,
    height: 330,
    left: 0,
    top: 0,
    position: "absolute",
  },
  splashimg: {
    top: 349,
    width: "100%",
    height: 331,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  intersection5Icon: {
    left: 0,
    top: 0,
  },
  getStarted: {
    top: 25,
    fontSize: 14,
    letterSpacing: -0.7,
    color: Color.slateblue,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
  },
  getstated: {
    bottom: 0,
    right: 0,
  },
  splash: {
    backgroundColor: Color.slateblue,
    flex: 1,
  },
});

export default Splash;
