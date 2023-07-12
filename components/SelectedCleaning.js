import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

const SelectedCleaning = (props) => {
  return (
    <View style={styles.selectedcleaning}>
      <Pressable onPress={() => props.handleCleaningChange(0)}>
        <View style={styles.cleaningoption1}>
          {props.cleaning === 0 ? (
            <Image
              style={[styles.cleaningoptionInner, styles.cleaningoptionLayout]}
              contentFit="cover"
              source={require("../assets/group-4043.png")}
            />
          ) : (
            <Image
              style={[styles.cleaningoptionInner, styles.cleaningoptionLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-477.png")}
            />
          )}
          <Text style={[styles.initialCleaning, styles.cleaningTypo]}>
            Initial Cleaning
          </Text>
          <View style={[styles.cleaningoptionItem, styles.maskGroup59Position]} />
          <Image
            style={styles.maskGroup59Position}
            contentFit="cover"
            source={require("../assets/mask-group-60.png")}
          />
        </View>
      </Pressable>
      <Pressable onPress={() => props.handleCleaningChange(1)}>
        <View style={styles.cleaningoption}>
          {props.cleaning === 1 ? (
            <Image
              style={[styles.cleaningoptionInner, styles.cleaningoptionLayout]}
              contentFit="cover"
              source={require("../assets/group-4043.png")}
            />
          ) : (
            <Image
              style={[styles.cleaningoptionInner, styles.cleaningoptionLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-477.png")}
            />
          )}
          <Text style={[styles.upkeepCleaning, styles.cleaningTypo]}>
            Upkeep Cleaning
          </Text>
          <View style={[styles.cleaningoptionItem, styles.maskGroup59Position]} />
          <Image
            style={styles.maskGroup59Position}
            contentFit="cover"
            source={require("../assets/mask-group-59.png")}
          />
        </View>
      </Pressable>
      <Text style={styles.selectedCleaning}>Selected Cleaning</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cleaningoptionLayout: {
    height: 21,
    width: 21,
    position: "absolute",
  },
  cleaningTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    letterSpacing: -0.2,
    fontSize: 11,
    position: "absolute",
  },
  maskGroup59Position: {
    height: 125,
    left: 0,
    top: 0,
    width: 152,
    position: "absolute",
  },
  cleaningoptionChild: {
    top: 165,
    left: 74,
    opacity: 0.51,
  },
  upkeepCleaning: {
    top: 140,
    left: 32,
  },
  cleaningoptionItem: {
    borderRadius: 28,
    backgroundColor: Color.lavender,
  },
  cleaningoption: {
    top: 48,
    left: 165,
    height: 186,
    width: 152,
    position: "absolute",
  },
  cleaningoptionInner: {
    top: 166,
    left: 65,
  },
  initialCleaning: {
    top: 142,
    left: 35,
  },
  cleaningoption1: {
    top: 46,
    height: 188,
    left: 0,
    width: 152,
    position: "absolute",
  },
  selectedCleaning: {
    left: 4,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: FontFamily.ubuntuBold,
    opacity: 0.7,
    top: 0,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  selectedcleaning: {
    top: 147,
    width: 318,
    height: 234,
    position: "absolute",
  },
});

export default SelectedCleaning;
