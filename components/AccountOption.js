import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import SingleOption from "./SingleOption";
import { FontFamily, Color } from "../GlobalStyles";

const AccountOption = () => {
  return (
    <View style={[styles.accountoption, styles.optionsPosition]}>
      <View style={[styles.options, styles.optionsPosition]}>
        <SingleOption
          addresses="Addresses"
          address={require("../assets/address.png")}
        />
        <SingleOption
          optionTop={116}
          optionHeight={43}
          line184Top={43}
          addresses="My Plan"
          address={require("../assets/myplan.png")}
          addressTop={3}
          addressHeight={18}
          optionLeft={0}
          addressesLeft={84}
          addressLeft={30}
          addressWidth={18}
        />
        <SingleOption
          optionTop={55}
          optionHeight={43}
          line184Top={43}
          addresses="My Bookings"
          address={require("../assets/calendar.png")}
          addressTop={5}
          addressHeight={17}
          optionLeft={0}
          addressesLeft={84}
          addressLeft={30}
          addressWidth={18}
        />
        <SingleOption
          optionTop={0}
          optionHeight={42}
          line184Top={42}
          addresses="Notifications"
          address={require("../assets/notification.png")}
          addressTop={4}
          addressHeight={18}
          optionLeft={1}
          addressesLeft={83}
          addressLeft={28}
          addressWidth={21}
        />
      </View>
      <Text style={styles.account}>Account</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  optionsPosition: {
    position: "absolute",
  },
  options: {
    top: 93,
    width: 374,
    height: 220,
  },
  account: {
    top: 36,
    left: 29,
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 26,
    fontFamily: FontFamily.interRegular,
    color: Color.darkslategray,
    textAlign: "left",
    position: "absolute",
  },
  accountoption: {
    bottom: 0,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    backgroundColor: Color.white,
    width: "100%",
    height: 600,
    alignItems: "center",
  },
});

export default AccountOption;
