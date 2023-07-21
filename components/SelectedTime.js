import * as React from "react";

import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const SelectedTime = (props) => {
  const [mode, setMode] = React.useState();
  const [show, setShow] = React.useState(false);

  const date = props.date.getDate() + "-" + (props.date.getMonth() + 1) + "-" + props.date.getFullYear();
  const time = props.date.getHours() + ":" + props.date.getMinutes();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || props.date;
    setShow(false);
    props.setDate(currentDate);
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

  return (
    <View style={styles.selectedextras}>
      <Text style={[styles.selectedExtras, styles.am9Typo]}>Selected Time</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Image
          style={styles.basicsRightArrow}
          contentFit="cover"
          source={require("../assets/basics--rightarrow.png")}
        />
        <View style={styles.scheduleParent}>
          <Pressable onPress={() => showMode("date")}>
            <Text style={styles.schedule}>{date}</Text>
          </Pressable>
          <Pressable onPress={() => showMode("time")}>
            <Text style={[styles.am9, styles.am9Typo]}>{time}</Text>
          </Pressable>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Image
            style={styles.essentialsClock}
            contentFit="cover"
            source={require("../assets/essentials--clock.png")}
          />
        </View>
      </View>
      {show && (
        <RNDateTimePicker
          minimumDate={props.date}
          testID="dateTimePicker"
          value={props.date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 85,
    width: 307,
    position: "absolute",
  },
  groupPosition: {
    top: 0,
    left: 0,
  },
  am9Typo: {
    fontWeight: "700",
    textAlign: "left",
  },
  groupLayout: {
    height: 56,
    width: 56,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#d7deea",
    borderWidth: 1,
    height: 85,
    width: 307,
    position: "absolute",
  },
  basicsRightArrow: {
    top: 27,
    left: 275,
    width: 32,
    height: 32,
    position: "absolute",
  },
  schedule: {
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    fontFamily: FontFamily.nunitoSansRegular,
    color: Color.black03,
    textAlign: "left",
  },
  am9: {
    fontSize: FontSize.size_mid,
    letterSpacing: 0.2,
    lineHeight: 23,
    fontFamily: FontFamily.nunitoSansBold,
    color: Color.black01,
    marginTop: 6,
  },
  scheduleParent: {
    top: 20,
    left: 86,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_base,
    backgroundColor: Color.aliceblue_100,
    top: 0,
    left: 0,
  },
  essentialsClock: {
    top: 16,
    left: 16,
    width: 24,
    height: 24,
    position: "absolute",
  },
  rectangleGroup: {
    top: 15,
    left: 14,
  },
  rectangleParent: {
    top: 36,
    left: 0,
    height: 85,
  },
  selectedExtras: {
    fontSize: 14,
    fontFamily: FontFamily.ubuntuBold,
    color: Color.black,
    opacity: 0.7,
    top: 0,
    left: 0,
    position: "absolute",
  },
  selectedextras: {
    top: 740,
    height: 137,
    width: 307,
    position: "absolute",
  },
});

export default SelectedTime;
