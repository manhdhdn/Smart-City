import * as React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import InfomationOption from "../components/InfomationOption";
import WelcomeInfo from "../components/WelcomeInfo";
import { Color } from "../GlobalStyles";

const Infomation = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.account}>
        <WelcomeInfo />
        <InfomationOption navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    accountoption: {
    bottom: 0,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    backgroundColor: Color.white,
    width: "100%",
    height: 600,
  },
  account: {
    backgroundColor: Color.slateblue,
    flex: 1,
    width: "100%",
    height: 784,
    alignItems: "center",
  },
});

export default Infomation;
