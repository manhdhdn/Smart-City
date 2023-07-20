import * as React from "react";

import moment from "moment";

import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

const ScheduleTime = (props) => {
  const [firstDay, setFirstDay] = React.useState(null);
  const [week, setWeek] = React.useState("");

  const weekDay = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  React.useEffect(() => {
    let firstDay = moment(props.date).startOf("week");
    let lastDay = moment(props.date).endOf("week");
    let week_string = `${firstDay.date()}-${lastDay.date()} ${firstDay.format("MMMM")} ${firstDay.year()}`;

    setFirstDay(firstDay);
    setWeek(week_string);
  }, [props.date]);

  const getWeek = () => {
    let week = [];

    for (let i = 0; i < 7; ++i) {
      let day = moment(firstDay).add(i, "days");

      week.push(
        <View key={i} style={styles.detailCol}>
          <Text style={styles.mTypo}>{weekDay[i]}</Text>
          <Pressable onPress={() => props.handleSelectTime(day)}>
            <Text style={[
              styles.textTypo,
              {
                backgroundColor: props.date.date() === day.date() ? "#DC4F89" : Color.slateblue,
                borderRadius: 17,
              }
            ]}>
              {day.date()}
            </Text>
          </Pressable>

        </View>
      );
    }

    return week;
  };

  return (
    <View style={[styles.slectedtime, styles.detailPosition]}>
      <View style={styles.week}>
        <Pressable
          style={[styles.iconLayout]}
          onPress={() => props.handleSelectTime(moment(props.date).subtract(1, "weeks"))}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/path-402.png")}
          />
        </Pressable>
        <Text style={styles.april2019}>{week}</Text>
        <Pressable
          style={[styles.iconLayout]}
          onPress={() => props.handleSelectTime(moment(props.date).add(1, "weeks"))}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/path-401.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.detail, styles.detailPosition]}>
        <View style={styles.detailRow}>
          {firstDay && getWeek()}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailRow: {
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  detailCol: {
    flexDirection: "column",
    gap: 17,
    alignItems: "center",
  },
  detailPosition: {
    overflow: "hidden",
    width: 334.4,
  },
  mTypo: {
    lineHeight: 17,
    letterSpacing: 0.3,
    fontSize: 13,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.ubuntuRegular,
  },
  textTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.ubuntuRegular,
    lineHeight: 38,
    width: 38,
    letterSpacing: 0.4,
    fontSize: 15,
  },
  iconLayout: {
    height: 13,
    width: 7,
  },
  detail: {
    marginTop: 40,
    height: 73,
  },
  april2019: {
    fontSize: 13,
    textAlignVertical: "center",
    color: Color.white,
    fontFamily: FontFamily.ubuntuRegular,
    lineHeight: 17,
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
    flexDirection: "row",
    gap: 17,
    width: "100%",
    height: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  slectedtime: {
    marginTop: 25,
    height: 137,
    alignItems: "center",
  },
});

export default ScheduleTime;
