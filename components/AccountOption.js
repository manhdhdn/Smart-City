import * as React from "react";

import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { FontFamily, Color } from "../GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/core";



const AccountOption =  ({ navigation }) => {
  const [userLogedIn, setUserLogedIn] = React.useState(false);
  const isFocused = useIsFocused();
  React.useEffect( () => {
    const checkLogin = async() => {
      const checkData = await AsyncStorage.getItem("token");
      if(checkData) {
        setUserLogedIn(true);
      }
    };
    if(isFocused) {
      checkLogin();
    }
  },[isFocused]);
  const handleNotificationPress = () => {
    console.log("Notification");
  }

  const handleMyBookingsPress = () => {
    navigation.navigate("Schedule");
  }

  const handleNewPlanPress = () => {
    navigation.navigate("Home");
  }

  const handleAddressPress = () => {
    console.log("Address");
  }

  const handleLogOutPress = async ()  => {
    const data = await AsyncStorage.getItem("token");
    if(data){
      await AsyncStorage.clear();
      setUserLogedIn(false);
    }
    navigation.navigate("SignIn");
  }

  const handleLogInPress = async() => {
    const data = await AsyncStorage.getItem("token");
    if(!data){
      setUserLogedIn(false);
    }else{
      setUserLogedIn(true);
    }
    navigation.navigate("SignIn");
  }

  const logedIn = () => {
    return (
      <><Pressable style={styles.singleOption} onPress={handleNotificationPress}>
        <View style={styles.optionContent}>
          <MaterialCommunityIcons name="bell-ring-outline" size={24} color={Color.slateblue} />
          <Text style={styles.text}>Notifications</Text>
        </View>
        <View style={styles.line} />
      </Pressable>
      <Pressable style={styles.singleOption} onPress={handleMyBookingsPress}>
          <View style={styles.optionContent}>
            <MaterialCommunityIcons name="calendar-month" size={24} color={Color.slateblue} />
            <Text style={styles.text}>My Bookings</Text>
          </View>
          <View style={styles.line} />
        </Pressable>
        <Pressable style={styles.singleOption} onPress={handleNewPlanPress}>
          <View style={styles.optionContent}>
            <MaterialCommunityIcons name="notebook-multiple" size={24} color={Color.slateblue} />
            <Text style={styles.text}>New Plan</Text>
          </View>
          <View style={styles.line} />
        </Pressable>
        <Pressable style={styles.singleOption} onPress={handleAddressPress}>
          <View style={styles.optionContent}>
            <MaterialCommunityIcons name="map-marker-outline" size={24} color={Color.slateblue} />
            <Text style={styles.text}>Address</Text>
          </View>
          <View style={styles.line} />
        </Pressable>
        <View style={styles.logInOutFrame}>
          <Pressable style={styles.logInOutRow} onPress={handleLogOutPress}>
            <MaterialCommunityIcons name="logout" size={44} color={Color.slateblue} />
            <Text style={styles.logInOutText}>Log out</Text>
          </Pressable>
        </View> 
      </>
    );
  }

  const notLogedIn = () => {
    return (
      <View style={styles.logInOutFrame}>
        <Pressable style={styles.logInOutRow} onPress={handleLogInPress}>
          <MaterialCommunityIcons name="login" size={44} color={Color.slateblue} />
          <Text style={styles.logInOutText}>Log in</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={[styles.accountoption, styles.optionsPosition]}>
      <Text style={styles.account}>Account</Text>
      <View style={styles.options}>
        {userLogedIn ? logedIn() : notLogedIn()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logInOutText: {
    fontSize: 36,
    letterSpacing: 0.2,
    lineHeight: 44,
    fontFamily: FontFamily.interRegular,
    color: Color.darkslategray,
    textAlign: "left",
  },
  logInOutRow: {
    flexDirection: "row",
  },
  logInOutFrame: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  singleOption: {
    flexDirection: "column",
    gap: 20,
    width: '90%',
    height: 60,
    justifyContent: "center",
  },
  optionContent: {
    flexDirection: "row",
    gap: 30,
    marginLeft: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 24,
    fontFamily: FontFamily.interRegular,
    color: Color.darkslategray,
    textAlign: "left",
  },
  line: {
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 0.6,
    width: "100%",
    height: 1,
    opacity: 0.2,
  },
  optionsPosition: {
    position: "absolute",
  },
  options: {
    top: 93,
    width: "100%",
    height: "75%",
    alignItems: "center",
  },
  account: {
    top: 36,
    left: 29,
    fontSize: 18,
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
  },
});

export default AccountOption;
