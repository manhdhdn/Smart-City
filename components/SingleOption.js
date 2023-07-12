import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SingleOption = ({
  optionTop,
  optionHeight,
  line184Top,
  addresses,
  address,
  addressTop,
  addressHeight,
  optionLeft,
  addressesLeft,
  addressLeft,
  addressWidth,
}) => {
  const optionStyle = useMemo(() => {
    return {
      ...getStyleValue("top", optionTop),
      ...getStyleValue("height", optionHeight),
      ...getStyleValue("left", optionLeft),
    };
  }, [optionTop, optionHeight, optionLeft]);

  const lineViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", line184Top),
    };
  }, [line184Top]);

  const addressIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", addressTop),
      ...getStyleValue("height", addressHeight),
      ...getStyleValue("left", addressLeft),
      ...getStyleValue("width", addressWidth),
    };
  }, [addressTop, addressHeight, addressLeft, addressWidth]);

  const addressesStyle = useMemo(() => {
    return {
      ...getStyleValue("left", addressesLeft),
    };
  }, [addressesLeft]);

  return (
    <View style={[styles.option, styles.optionPosition, optionStyle]}>
      <View
        style={[styles.optionChild, styles.optionPosition, lineViewStyle]}
      />
      <Text style={[styles.addresses, addressesStyle]}>{addresses}</Text>
      <Image
        style={[styles.addressIcon, addressIconStyle]}
        contentFit="cover"
        source={address}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  optionPosition: {
    width: 373,
    left: 0,
    position: "absolute",
  },
  optionChild: {
    top: 46,
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 0.6,
    height: 1,
    opacity: 0.1,
  },
  addresses: {
    top: 0,
    left: 84,
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 26,
    fontFamily: FontFamily.interRegular,
    color: Color.darkslategray,
    textAlign: "left",
    position: "absolute",
  },
  addressIcon: {
    top: 8,
    left: 30,
    width: 18,
    height: 15,
    overflow: "hidden",
    position: "absolute",
  },
  option: {
    top: 173,
    height: 47,
  },
});

export default SingleOption;
