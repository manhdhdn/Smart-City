import * as React from "react";
import { StyleSheet, View } from "react-native";
import AccountOption from "../components/AccountOption";
import WelcomeInfo from "../components/WelcomeInfo";
import { Color } from "../GlobalStyles";

const Account = () => {
  return (
    <View style={styles.account}>
      <WelcomeInfo />
      <AccountOption />
    </View>
  );
};

const styles = StyleSheet.create({
  account: {
    backgroundColor: Color.slateblue,
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});

export default Account;
