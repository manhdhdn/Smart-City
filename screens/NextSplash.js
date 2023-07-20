import * as React from "react";

import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

const NextSplash = ({ navigation }) => {
  const handleButtonBackPress = () => {
    navigation.navigate("Splash");
  }
  const handleButtonNextPress = () => {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.nextsplash}>
      <Image
        style={[styles.nsplashimgIcon, styles.contentPosition]}
        contentFit="cover"
        source={require("../assets/nsplashimg.png")}
      />
      <View style={[styles.content, styles.contentPosition]}>
        <View style={[styles.navigate, styles.navigateLayout]}>
          <Pressable onPress={handleButtonBackPress}>
            <Text style={[styles.skip, styles.nextFlexBox]}>Back</Text>
          </Pressable>
          <Pressable onPress={handleButtonNextPress}>
            <Text style={[styles.next, styles.nextFlexBox]}>Next</Text>
            <Image
              style={[styles.path5177Icon, styles.navigateLayout]}
              contentFit="cover"
              source={require("../assets/path-5177.png")}
            />
            <Image
              style={styles.path5178Icon}
              contentFit="cover"
              source={require("../assets/path-5178.png")}
            />
          </Pressable>
        </View>
        <View style={styles.title}>
          <Text
            style={[styles.bookAnAppointment, styles.nextFlexBox]}
          >{`Book an appointment in
less than 60 seconds and get on
the schedule as early as
tomorrow.`}</Text>
          <Text style={[styles.cleaningOnDemand, styles.nextFlexBox]}>
            Cleaning On Demand
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentPosition: {
    width: "100%",
    left: 0,
    position: "absolute",
  },
  navigateLayout: {
    height: 30,
  },
  nextFlexBox: {
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  nsplashimgIcon: {
    overflow: "hidden",
    top: 60,
    height: 806,
  },
  path5177Icon: {
    right: 0,
    width: 30,
    top: 0,
    position: "absolute",
  },
  next: {
    top: 5,
    right: 40,
    fontFamily: FontFamily.nunitoRegular,
    letterSpacing: -0.3,
    fontSize: 15,
    color: Color.white,
  },
  skip: {
    top: 4,
    fontFamily: FontFamily.nunitoRegular,
    letterSpacing: -0.3,
    fontSize: 15,
    color: Color.white,
    left: 0,
  },
  path5178Icon: {
    top: 9,
    right: 11,
    width: 7,
    height: 12,
    position: "absolute",
  },
  navigate: {
    top: 289,
    width: "90%",
    alignSelf: "center",
  },
  bookAnAppointment: {
    top: 59,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    width: "100%",
  },
  cleaningOnDemand: {
    fontSize: 22,
    letterSpacing: -0.4,
    fontWeight: "700",
    fontFamily: FontFamily.ubuntuBold,
    width: "100%",
  },
  title: {
    top: 30,
    width: "100%",
    height: 151,
    alignSelf: "center",
  },
  content: {
    bottom: 0,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    backgroundColor: Color.slateblue,
    height: 358,
    width: "100%",
  },
  nextsplash: {
    backgroundColor: Color.lavender,
    flex: 1,
  },
});

export default NextSplash;
