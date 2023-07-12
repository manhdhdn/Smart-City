import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

const PaidPlan = () => {
  return (
    <View style={[styles.plan, styles.planLayout]}>
      <View style={[styles.cleaner, styles.planLayout]}>
        <Image
          style={styles.paidIcon}
          contentFit="cover"
          source={require("../assets/paid.png")}
        />
        <Image
          style={styles.contactIcon}
          contentFit="cover"
          source={require("../assets/contact2.png")}
        />
        <View style={[styles.cleanerChild, styles.childLayout]} />
        <View style={styles.time}>
          <Text style={[styles.am11am, styles.am11amFlexBox]}>12AM - 1PM</Text>
          <Image
            style={styles.clockIcon}
            contentFit="cover"
            source={require("../assets/clock2.png")}
          />
        </View>
        <Text style={[styles.initialCleaning, styles.am11amFlexBox]}>
          Initial Cleaning
        </Text>
        <Image
          style={styles.afroAfroHairBeautiful19962Icon}
          contentFit="cover"
          source={require("../assets/afroafrohairbeautiful1996250.png")}
        />
        <Text style={[styles.alexandraJohnson, styles.amTypo]}>
          Alexandra johnson
        </Text>
      </View>
      <View style={[styles.planChild, styles.childLayout]} />
      <Text style={[styles.am, styles.amTypo]}>12 AM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  planLayout: {
    overflow: "hidden",
    height: 143,
    position: "absolute",
  },
  childLayout: {
    opacity: 0.18,
    height: 1,
    borderTopWidth: 0.6,
    borderStyle: "solid",
    position: "absolute",
  },
  am11amFlexBox: {
    textAlign: "left",
    lineHeight: 11,
    position: "absolute",
  },
  amTypo: {
    fontSize: 11,
    textAlign: "left",
    position: "absolute",
  },
  paidIcon: {
    left: 0,
    width: 259,
    top: 0,
    height: 143,
    position: "absolute",
  },
  contactIcon: {
    top: 118,
    width: 51,
    height: 13,
    left: 17,
    position: "absolute",
  },
  cleanerChild: {
    top: 105,
    borderColor: "#c48b30",
    left: 0,
    width: 259,
  },
  am11am: {
    left: 16,
    fontSize: 7,
    color: Color.slateblue,
    fontFamily: FontFamily.ubuntuBold,
    fontWeight: "700",
    top: 0,
  },
  clockIcon: {
    top: 1,
    width: 10,
    height: 10,
    left: 0,
    position: "absolute",
  },
  time: {
    top: 60,
    width: 58,
    height: 11,
    left: 17,
    position: "absolute",
  },
  initialCleaning: {
    top: 40,
    fontSize: 9,
    fontFamily: FontFamily.ubuntuRegular,
    opacity: 0.42,
    color: Color.black,
    left: 17,
  },
  afroAfroHairBeautiful19962Icon: {
    top: 8,
    left: 193,
    width: 52,
    height: 53,
    position: "absolute",
  },
  alexandraJohnson: {
    top: 14,
    color: Color.slateblue,
    fontFamily: FontFamily.ubuntuBold,
    fontWeight: "700",
    lineHeight: 11,
    fontSize: 11,
    left: 17,
  },
  cleaner: {
    left: 55,
    backgroundColor: Color.lavender,
    width: 259,
    top: 0,
  },
  planChild: {
    top: 87,
    left: 6,
    borderColor: "#707070",
    width: 20,
  },
  am: {
    top: 4,
    lineHeight: 12,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    left: 0,
  },
  plan: {
    top: 215,
    left: 30,
    width: 314,
  },
});

export default PaidPlan;
