import * as React from "react";
import { Text, TextInput, StyleSheet, View, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [hidePassword, setHidePassword] = React.useState(true);

  const handleUnhidePassword = () => {
    setHidePassword(!hidePassword);
  }

  const handleLoginLinkPress = () => {
    navigation.navigate("SignIn");
  }

  const handleRegisterPress = () => {
    navigation.navigate("Account");
  }

  const handleGoogleRegisterPress = () => {
    navigation.navigate("Account");
  }

  const handleFacebookRegisterPress = () => {
    navigation.navigate("Account");
  }

  return (
    <ScrollView>
      <View style={styles.signin}>
        <View style={[styles.content, styles.buttonPosition]}>
          <Text style={[styles.email, styles.emailTypo]}>Email</Text>
          <View style={[styles.groupView, styles.groupLayout]}>
            <View style={styles.groupInnerShadowBox} />
            <TextInput
              style={styles.textTypo}
              onChangeText={setEmail}
              placeholder="smartcity@gmail.com"
              keyboardType="email-address"
            />
            <Image
              style={[styles.eyeLightIcon, styles.parentPosition]}
              contentFit="cover"
              source={require("../assets/expand-down.png")}
            />
          </View>
          <Text style={[styles.name, styles.emailTypo]}>Name</Text>
          <View style={[styles.rectangleContainer, styles.groupLayout]}>
            <View style={styles.groupInnerShadowBox} />
            <TextInput
              style={styles.textTypo}
              onChangeText={setName}
              placeholder="Smart City"
            />
            <Pressable onPress={handleUnhidePassword}>
              <Image
                style={[styles.eyeLightIcon, styles.parentPosition]}
                contentFit="cover"
              source={require("../assets/expand-down.png")}
              />
            </Pressable>
          </View>
          <Text style={[styles.password, styles.emailTypo]}>Password</Text>
          <View style={[styles.rectangleContainer1, styles.groupLayout]}>
            <View style={styles.groupInnerShadowBox} />
            <TextInput
              style={styles.textTypo}
              onChangeText={setPassword}
              placeholder="enter your password"
              secureTextEntry={hidePassword}
            />
            <Pressable onPress={handleUnhidePassword}>
              <Image
                style={[styles.eyeLightIcon, styles.parentPosition]}
                contentFit="cover"
                source={require("../assets/eye-light1.png")}
              />
            </Pressable>
          </View>
          <Pressable style={[styles.button, styles.buttonPosition]} onPress={handleRegisterPress}>
            <View style={styles.rectangle} />
            <Text style={styles.createAccount}>Register</Text>
          </Pressable>
          <Text style={styles.orLoginWith}>or Register with</Text>
          <Pressable style={[styles.rectangleGroup, styles.groupLayout]} onPress={handleGoogleRegisterPress}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <View style={[styles.googleParent, styles.parentPosition]}>
              <Text style={[styles.google, styles.googleTypo]}>Google</Text>
              <Image
                style={[
                  styles.googleLogoPngSuiteEverythiIcon1,
                  styles.googleIconPosition,
                ]}
                contentFit="cover"
                source={require("../assets/googlelogopngsuiteeverythingyouneedknowaboutgooglenewest0removebgpreview-11.png")}
              />
            </View>
          </Pressable>
          <Pressable style={[styles.rectangleParent, styles.groupLayout]} onPress={handleFacebookRegisterPress}>
            <View style={[styles.groupChild, styles.groupLayout]} />
            <View style={[styles.facebookParent, styles.parentPosition]}>
              <Text style={[styles.facebook, styles.googleTypo]}>Facebook</Text>
              <Image
                style={[
                  styles.googleLogoPngSuiteEverythiIcon,
                  styles.googleIconPosition,
                ]}
                contentFit="cover"
                source={require("../assets/googlelogopngsuiteeverythingyouneedknowaboutgooglenewest0removebgpreview-1.png")}
              />
            </View>
          </Pressable>
          <Pressable style={styles.doseNotHaveContainer} onPress={handleLoginLinkPress}>
            <Text style={[styles.doseNotHave, styles.textStyle]}>Have an account yet?</Text>
            <Text style={[styles.register, styles.textStyle]}>Login</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  name: {

  },
  buttonPosition: {
    width: 375,
    left: 0,
  },
  groupLayout: {
    height: 52,
    width: 375,
    left: 0,
    position: "absolute",
  },
  parentPosition: {
    top: 13,
    height: 26,
    position: "absolute",
  },
  googleTypo: {
    textAlign: "left",
    left: 37,
    top: 0,
    height: 26,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  googleIconPosition: {
    height: 22,
    width: 23,
    top: 2,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.darkgray,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    top: 15,
    left: 18,
    height: 23,
    width: "100%",
    textAlign: "left",
    position: "absolute",
  },
  emailTypo: {
    left: 18,
    textAlign: "left",
    color: Color.darkslategray_100,
    height: 26,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  doseNotHave: {
    color: Color.darkslategray_100,
  },
  register: {
    color: Color.midnightblue,
  },
  doseNotHaveContainer: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    top: 655,
    width: 270,
    height: 26,
    position: "absolute",
  },
  textStyle: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  groupChild: {
    backgroundColor: Color.dodgerblue,
    borderRadius: Border.br_5xl,
    top: 0,
  },
  facebook: {
    width: 91,
    color: Color.white,
  },
  googleLogoPngSuiteEverythiIcon: {
    borderRadius: Border.br_xl,
  },
  facebookParent: {
    left: 124,
    width: 127,
  },
  rectangleParent: {
    top: 571,
  },
  groupItem: {
    borderStyle: "solid",
    borderColor: "#04005c",
    borderWidth: 1,
    borderRadius: Border.br_5xl,
    top: 0,
  },
  google: {
    color: Color.untitled2,
    width: 67,
  },
  googleLogoPngSuiteEverythiIcon1: {
    borderRadius: Border.br_5xl,
  },
  googleParent: {
    left: 136,
    width: 103,
  },
  rectangleGroup: {
    top: 501,
  },
  orLoginWith: {
    top: 445,
    left: 102,
    width: 172,
    height: 23,
    color: Color.darkslategray_100,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangle: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.slateblue,
    borderRadius: Border.br_5xl,
    position: "absolute",
    width: "100%",
  },
  createAccount: {
    marginTop: -10,
    width: "26.42%",
    top: "50%",
    left: "36.79%",
    fontSize: FontSize.size_xs,
    letterSpacing: 1,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  button: {
    top: 363,
    height: 48,
    overflow: "hidden",
  },
  groupInnerShadowBox: {
    shadowOpacity: 1,
    elevation: 47,
    shadowRadius: 47,
    shadowOffset: {
      width: -2,
      height: 6,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    top: 0,
    height: 52,
    width: 375,
    left: 0,
    position: "absolute",
  },
  eyeLightIcon: {
    left: 329,
    width: 28,
  },
  rectangleContainer: {
    top: 158,
  },
  
  rectangleContainer1: {
    top: 271,
  },
  password: {
    top: 230,
    width: 100,
  },
  name: {
    top: 115,
    width: 100,
  },
  groupView: {
    top: 45,
  },
  email: {
    width: 99,
    top: 0,
  },
  content: {
    height: 666,
    alignItems: "center",
  },
  signin: {
    backgroundColor: Color.gray_100,
    height: 750,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignUp;
