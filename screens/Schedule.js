import * as React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import ScheduleDetail from "../components/ScheduleDetail";
import SlectedTime from "../components/SlectedTime";
import { FontFamily, Color } from "../GlobalStyles";

const Schedule = () => {
  return (
    <ScrollView>
      <View style={styles.schedule}>
        <Text style={[styles.cleanerCalendar, styles.scheduletimePosition]}>
          Cleaner Calendar
        </Text>
        <View style={[styles.scheduletime, styles.scheduletimePosition]}>
          <SlectedTime />
        </View>
        <ScheduleDetail />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scheduletimePosition: {
    top: 41,
    position: "absolute",
  },
  scheduletime: {
    width: 304,
    height: 171,
  },
  cleanerCalendar: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: FontFamily.ubuntuBold,
    color: Color.white,
    textAlign: "left",
  },
  schedule: {
    backgroundColor: Color.slateblue,
    flex: 1,
    width: "100%",
    height: 804,
    alignItems: "center",
  },
});

export default Schedule;
