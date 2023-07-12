import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

const SlectedTime = () => {
  return (
    <View style={[styles.slectedtime, styles.detailPosition]}>
      <View style={[styles.detail, styles.detailPosition]}>
        <Image
          style={styles.detailChild}
          contentFit="cover"
          source={require("../assets/ellipse-246.png")}
        />
        <Text style={[styles.s, styles.sTypo]}>S</Text>
        <Text style={[styles.m, styles.mTypo]}>M</Text>
        <Text style={[styles.t, styles.tTypo]}>T</Text>
        <Text style={[styles.w, styles.sTypo]}>W</Text>
        <Text style={[styles.t1, styles.tTypo]}>T</Text>
        <Text style={[styles.f, styles.sTypo]}>F</Text>
        <Text style={[styles.s1, styles.sTypo]}>S</Text>
        <Text style={[styles.text, styles.textTypo]}>15</Text>
        <Text style={[styles.text1, styles.mTypo]}>16</Text>
        <Text style={[styles.text2, styles.textTypo]}>17</Text>
        <Text style={[styles.text3, styles.textTypo]}>18</Text>
        <Text style={[styles.text4, styles.textTypo]}>19</Text>
        <Text style={[styles.text5, styles.textTypo]}>20</Text>
        <Text style={[styles.text6, styles.textTypo]}>21</Text>
      </View>
      <View style={styles.week}>
        <Text style={styles.april2019}>15-21 April 2019</Text>
        <Image
          style={[styles.path401Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/path-401.png")}
        />
        <Image
          style={[styles.path402Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/path-402.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailPosition: {
    overflow: "hidden",
    width: 304,
    left: 0,
    position: "absolute",
  },
  sTypo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.ubuntuRegular,
    letterSpacing: 0.4,
    fontSize: 15,
    top: 0,
    position: "absolute",
  },
  mTypo: {
    lineHeight: 17,
    letterSpacing: 0.3,
    fontSize: 13,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.ubuntuRegular,
    position: "absolute",
  },
  tTypo: {
    lineHeight: 18,
    fontSize: 14,
    letterSpacing: 0.3,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.ubuntuRegular,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    top: 44,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.ubuntuRegular,
    lineHeight: 19,
    letterSpacing: 0.4,
    fontSize: 15,
    position: "absolute",
  },
  iconLayout: {
    height: 13,
    width: 7,
    position: "absolute",
  },
  detailChild: {
    top: 35,
    left: 133,
    width: 38,
    height: 38,
    position: "absolute",
  },
  s: {
    left: 2,
    lineHeight: 19,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.ubuntuRegular,
    letterSpacing: 0.4,
    fontSize: 15,
  },
  m: {
    left: 48,
    top: 1,
  },
  t: {
    left: 97,
  },
  w: {
    lineHeight: 20,
    left: 143,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.ubuntuRegular,
    letterSpacing: 0.4,
    fontSize: 15,
  },
  t1: {
    left: 197,
  },
  f: {
    left: 243,
    lineHeight: 19,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.ubuntuRegular,
    letterSpacing: 0.4,
    fontSize: 15,
  },
  s1: {
    left: 289,
    lineHeight: 19,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.ubuntuRegular,
    letterSpacing: 0.4,
    fontSize: 15,
  },
  text: {
    left: 0,
  },
  text1: {
    left: 46,
    top: 45,
  },
  text2: {
    left: 95,
  },
  text3: {
    left: 143,
  },
  text4: {
    left: 195,
  },
  text5: {
    left: 241,
  },
  text6: {
    left: 287,
  },
  detail: {
    top: 64,
    height: 73,
  },
  april2019: {
    left: 27,
    fontSize: 13,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.ubuntuRegular,
    top: 0,
    position: "absolute",
  },
  path401Icon: {
    left: 142,
    top: 1,
  },
  path402Icon: {
    top: 2,
    left: 0,
  },
  week: {
    left: 77,
    width: 150,
    height: 15,
    top: 0,
    overflow: "hidden",
    position: "absolute",
  },
  slectedtime: {
    height: 137,
    top: 45,
  },
});

export default SlectedTime;
