import * as React from "react";

import { Text, StyleSheet, View } from "react-native";
import Plan from "./Plan";
import PaidPlan from "./PaidPlan";
import { FontFamily, Color } from "../GlobalStyles";

const ScheduleDetail = () => {
  return (
    <View style={styles.scheduledetail}>
      <Text style={styles.april2019}>18 April 2019</Text>
      <PaidPlan />
      <Plan
        planTop={59}
        planHeight={143}
        cleanerTop={0}
        cleanerLeft={54}
        cleanerHeight={143}
        prop="$50"
        propTop={118}
        contact={require("../assets/contact1.png")}
        contactTop={118}
        contactLeft={18}
        line73Top={105}
        timeTop={60}
        timeLeft={18}
        timeWidth={62}
        pM6PM="10AM - 11AM"
        clock={require("../assets/clock1.png")}
        upkeepCleaningTop={40}
        upkeepCleaningLeft={18}
        fc8cc65f046eeb0b9efb159aa={require("../assets/fc8cc65f046eeb0b9efb159aad932e2b1.png")}
        fc8cc65f046eeb0b9efb159aaTop={8}
        fc8cc65f046eeb0b9efb159aaLeft={194}
        michaelHamiltonTop={14}
        michaelHamiltonLeft={18}
        line70Top={87}
        pM="10 AM"
        pMTop={4}
      />
      <Plan
        prop="$150"
        contact={require("../assets/contact.png")}
        pM6PM="3PM - 6PM"
        clock={require("../assets/clock.png")}
        fc8cc65f046eeb0b9efb159aa={require("../assets/fc8cc65f046eeb0b9efb159aad932e2b.png")}
        pM="3 PM"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  april2019: {
    top: 23,
    left: 27,
    fontSize: 11,
    letterSpacing: 0.3,
    lineHeight: 11,
    fontWeight: "700",
    fontFamily: FontFamily.ubuntuBold,
    color: Color.black,
    textAlign: "left",
    opacity: 0.44,
    position: "absolute",
  },
  scheduledetail: {
    top: 235,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    backgroundColor: Color.white,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});

export default ScheduleDetail;
