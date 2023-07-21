import * as React from "react";

import { StyleSheet, View, Text, Pressable, TextInput, Image, Button, KeyboardAvoidingView, ScrollView, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { FontFamily, Color } from "../GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/core";
import config from "../baseUrl.json";
import axios from "axios";



const AccountOption = ({ navigation }) => {
  const [userLogedIn, setUserLogedIn] = React.useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = React.useState(false);
  const [oldPassword, setOldPassword] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPass, setConfirmPass] = React.useState("");
  const [hidePassword, setHidePassword] = React.useState(true);
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const checkLogin = async () => {
      const checkData = await AsyncStorage.getItem("token");
      if (checkData) {
        setUserLogedIn(true);
      }
    };
    if (isFocused) {
      checkLogin();
    }
  }, [isFocused]);
  const handleChangePassworldPress = () => {
    setShowChangePasswordModal(true);
  }

  const handleCloseModal = () => {
    setOldPassword("");
    setPassword("");
    setConfirmPass("");
    setHidePassword(true);
    setShowChangePasswordModal(false);
  }

  const handleUnhidePassword = () => {
    setHidePassword(!hidePassword);
  }

  const handleSavePassword = async () => {
    const userData = await AsyncStorage.getItem("user");
    if(password !== confirmPass){
      Alert.alert("Password and Confirm Password do not match");
    }
    try{
    const parsedDataUser = JSON.parse(userData);
      const res = await axios.put(`http://${config.baseURL}:8089/api/user/changePassword/${parsedDataUser.id}`,
      {
        oldPassword: oldPassword,
        password: password,
      }
    );
    Alert.alert(res.data.message);
    handleCloseModal();
  }catch(err){
    console.log(err);
      if (err.response && err.response.data) {
        const errorMessage = err.response.data.message;
        if (errorMessage) {
          alert(errorMessage);
        } else {
          console.error(errorMessage);
        }
      }
      return;
  }

  };

  const handleMyBookingsPress = () => {
    navigation.navigate("Schedule");
  }

  const handleNewPlanPress = () => {
    navigation.navigate("Home");
  }

  const handleInfoPress = () => {
    navigation.navigate("Infomation");
  }

  const handleLogOutPress = async () => {
    const data = await AsyncStorage.getItem("token");
    if (data) {
      await AsyncStorage.clear();
      setUserLogedIn(false);
    }
    navigation.navigate("SignIn");
  }

  const handleLogInPress = async () => {
    const data = await AsyncStorage.getItem("token");
    if (!data) {
      setUserLogedIn(false);
    } else {
      setUserLogedIn(true);
    }
    navigation.navigate("SignIn");
  }

  const logedIn = () => {
    return (
      <><Pressable style={styles.singleOption} onPress={handleChangePassworldPress}>
        <View style={styles.optionContent}>
          <MaterialCommunityIcons name="bell-ring-outline" size={24} color={Color.slateblue} />
          <Text style={styles.text}>ChangePassworld</Text>
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
        <Pressable style={styles.singleOption} onPress={handleInfoPress}>
          <View style={styles.optionContent}>
            <MaterialCommunityIcons name="account-outline" size={24} color={Color.slateblue} />
            <Text style={styles.text}>Infomation</Text>
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

  const ChangePasswordModal = () => {
    return (
      <View style={styles.modalContainer}>
        <ScrollView style={styles.modalContainer} behavior="padding" keyboardShouldPersistTaps="handled">
        <Text style={styles.modalTitle}>Change Password</Text>
        <TextInput
          secureTextEntry={hidePassword}
          placeholder="Old Password"
          value={oldPassword}
          onChangeText={setOldPassword}
          style={styles.textField}
        />
        <TextInput
          secureTextEntry={hidePassword}
          placeholder="New Password"
          value={password}
          onChangeText={setPassword}
          style={styles.textField}
        />
        <TextInput
          secureTextEntry={hidePassword}
          placeholder="Confirm Password"
          value={confirmPass}
          onChangeText={setConfirmPass}
          style={styles.textField}
        />
        <Pressable onPress={handleUnhidePassword}>
          <Image
            style={[styles.eyeLightIcon, styles.parentPosition]}
            contentFit="cover"
            source={require("../assets/eye-light1.png")}
          />
        </Pressable>
        <View style={styles.modalButtons}>
          <Button title="Cancel"  onPress={handleCloseModal} />
          <Button title="Save" onPress={handleSavePassword} />
        </View>
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={[styles.accountoption, styles.optionsPosition]}>
      <Text style={styles.account}>Account</Text>
      <View style={styles.options}>
        {userLogedIn ? logedIn() : notLogedIn()}
      </View>
      {showChangePasswordModal && (
        <View style={styles.overlay}>
          <ChangePasswordModal />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textField: {
    width: '100%',
    height: 80,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
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
  modalContainer: {
    backgroundColor: "whitesmoke",
    width: "100%",
    padding: 20,
    borderRadius: 8,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    
  },

  // Phong cách cho tiêu đề của modal
  modalTitle: {
    fontSize: 18,
    fontFamily: FontFamily.interRegular,
    color: Color.darkslategray,
    marginBottom: 20,
  },

  // Phong cách cho TextInput
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },

  // Phong cách cho khung nút trong modal
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 15,
  },

  // Phong cách cho overlay
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AccountOption;
