import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Plan = ({
  planTop,
  planHeight,
  cleanerTop,
  cleanerLeft,
  cleanerHeight,
  prop,
  propTop,
  contact,
  contactTop,
  contactLeft,
  line73Top,
  timeTop,
  timeLeft,
  timeWidth,
  pM6PM,
  clock,
  upkeepCleaningTop,
  upkeepCleaningLeft,
  fc8cc65f046eeb0b9efb159aa,
  fc8cc65f046eeb0b9efb159aaTop,
  fc8cc65f046eeb0b9efb159aaLeft,
  michaelHamiltonTop,
  michaelHamiltonLeft,
  line70Top,
  pM,
  pMTop,
}) => {
  const planStyle = useMemo(() => {
    return {
      ...getStyleValue("top", planTop),
      ...getStyleValue("height", planHeight),
    };
  }, [planTop, planHeight]);

  const cleanerStyle = useMemo(() => {
    return {
      ...getStyleValue("top", cleanerTop),
      ...getStyleValue("left", cleanerLeft),
      ...getStyleValue("height", cleanerHeight),
    };
  }, [cleanerTop, cleanerLeft, cleanerHeight]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const contactIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", contactTop),
      ...getStyleValue("left", contactLeft),
    };
  }, [contactTop, contactLeft]);

  const lineView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", line73Top),
    };
  }, [line73Top]);

  const timeStyle = useMemo(() => {
    return {
      ...getStyleValue("top", timeTop),
      ...getStyleValue("left", timeLeft),
      ...getStyleValue("width", timeWidth),
    };
  }, [timeTop, timeLeft, timeWidth]);

  const upkeepCleaningStyle = useMemo(() => {
    return {
      ...getStyleValue("top", upkeepCleaningTop),
      ...getStyleValue("left", upkeepCleaningLeft),
    };
  }, [upkeepCleaningTop, upkeepCleaningLeft]);

  const fc8cc65f046eeb0b9efb159aad932eIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", fc8cc65f046eeb0b9efb159aaTop),
      ...getStyleValue("left", fc8cc65f046eeb0b9efb159aaLeft),
    };
  }, [fc8cc65f046eeb0b9efb159aaTop, fc8cc65f046eeb0b9efb159aaLeft]);

  const michaelHamiltonStyle = useMemo(() => {
    return {
      ...getStyleValue("top", michaelHamiltonTop),
      ...getStyleValue("left", michaelHamiltonLeft),
    };
  }, [michaelHamiltonTop, michaelHamiltonLeft]);

  const lineView2Style = useMemo(() => {
    return {
      ...getStyleValue("top", line70Top),
    };
  }, [line70Top]);

  const pMStyle = useMemo(() => {
    return {
      ...getStyleValue("top", pMTop),
    };
  }, [pMTop]);

  return (
    <View style={[styles.plan, styles.planPosition, planStyle]}>
      <View style={[styles.cleaner, styles.planPosition, cleanerStyle]}>
        <Text style={[styles.text, styles.textTypo, textStyle]}>{prop}</Text>
        <Image
          style={[styles.contactIcon, contactIconStyle]}
          contentFit="cover"
          source={contact}
        />
        <View
          style={[styles.cleanerChild, styles.childLayout, lineView1Style]}
        />
        <View style={[styles.time, timeStyle]}>
          <Text style={[styles.pm6pm, styles.textTypo]}>{pM6PM}</Text>
          <Image style={styles.clockIcon} contentFit="cover" source={clock} />
        </View>
        <Text
          style={[styles.upkeepCleaning, styles.pmClr, upkeepCleaningStyle]}
        >
          Upkeep Cleaning
        </Text>
        <Image
          style={[
            styles.fc8cc65f046eeb0b9efb159aad932eIcon,
            fc8cc65f046eeb0b9efb159aad932eIconStyle,
          ]}
          contentFit="cover"
          source={fc8cc65f046eeb0b9efb159aa}
        />
        <Text
          style={[
            styles.michaelHamilton,
            styles.textTypo,
            michaelHamiltonStyle,
          ]}
        >
          Michael Hamilton
        </Text>
      </View>
      <View style={[styles.planChild, styles.childLayout, lineView2Style]} />
      <Text style={[styles.pm, styles.pmClr, pMStyle]}>{pM}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  planPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.slateblue,
    fontFamily: FontFamily.ubuntuBold,
    fontWeight: "700",
    lineHeight: 11,
    position: "absolute",
  },
  childLayout: {
    opacity: 0.18,
    height: 1,
    borderTopWidth: 0.6,
    borderStyle: "solid",
    position: "absolute",
  },
  pmClr: {
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  text: {
    left: 221,
    fontSize: 11,
    top: 110,
  },
  contactIcon: {
    width: 51,
    height: 13,
    left: 17,
    top: 110,
    position: "absolute",
  },
  cleanerChild: {
    top: 97,
    borderColor: "#c48b30",
    left: 0,
    width: 259,
  },
  pm6pm: {
    left: 16,
    fontSize: 7,
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
    top: 52,
    width: 53,
    height: 11,
    left: 17,
    position: "absolute",
  },
  upkeepCleaning: {
    top: 33,
    fontSize: 9,
    fontFamily: FontFamily.ubuntuRegular,
    opacity: 0.42,
    left: 17,
    lineHeight: 11,
    color: Color.black,
  },
  fc8cc65f046eeb0b9efb159aad932eIcon: {
    left: 193,
    width: 52,
    height: 53,
    top: 0,
    position: "absolute",
  },
  michaelHamilton: {
    top: 6,
    left: 17,
    fontSize: 11,
  },
  cleaner: {
    top: 3,
    left: 55,
    backgroundColor: Color.lavender,
    height: 123,
    width: 259,
  },
  planChild: {
    top: 82,
    left: 6,
    borderColor: "#707070",
    width: 20,
  },
  pm: {
    lineHeight: 12,
    fontFamily: FontFamily.interRegular,
    top: 0,
    left: 0,
    fontSize: 11,
  },
  plan: {
    top: 375,
    left: 30,
    width: 314,
    height: 126,
  },
});

export default Plan;
