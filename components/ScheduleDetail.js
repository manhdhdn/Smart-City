import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

const ScheduleDetail = (props) => {
  const paid = () => {
    return (
      <Image
        style={styles.paidIcon}
        contentFit="cover"
        source={require("../assets/paid.png")}
      />
    )
  }

  const money = (money) => {
    return (
      <Text style={[styles.text, styles.amTypo]}>${money}</Text>
    )
  }

  return (
    <View style={styles.scheduledetail}>
      <Text style={[styles.date, styles.amTypo]}>{props.date.format("DD-MM-YYYY")}</Text>
      <View style={styles.planLayout}>
        <View style={[styles.cleaner, styles.cleanerLayout]}>
          {paid()}
          <Image
            style={[styles.contactIcon, styles.contactIconLayout]}
            contentFit="cover"
            source={require("../assets/contact.png")}
          />
          <View style={[styles.cleanerChild, styles.childLayout]} />
          <View style={[styles.time, styles.timeLayout]}>
            <Text style={styles.am11am}>12AM - 1PM</Text>
            <Image
              style={[styles.clockIcon, styles.clockIconPosition]}
              contentFit="cover"
              source={require("../assets/clock.png")}
            />
          </View>
          <Text style={[styles.initialCleaning, styles.cleaningTypo]}>
            Initial Cleaning
          </Text>
          <Image
            style={[
              styles.afroAfroHairBeautiful19962Icon,
              styles.afroIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/afroafrohairbeautiful1996250.png")}
          />
          <Text style={[styles.trucNhu, styles.amTypo]}>Truc Nhu</Text>
        </View>
        <View style={[styles.planChild, styles.childLayout]} />
        <Text style={[styles.am, styles.amTypo]}>12 AM</Text>
      </View>
      <View style={styles.planLayout}>
        <View style={[styles.cleaner, styles.cleanerLayout]}>
          {money(100)}
          <Image
            style={[styles.contactIcon, styles.contactIconLayout]}
            contentFit="cover"
            source={require("../assets/contact.png")}
          />
          <View style={[styles.cleanerChild, styles.childLayout]} />
          <View style={[styles.time, styles.timeLayout]}>
            <Text style={styles.am11am}>12AM - 1PM</Text>
            <Image
              style={[styles.clockIcon, styles.clockIconPosition]}
              contentFit="cover"
              source={require("../assets/clock.png")}
            />
          </View>
          <Text style={[styles.initialCleaning, styles.cleaningTypo]}>
            Initial Cleaning
          </Text>
          <Image
            style={[
              styles.afroAfroHairBeautiful19962Icon,
              styles.afroIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/afroafrohairbeautiful1996250.png")}
          />
          <Text style={[styles.trucNhu, styles.amTypo]}>Truc Nhu</Text>
        </View>
        <View style={[styles.planChild, styles.childLayout]} />
        <Text style={[styles.am, styles.amTypo]}>12 AM</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  clockIconPosition: {
    position: "absolute",
    left: 0,
  },
  planLayout: {
    marginVertical: 10,
    height: 143,
    width: 314,
  },
  cleanerLayout: {
    backgroundColor: Color.lavender,
    width: 259,
    top: 0,
    overflow: "hidden",
    height: 143,
    position: "absolute",
  },
  contactIconLayout: {
    height: 13,
    width: 51,
    top: 118,
  },
  childLayout: {
    opacity: 0.18,
    height: 1,
    borderTopWidth: 0.6,
    borderStyle: "solid",
    position: "absolute",
  },
  timeLayout: {
    height: 11,
    top: 60,
  },
  cleaningTypo: {
    opacity: 0.42,
    fontFamily: FontFamily.ubuntuRegular,
    fontSize: 9,
    top: 40,
    color: Color.black,
    textAlign: "left",
    lineHeight: 11,
  },
  afroIconLayout: {
    height: 53,
    width: 52,
    top: 8,
    position: "absolute",
  },
  amTypo: {
    fontSize: 11,
    textAlign: "left",
  },
  paidIcon: {
    width: 259,
    top: 0,
    height: 143,
    left: 0,
    position: "absolute",
  },
  contactIcon: {
    left: 17,
    position: "absolute",
  },
  cleanerChild: {
    top: 105,
    borderColor: "#c48b30",
    width: 259,
    left: 0,
  },
  am11am: {
    left: 16,
    fontSize: 7,
    textAlign: "left",
    color: Color.slateblue,
    fontFamily: FontFamily.ubuntuBold,
    fontWeight: "700",
    lineHeight: 11,
    top: 0,
    position: "absolute",
  },
  clockIcon: {
    top: 1,
    width: 10,
    height: 10,
    left: 0,
  },
  time: {
    width: 58,
    left: 17,
    position: "absolute",
  },
  initialCleaning: {
    left: 17,
    position: "absolute",
  },
  afroAfroHairBeautiful19962Icon: {
    left: 193,
  },
  trucNhu: {
    top: 14,
    fontSize: 11,
    color: Color.slateblue,
    fontFamily: FontFamily.ubuntuBold,
    fontWeight: "700",
    lineHeight: 11,
    left: 17,
    position: "absolute",
  },
  cleaner: {
    left: 55,
    width: 259,
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
    fontSize: 11,
    position: "absolute",
    left: 0,
  },
  plan: {
    top: 215,
  },
  text: {
    right: 12,
    fontSize: 11,
    color: Color.slateblue,
    fontFamily: FontFamily.ubuntuBold,
    fontWeight: "700",
    lineHeight: 11,
    top: 120,
    position: "absolute",
  },
  date: {
    left: 27,
    letterSpacing: 0.3,
    opacity: 0.44,
    color: Color.black,
    fontSize: 11,
    fontFamily: FontFamily.ubuntuBold,
    fontWeight: "700",
    lineHeight: 11,
    marginVertical: 23,
    alignSelf: "flex-start",
  },
  scheduledetail: {
    flex: 1,
    flexDirection: "column",
    marginTop: 25,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    backgroundColor: Color.white,
    width: "100%",
    minHeight: 550,
    alignItems: "center",
  },
});

export default ScheduleDetail;
