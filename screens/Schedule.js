import * as React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import ScheduleDetail from "../components/ScheduleDetail";
import ScheduleTime from "../components/ScheduleTime";
import { FontFamily, Color } from "../GlobalStyles";

const Schedule = () => {
  return (
    <ScrollView>
      <View style={styles.schedule}>
        <Text style={styles.cleanerCalendar}>
          Cleaner Calendar
        </Text>
        <ScheduleTime />
        <ScheduleDetail />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cleanerCalendar: {
    marginTop: 23,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: FontFamily.ubuntuBold,
    color: Color.white,
    textAlign: "left",
  },
  schedule: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Color.slateblue,
    alignItems: "center",
  },
});

export default Schedule;
